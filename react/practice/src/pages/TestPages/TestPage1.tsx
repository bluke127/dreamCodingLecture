import React, { ChangeEvent, useState } from "react";
import {
  getDataApi,
  createDataApi,
  updateDataApi,
  deleteDataApi,
} from "@/services/TestPage1API";
import TestIndex from "@/pages/TestPages/TestIndex";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Input from "@/components/Input/Input";
import styled from "@/styles/pages/TestIndex.module.scss";
import usePost from "@/hooks/usePost";
export default function TestPage1() {
  const {
    isLoading,
    error,
    data: { data: list },
  }: {
    isLoading: boolean;
    error: any;
    data: { data: any[] };
  } = useQuery(["testList"], () => getDataApi(), { staleTime: 60 * 1000 });
  const { createData, updateData } = usePost("testList");
  const [dataList, setDataList] = useState(list);
  const client = useQueryClient();
  const unshiftList = () => {
    setDataList((value) => {
      value.unshift({ index: "new", title: "", content: "" });
      return [...value];
    });
  };
  const onChangeValue = (e: ChangeEvent<Element>, idx, cate) => {
    setDataList((value) => {
      value[idx][cate] = (e.target as HTMLInputElement).value;
      return [...value];
    });
  };
  const saveData = async () => {
    await createData.mutate(dataList.filter((item) => item.index == "new"));
    await updateData.mutate(dataList.filter((item) => item.index != "new"));
    // await client.invalidateQueries(["testList"]);
  };
  return (
    <>
      {createData.isLoading || updateData.isLoading ? (
        <div>d</div>
      ) : (
        <div>
          {JSON.stringify(list)}
          {JSON.stringify(list)}
          {JSON.stringify(isLoading) + "?"}??????????????
          <div className="test">testPage1</div>
          <button onClick={unshiftList}>추가</button>
          <button onClick={saveData}>저장</button>
          <table style={{ backgroundColor: "blue" }}>
            <tr>
              <th>제목</th>
              <th>내용</th>
            </tr>
            {dataList.length ? (
              dataList.map((item, idx) => (
                <tr className={item.index === "new" ? styled.create_row : ""}>
                  <td>
                    <Input
                      value={item.title}
                      onChange={(e) => onChangeValue(e, idx, "title")}
                    />
                  </td>
                  <td>
                    <Input
                      value={item.content}
                      onChange={(e) => onChangeValue(e, idx, "content")}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <td></td>
            )}
          </table>
          <TestIndex />
        </div>
      )}
    </>
  );
}
