import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

import {
  getDataApi,
  createDataApi,
  updateDataApi,
  deleteDataApi,
} from "@/services/TestPage1API";
export default function usePost(key) {
  const queryClient = useQueryClient();

  const createData = useMutation(
    async (data: any) => {
      await createDataApi(data);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([key]);
      },
    }
  );
  const updateData = useMutation(
    async (data: any) => {
      await updateDataApi(data);

      await queryClient.invalidateQueries([key]);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([key]);
      },
    }
  );

  return { createData, updateData };
}
