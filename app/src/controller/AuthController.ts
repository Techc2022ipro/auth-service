import {AuthControllerInterfaces} from "@/interfaces/AuthInterfaces";
import CreateTokens from "@/libraries/libs/CreateTokens";
import {BadRequest, BaseError, InternalServerError, NotFound, Unauthorized} from "@/libraries/libs/error/Errors";
import {createUserProfileValidationSchema, getUserProfileValidationSchema, getUserValidationSchema, loginValidationSchema, signUpValidationSchema} from "@/schemas/AuthSchemas";
import {AuthService} from "@/services/AuthService";
import {S3Service} from "@/services/S3Service";
import * as bcrypt from 'bcrypt';

export const AuthControllers: AuthControllerInterfaces= {
  async getUserByIdController(query) {
    const userQuery = {uid: query}
    const isValid = await getUserValidationSchema.parseAsync(userQuery);
    if (!isValid) throw new BadRequest();
    return await AuthService.getUserByIdService(query);
  },

  async signupController(query) {
    const isValid = await signUpValidationSchema.parseAsync(query);
    if(!isValid) throw new BadRequest();
    if(query.confirmPassword !== query.password) throw new BadRequest();
    const user = {
      username: query.username,
      email: query.email,
      password: bcrypt.hashSync(query.password, 10),
      confirmPassword: query.confirmPassword
    }
    const createUser = await AuthService.signupService(user);
    if(!createUser) throw new InternalServerError();
    return createUser;
  },
  async loginController(query) {
    const isValid = await loginValidationSchema.parseAsync(query) ;
    if(!isValid) throw new BadRequest();
    const user = await AuthService.loginService(query);
    if(!user) throw new Unauthorized();
    const isValidPassword = await bcrypt.compare(query.password, user.password);
    if(!isValidPassword) throw new Unauthorized();
    const credentials = {
      uid: user.uid,
      username: user.username,
      email: user.email
    };
    return CreateTokens(credentials);
  },

  async getUserProfileController(uid) {
    const hasIssue = await getUserProfileValidationSchema.parseAsync(uid).catch(err => {return err});
    if(hasIssue.hasIssue) throw new BadRequest();
    const profile = await AuthService.getUserProfileService(uid);
    if(!profile) throw new BaseError(404,"User Profile Not setup");

    return profile;
  },

  async createUserProfileController(query) {
    const hasIssue = await createUserProfileValidationSchema.parseAsync(query).catch(err => {return err})
    if(hasIssue.hasIssue) {
      throw new BadRequest();
    }
    if(query.tags.length > 3) throw new BadRequest();
    if(query.profilePic) {
      const imageKey = await S3Service.uploadImageService(query.profilePic);
      const profile = {
        uid: query.uid,
        firstName: query.firstName,
        lastName: query.lastName,
        profilePic: imageKey,
        address: query.address,
        phoneNo: query.phoneNo,
        tags: query.tags
      }
      return await AuthService.createUserProfileService(profile);
    }
    const profile = {
        uid: query.uid,
        firstName: query.firstName,
        lastName: query.lastName,
        profilePic: "",
        address: query.address,
        phoneNo: query.phoneNo,
        tags: query.tags
    }
    return await AuthService.createUserProfileService(profile)
  },

  async getUserProfileByUidController(uid) {
    const hasIssue = await getUserValidationSchema.parseAsync(uid).catch(err => {return err});
    if(hasIssue.hasIssue) throw new BadRequest();

    const profile = await AuthService.getUserProfileService(uid);
    if(!profile) throw new NotFound();

    return profile;
  }
} 
