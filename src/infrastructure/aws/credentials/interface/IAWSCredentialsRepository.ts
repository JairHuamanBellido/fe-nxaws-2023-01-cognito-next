import * as AWS from "aws-sdk/global";

export interface IAWSCredentialsRepository {
  saveCognitoCredentials(params: AWS.CognitoIdentityCredentials): void;
}
