import { configureStore } from "@reduxjs/toolkit";
import { credentialSlice } from "./slices/credentialsSlice";

export const store = configureStore({
  reducer: {
    credentials: credentialSlice.reducer,
  },
});
