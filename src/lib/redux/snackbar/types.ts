// export type SeverityType = "info" | "error" | "warning" | "success";

export interface SeverityMap {
  info: "bg-severity-info";
  error: "bg-severity-error";
  warning: "bg-severity-warning";
  success: "bg-severity-success"
};

export type SeverityType = "info" | "error" | "warning" | "success";

export interface SnackbarMessageType {message: string, severity: SeverityType | undefined}

export default interface SnackbarInitialState {id: string, snackbar: SnackbarMessageType};