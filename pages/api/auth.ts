import "reflect-metadata";
import type { NextApiRequest, NextApiResponse } from "next";
import { DIContainer } from "@/src/core/di/di-container";
import { AuthenticationUseCase } from "@/src/domain/useCase/auth/AuthenticationUseCase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ id: string } | { message: string }>
) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const cognitoRepository = DIContainer.resolve(AuthenticationUseCase);
    await cognitoRepository.execute({
      password,
      username,
      callback: function (err, result) {
        if (result) {
          res.status(200).json({ id: result });
        }
        if (err) {
          res.status(400).json({ message: "Bad credentials" });
        }
      },
    });
  }
}
