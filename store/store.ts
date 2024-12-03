import { atom } from "jotai";
import {
  atomWithQuery,
  atomWithSuspenseInfiniteQuery,
} from "jotai-tanstack-query";

export const idAtom = atom(1);
export const userAtom = atomWithQuery((get) => ({
  queryKey: ["users", get(idAtom)],
  queryFn: async ({ queryKey: [, id] }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  },
}));

export const postsAtom = atomWithSuspenseInfiniteQuery(() => ({
  queryKey: ["posts"],
  queryFn: async ({ pageParam }) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`
    );
    return res.json();
  },
  getNextPageParam: (lastPage, allPages, lastPageParam) => lastPageParam + 1,
  initialPageParam: 1,
}));
