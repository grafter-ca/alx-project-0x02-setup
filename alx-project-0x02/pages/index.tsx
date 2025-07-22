import Header  from "@/components/layout/Header"
import { navLinks } from "@/constants";

export default function Home() {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center py-12">
      <h1>Welcome to My Application</h1>
      <p role="button" className="border-1 border-gray-300 px-4 py-2 my-4 rounded-full hover:bg-gray-300">This is the home page.</p>
    </div>
    </>
  );
}