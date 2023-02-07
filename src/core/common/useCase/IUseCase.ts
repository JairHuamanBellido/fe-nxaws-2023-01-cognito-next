export interface IUseCase<IRequest = unknown, IResponse = unknown> {
  execute(request?: IRequest): Promise<IResponse> | Response;
}
