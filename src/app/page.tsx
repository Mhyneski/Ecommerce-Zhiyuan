import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-white h-[60px] flex items-center justify-evenly">
        <p className="text-2xl font-bold">Zhiyuan</p>
        <p className="text-2xl">Shop</p>
        <p className="text-2xl">About Us</p>
        <p className="text-2xl">Developers</p>
      </nav>
      <div className="flex justify-center items-center min-h-[80vh]">
        <Hero />
      </div>
    </div>
  );
}
