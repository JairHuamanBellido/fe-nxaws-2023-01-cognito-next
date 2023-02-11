export interface ICallback<IError = unknown, IResponse = unknown> {
  callback: (err: IError, response: IResponse) => void;
}
