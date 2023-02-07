export interface IAWSCognitoAuthenticationParams {
  readonly username: string;
  readonly password: string;
}
export interface IAWSCognitoRepository {
  authenticate(params: IAWSCognitoAuthenticationParams): void;
}
