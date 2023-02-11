import { AWSCognitoRepository } from "@/src/infrastructure/aws/cognito/repository/AWSCognitoRepository";
import { AWSCredentialsRepository } from "@/src/infrastructure/aws/credentials/repository/AWSCredentialsRepository";
import { Container } from "inversify";
import { AWSS3Repository } from "../../infrastructure/aws/s3/repository/AWSS3Repository";
import { DITokens } from "./di-token";

const DIContainer = new Container();

DIContainer.bind<AWSS3Repository>(DITokens.AWSS3Repository).to(AWSS3Repository);
DIContainer.bind<AWSCognitoRepository>(DITokens.AWSCognitoRepository).to(
  AWSCognitoRepository
);
DIContainer.bind<AWSCredentialsRepository>(
  DITokens.AWSCredentialsRepository
).to(AWSCredentialsRepository);

export { DIContainer };
