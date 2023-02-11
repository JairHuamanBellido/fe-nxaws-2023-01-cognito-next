import { IAuthentication } from "@/src/domain/interface/IAuthentication";
import { HttpRestApiAuthentication } from "@/src/infrastructure/api/auth/HttpRestApiAuthentication";
import { useMutation } from "@tanstack/react-query";

export default function useAuthentication() {
  const mutation = useMutation<any, any, IAuthentication>((payload) =>
    HttpRestApiAuthentication.auth(payload)
  );

  return mutation;
}
