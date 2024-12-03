"use client";

import { postsAtom } from "@/store/store";
import { useAtom } from "jotai";

export default function Posts() {
  const [{ data, fetchNextPage, isPending, isError, isFetching }] =
    useAtom(postsAtom);

  return (
    <>
      {data.pages.map((page, index) => (
        <div key={index}>
          {page.map((post: any) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      ))}
      <button onClick={() => fetchNextPage()}>Next</button>
    </>
  );
}
