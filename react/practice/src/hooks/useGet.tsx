import { getDataApi } from "@/services/TestPage1API";
import { QueryFunction, useQuery } from "@tanstack/react-query";

export default function useGet({
  url,
  queryKey,
  queryFn,
  query,
}: {
  url?: string;
  queryKey: string[];
  queryFn: QueryFunction;
  query?: any;
}) {
  const {
    isLoading,
    error,
    data,
  }: {
    isLoading: boolean;
    error: any;
    data: { data: any[] };
  } = useQuery(queryKey, queryFn, {
    suspense: true,
    staleTime: 60 * 1000,
  });

  return {
    isLoading,
    error,
    data,
  };
}
