import { ICallback } from "@/src/core/common/callback/ICallback";

export interface IAuthentication extends ICallback<any, string | null> {
  readonly username: string;
  readonly password: string;
}
