import { ICallback } from "@/src/core/common/callback/ICallback";

export interface IAuthentication {
  readonly username: string;
  readonly password: string;
}

export interface IAuthenticationWithCallback
  extends ICallback<any, string | null>,
    IAuthentication {}
