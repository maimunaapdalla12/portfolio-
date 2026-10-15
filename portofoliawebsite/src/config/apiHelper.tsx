
import instance from "./config";
import type { AxiosResponse } from "axios";

interface ApiHelperProps {
  Uri: string;
  data?: unknown;
}

export const API_HELPER = async ({
  Uri,
  data,
}: ApiHelperProps): Promise<AxiosResponse> => {
  const response = await instance.post(Uri, data);
  return response;
};
