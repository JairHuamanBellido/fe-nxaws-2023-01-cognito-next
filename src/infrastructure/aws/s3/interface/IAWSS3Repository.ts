import { Body, PutObjectOutput } from "aws-sdk/clients/s3";

export interface AWSS3UploadFileParams {
  readonly filename: string;
  readonly body: Body;
}
export interface IAWSS3Repository {
  upload(params: AWSS3UploadFileParams): Promise<PutObjectOutput>;
}
