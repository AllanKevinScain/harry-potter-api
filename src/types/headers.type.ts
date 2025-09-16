import { IncomingHttpHeaders } from "http";

export interface HeadersHandleAuthApiKeyInterface extends IncomingHttpHeaders {
  api_key?: string;
}
