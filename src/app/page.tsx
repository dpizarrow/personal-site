import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Hi! 👋
      </h1>
      <p className="text-md sm:text-lg mt-4 text-center">
        I&apos;m Diego, a Computer Science student at the University of Chile
      </p>
      <p className="text-md sm:text-lg text-center">
        Check out my projects, learn more about me, and feel free to connect!
      </p>

      {/* Button container */}
      <div className="flex md:hidden flex-row justify-center items-center space-x-4 mt-6">
        {" "}
        {/* Button 1 */}
        <Button className="px-4 py-2 rounded" variant="outline">
          <Link href="/about">About</Link>
        </Button>
        {/* Button 2 */}
        <Button className="px-4 py-2 rounded" variant="outline">
          <Link href="/skills">Skills</Link>
        </Button>
        {/* Button 3 */}
        <Button className="px-4 py-2 rounded" variant="outline">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
}
