import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialState {
  isBlackMaskShown: boolean;
  isNotFoundPage: boolean;
  selectedEmployeeId?: string;
  highlightedEmployeeIds: string[];
}

const initialState: InitialState = {
  isBlackMaskShown: false,
  isNotFoundPage: false,
  highlightedEmployeeIds: [],
};

const appSlice = createSlice({
  name: "app",
  initialState: { ...initialState },
  reducers: {
    onMask: (state) => {
      state.isBlackMaskShown = true;
      document.querySelector("body")?.classList.add("no-scrolling"); //prevent user from scrolling when the mask is on
    },

    offMask: (state) => {
      state.isBlackMaskShown = false;
      document.querySelector("body")?.classList.remove("no-scrolling");
    },

    setNotFound: (state, action: PayloadAction<boolean>) => {
      state.isNotFoundPage = action.payload;
    },

    selectEmployee: (state, action: PayloadAction<string>) => {
      state.selectedEmployeeId = action.payload;

      //On mask
      state.isBlackMaskShown = true;
      document.querySelector("body")?.classList.add("no-scrolling");

      //Scroll and select the employee to the middle of the screen
      const thisEmployeeId = document.getElementById(
        `employee-${action.payload}`
      );
      thisEmployeeId?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    },

    setHighlightedEmployees: (state, action: PayloadAction<string[]>) => {
      state.highlightedEmployeeIds = action.payload;
    },

    unselectEmployee: (state) => {
      state.isBlackMaskShown = false;
      state.selectedEmployeeId = undefined;
      document.querySelector("body")?.classList.remove("no-scrolling");
    },
  },
});

export default appSlice;
export const {
  onMask,
  offMask,
  selectEmployee,
  unselectEmployee,
  setHighlightedEmployees,
  setNotFound,
} = appSlice.actions;

export const selectApp = (state: RootState) => state.app;
