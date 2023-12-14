import Image from "next/image";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <ModeToggle />
      HELLO
    </div>
  );
}
