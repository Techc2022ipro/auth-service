import {Request, Response} from "express";
import ErrorWrapper from '@libraries/libs/ParserWrapper';
import {ProfileController} from "@/controller/ProfileController";

export const getProfileById = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'getProfileById', async () => {
    return await ProfileController.getUserProfileController(res.locals['user'].uid);
  })
}
