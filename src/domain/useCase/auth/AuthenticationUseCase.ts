import { IUseCase } from "@/src/core/common/useCase/IUseCase";
import { DITokens } from "@/src/core/di/di-token";
import { AWSCognitoRepository } from "@/src/infrastructure/aws/cognito/repository/AWSCognitoRepository";
import { inject, injectable } from "inversify";
import { IAuthenticationWithCallback } from "../../interface/IAuthentication";

@injectable()
export class AuthenticationUseCase
  implements IUseCase<IAuthenticationWithCallback, any>
{
  constructor(
    @inject(DITokens.AWSCognitoRepository)
    private readonly _awsCognitoRepository: AWSCognitoRepository
  ) {}

  async execute(request: IAuthenticationWithCallback): Promise<any> {
    const { password, username, callback } = request;
    return await this._awsCognitoRepository.authenticate({
      username,
      password,
      callback,
    });
  }
}
