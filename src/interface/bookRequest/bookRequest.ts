import { BookRequest } from "./checkRequest";

export interface BookRequestResponse {
  success: boolean;
  requests: BookRequest[];
}
