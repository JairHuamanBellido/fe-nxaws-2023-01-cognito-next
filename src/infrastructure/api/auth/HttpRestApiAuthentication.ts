import { IAuthentication } from "@/src/domain/interface/IAuthentication";
import axios from "axios";

export class HttpRestApiAuthentication {
  public static async auth({ password, username }: IAuthentication) {
    const request = await axios.post("/api/auth", { username, password });
    return request.data;
  }
}
