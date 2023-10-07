import Employee from "@/interfaces/OrgStructure";
import Position from "@/interfaces/Position";
import toHyphenedStr from "@/utils/format/toHyphenedStr";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const api = createApi({
  reducerPath: "base",
  endpoints: (build) => ({
    //blank if no adjacent "enpoints" files
    getOrgStructure: build.query<Employee[], void>({
      query: () => ({ url: "/organisation/get-org-structure" }),
      providesTags: ["orgStructure"],
    }),
  }),
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.BASE_API}/`,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["orgStructure"],
});

export const {
  useGetOrgStructureQuery,
  util: { getRunningQueriesThunk },
} = api;
export const { getOrgStructure } = api.endpoints;
