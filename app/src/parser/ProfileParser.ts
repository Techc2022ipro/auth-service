import {Request, Response} from "express";
import ErrorWrapper from '@libraries/libs/ParserWrapper';
import {ProfileController} from "@/controller/ProfileController";

export const getProfileById = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'getProfileById', async () => {
    return await ProfileController.getUserProfileController(parseInt(req.params.uid))
  })
}

export const createUserProfile = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'createUserProfile', async () => {
    const uid = parseInt(res.locals['user'].uid);
    return await ProfileController.createUserProfileController({uid, ...req.body, profilePic: req.file});
  })
}

