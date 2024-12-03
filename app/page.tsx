"use client";

import { idAtom, userAtom } from "@/store/store";
import { useAtom } from "jotai";

export default function Home() {
  const [{ data, isPending, isError }] = useAtom(userAtom);
  const [id, setId] = useAtom(idAtom);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <input
        type="number"
        max={9}
        min={1}
        value={id}
        onChange={(event) => {
          setId(+event.target.value);
        }}
      />
    </div>
  );
}
