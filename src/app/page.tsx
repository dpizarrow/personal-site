import Image from "next/image";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">Hi! 👋</h1>
      <p className="text-lg mt-4">
        I&apos;m Diego, a Computer Science student at the University of Chile
      </p>
      <p className="text-lg">
        Check out my projects, learn more about me, and feel free to connect!
      </p>
    </div>
  );
}
