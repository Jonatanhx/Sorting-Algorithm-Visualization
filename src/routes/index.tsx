import BubbleSort from "~/components/BubbleSort";
import Header from "~/components/Header";

export default function Home() {
  return (
    <main class="flex min-h-screen flex-col bg-black">
      <Header />
      <BubbleSort />
    </main>
  );
}
