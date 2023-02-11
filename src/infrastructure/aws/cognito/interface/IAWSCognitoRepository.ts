import { ICallback } from "@/src/core/common/callback/ICallback";

export interface IAWSCognitoAuthenticationParams
  extends ICallback<any, string | null> {
  readonly username: string;
  readonly password: string;
}
export interface IAWSCognitoRepository {
  authenticate(params: IAWSCognitoAuthenticationParams): void;
}
