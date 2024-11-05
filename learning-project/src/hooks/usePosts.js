import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postApi } from "../api/postApi";

// get sai useQuery
// post, put, delete useMutation

export function usePosts(params) {
  const queryKey = ["/posts", params];

  const { data, isLoading, error, refetch } = useQuery({
    queryKey,
    queryFn: async () => await postApi.getAll(params),
  });

  return {
    data: data?.data || [],
    pagination: data?.pagination || {},
    isLoading,
    error,
    refetch,
  };
}

export function usePost(id) {
  const queryKey = ["/posts", id];

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: async () => await postApi.getById(id),
  });

  return {
    data,
    isLoading,
    error,
  };
}

export function useMutationPost() {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: async (body) => await postApi.create(body),
    onSuccess: () => {
      queryClient.invalidateQueries(["/posts"]);
    },
  });

  const update = useMutation({
    mutationFn: async (body) => await postApi.update(body),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["/posts"]);
      if (data) {
        queryClient.invalidateQueries(["/posts", data.id]);
      }
    },
  });

  const remove = useMutation({
    mutationFn: async (id) => await postApi.remove(id),
    onSuccess: () => queryClient.invalidateQueries(["/posts"]),
  });

  return {
    create,
    update,
    remove,
  };
}
