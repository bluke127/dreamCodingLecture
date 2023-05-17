import React from "react";
import {
  getDataApi,
  createDataApi,
  updateDataApi,
  deleteDataApi,
} from "@services/TestPage1API";
import TestIndex from "@pages/TestPages/TestIndex";
import { useQuery } from "@tanstack/react-query";
export default function TestPage1() {
  const {
    isLoading,
    error,
    data: list,
  } = useQuery(["testList"], () => getDataApi());
  return (
    <div>
      {JSON.stringify(list)}
      {isLoading + "?"}??????????????
    </div>
  );
}
