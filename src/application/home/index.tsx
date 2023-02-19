import axios from "axios";
import { FormEvent, useState } from "react";

export const HomePage = () => {
  const [file, setFile] = useState<FileList>();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file[0]);
      formData.append("name", file[0].name);

      axios
        .post("/api/file",formData)
        .then((e) => {
          console.log(e);
        });
    }
  };
  return (
    <main>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files);
            }
          }}
          placeholder="Upload your file"
        />
        <button type="submit">Submit file</button>
      </form>
    </main>
  );
};
