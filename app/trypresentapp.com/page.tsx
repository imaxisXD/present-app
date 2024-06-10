import Hero from "@/components/hero";
import Featsection from "@/components/featsection";
import CTASECTION from "@/components/ctasection";

export default function Home() {
  return (
    <main className="relative " style={{ scrollBehavior: "smooth" }}>
      <Hero />
      <Featsection />
      <CTASECTION />
    </main>
  );
}
