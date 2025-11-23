import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SnackbarInitialState, {SnackbarMessageType} from "./types";

// const initialState: {message: string, severity: AlertProps["severity"] | undefined} = {message: "", severity: undefined}
const initialState: SnackbarInitialState = {id: "", snackbar: {message: "", severity: undefined}}

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    enqueueSnackbar: (state, action: PayloadAction<SnackbarMessageType>) => {
      const id = (Math.random() + "").split(".")[1];
      return {id: id, snackbar: action.payload};
    },
    removeSnackbar: (state, ) => {
      return {id: "", snackbar: {message: "", severity: undefined}};
    },
  },
});

export const {enqueueSnackbar, removeSnackbar} = snackbarSlice.actions;

export default snackbarSlice.reducer;