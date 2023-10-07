import toHyphenedStr from "@/utils/format/toHyphenedStr";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialState {
  isBlackMaskShown: boolean;
  highlightedEmployee?: string;
}

const initialState: InitialState = {
  isBlackMaskShown: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: { ...initialState },
  reducers: {
    onMask: (state) => {
      state.isBlackMaskShown = true;
      document.querySelector("body")?.classList.add("no-scrolling");
    },
    offMask: (state) => {
      state.isBlackMaskShown = false;
      document.querySelector("body")?.classList.remove("no-scrolling");
    },
    highlightEmployee: (state, action: PayloadAction<string>) => {
      state.highlightedEmployee = action.payload;

      //On mask
      state.isBlackMaskShown = true;
      document.querySelector("body")?.classList.add("no-scrolling");

      //Scroll and highlight the employee to the middle of the screen
      const thisEmployeeId = document.getElementById(
        `${toHyphenedStr(action.payload)}`
      );
      thisEmployeeId?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    },
    resetApp: (state) => {
      state.isBlackMaskShown = false;
      state.highlightedEmployee = undefined;
      document.querySelector("body")?.classList.remove("no-scrolling");
    },
  },
});

export default appSlice;
export const { onMask, offMask, highlightEmployee, resetApp } =
  appSlice.actions;
export const selectApp = (state: RootState) => state.app;
