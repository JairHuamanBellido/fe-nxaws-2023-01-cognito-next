import { CognitoIdentityCredentials } from "aws-sdk";
import { IAWSCredentialsRepository } from "../interface/IAWSCredentialsRepository";
import * as AWS from "aws-sdk/global";
import { injectable } from "inversify";

@injectable()
export class AWSCredentialsRepository implements IAWSCredentialsRepository {
  saveCognitoCredentials(credentials: CognitoIdentityCredentials): void {
    AWS.config.credentials = credentials;
  }
}
