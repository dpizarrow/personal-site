import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/nav/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Button>Home</Button>
      <ModeToggle />
    </div>
  );
}
