export default interface BackendResponseError {
  path: string;
  error: string;
  message: string;
  timestamp: string;
  status: number;
}