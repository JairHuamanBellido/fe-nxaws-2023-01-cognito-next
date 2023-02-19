import { Body } from "aws-sdk/clients/s3";

export interface UploadFileUseCaseParams {
  readonly name: string;
  readonly body: Body;
}
