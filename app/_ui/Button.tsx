"use client";
import { Eye } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
function Button({ id }: { id: number | string }) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();

  function handleParams() {
    if (
      params.has("characterId") &&
      params.get("characterId") === id.toString()
    ) {
      params.delete("characterId");
    } else {
      params.set("characterId", id.toString());
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <button onClick={handleParams}>
      <Eye color="#db293e" />
    </button>
  );
}

export default Button;
