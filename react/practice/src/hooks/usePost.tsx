import { UseMutateContext } from "@/contexts/MutateContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
export default function usePost({
  url,
  queryKey,
  queryFn,
  query,
}: {
  url?: string;
  queryKey: string[];
  queryFn: Function;
  query?: any;
}) {
  const queryClient = useQueryClient();
  const { state, action } = UseMutateContext();

  const mutate = useMutation(
    async (query: any) => {
      action.action((e) => {
        e.isLoading = true;
        return { ...e };
      });
      await queryFn(query);
    },
    {
      onSuccess: async () => {
        action.action((e) => {
          e.isLoading = false;
          return { ...e };
        });
        await queryClient.invalidateQueries(queryKey);
      },
    }
  );
  return { mutate };
}
