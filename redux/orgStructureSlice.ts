import OrgStructure from "@/interfaces/OrgStructure";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface OrgStructureState {
  memberList: OrgStructure[];
}

const initialState: OrgStructureState = {
  memberList: [],
};

const orgStructureSlice = createSlice({
  name: "orgStructure",
  initialState: { ...initialState },
  reducers: {
    addMemberList: (state, action: PayloadAction<OrgStructure[]>) => {
      state.memberList.push(...action.payload);
    },
  },
});

export default orgStructureSlice;
export const selectOrgStructure = (state: RootState) => state.orgStructure;
export const { addMemberList } = orgStructureSlice.actions;
