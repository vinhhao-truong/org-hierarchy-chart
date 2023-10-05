import OrgStructure from "@/interfaces/OrgStructure";
import Position from "@/interfaces/Position";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "base",
  endpoints: (build) => ({
    //blank if no adjacent "enpoints" files
    getOrgStructure: build.query<OrgStructure[], void>({
      query: () => ({ url: "/organisation/get-org-structure" }),
      providesTags: ["orgStructure"],
    }),
  }),
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.BASE_API}/`,
  }),
  tagTypes: ["orgStructure"],
});

export const { useGetOrgStructureQuery } = api;
