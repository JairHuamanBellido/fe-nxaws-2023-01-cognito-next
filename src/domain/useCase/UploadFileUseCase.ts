import { IUseCase } from "@/src/core/common/useCase/IUseCase";
import { DITokens } from "@/src/core/di/di-token";
import { AWSS3Repository } from "@/src/infrastructure/aws/s3/repository/AWSS3Repository";
import { inject, injectable } from "inversify";
import { UploadFileUseCaseParams } from "../interface/IUploadFile";

@injectable()
export class UploadFileUseCase
  implements IUseCase<UploadFileUseCaseParams, void>
{
  constructor(
    @inject(DITokens.AWSS3Repository)
    private readonly _s3Repository: AWSS3Repository
  ) {}

  async execute(request: UploadFileUseCaseParams): Promise<void> {
    try {
      await this._s3Repository
        .upload({
          body: request.body,
          filename: request.name,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error(error);
    }
  }
}
