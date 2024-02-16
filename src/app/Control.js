"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={"/update/" + id}>Update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={async () => {
                const resp = await fetch("http://localhost:9999/topics/" + id, {
                  method: "DELETE",
                });
                await resp.json();
                router.push();
                router.refresh();
              }}
            ></input>
          </li>
        </>
      ) : null}
    </ul>
  );
}
