"use client"
import Homepage from "./pages/homepage";
import About from './components/about';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(90deg,#ffffff,#003968)]">
      <Homepage/>
      <About/>
    </div>
  );
}
