import {S3ServiceInterface} from "@/interfaces/S3Interfaces";
import {InternalServerError} from "@/libraries/libs/error/Errors";
import {S3} from "aws-sdk";
import fs from "fs";

const s3 = new S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
})

export const S3Service: S3ServiceInterface= {
  async uploadImageService(image) {
    if(!process.env.AWS_BUCKET) throw new InternalServerError();
    const fileStream = fs.createReadStream(image.path);
    const uploadParams = {
      Bucket: process.env.AWS_BUCKET,
      Body: fileStream,
      Key: image.filename
    }

    const upload = await s3.upload(uploadParams).promise().catch(e => console.log(e));
    if(!upload) throw new InternalServerError();
    return upload.Key;
  } 
}

