"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Input() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();
  function handleParams(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      params.delete("name");
    } else {
      params.set("name", event.target.value);
    }
    router.push(`${pathname}?${params.toString()}`);
  }
  return (
    <input
      type="text"
      onChange={handleParams}
      placeholder="Search For Characters"
      className="px-4 py-2 rounded-md outline-none border-none w-24 md:w-auto text-black focus:w-52 transition-all focus:outline-4 outline-offset-0 focus:outline-slate-700"
    />
  );
}

export default Input;
