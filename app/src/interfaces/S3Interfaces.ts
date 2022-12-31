import {Image} from "@/entities/Auth";

export type S3ServiceInterface = {
  uploadImageService(image: Image): Promise<string>
}

