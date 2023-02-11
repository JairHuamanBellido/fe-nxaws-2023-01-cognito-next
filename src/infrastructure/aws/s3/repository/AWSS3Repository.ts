import {
  AWSS3UploadFileParams,
  IAWSS3Repository,
} from "../interface/IAWSS3Repository";
import * as AWS from "aws-sdk/global";
import S3, { PutObjectOutput } from "aws-sdk/clients/s3";
import { injectable } from "inversify";


@injectable()
export class AWSS3Repository implements IAWSS3Repository {
  private S3: S3;
  constructor() {
    this.S3 = new S3({
      credentials: AWS.config.credentials,
    });
  }

  async upload({
    body,
    bucketName,
    filename,
  }: AWSS3UploadFileParams): Promise<PutObjectOutput> {
    return await this.S3.putObject({
      Bucket: bucketName,
      Key: filename,
      Body: body,
    }).promise();
  }
}
