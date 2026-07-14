import { BookRequest } from "./checkRequest";

export interface BookRequestResponse {
  success: boolean;
  requests: BookRequest[];
}

export interface BookRequestUpdateResponse {
  success: boolean;
  message: string;
}
