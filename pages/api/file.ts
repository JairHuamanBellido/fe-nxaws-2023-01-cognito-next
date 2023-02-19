import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { DIContainer } from "@/src/core/di/di-container";
import { UploadFileUseCase } from "@/src/domain/useCase/UploadFileUseCase";
import formidable, { File } from "formidable";
import { promises } from "fs";

const form = new formidable.IncomingForm();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const uploadUseCase = DIContainer.resolve(UploadFileUseCase);

  form.parse(req, async (err, fields, files) => {
    if (err) throw err;

    try {
      const fileData = await promises.readFile((files.file as File).filepath);
      await uploadUseCase.execute({
        body: fileData,
        name: `marketing/${fields.name as string}`,
      });

      res.status(200).json({ message: "file submitted" });
    } catch (error) {
      res.status(500).json(error);
    }
  });
}
export const config = {
  api: {
    bodyParser: false,
  },
};
