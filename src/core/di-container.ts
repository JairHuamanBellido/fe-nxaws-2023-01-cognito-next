import { Container } from "inversify";
import { AWSS3Repository } from "../infrastructure/aws/s3/repository/AWSS3Repsoitory";
import { DITokens } from "./di-token";

const DIContainer = new Container();

DIContainer.bind<AWSS3Repository>(DITokens.AWSS3Repository).to(AWSS3Repository);

export { DIContainer };
