"use client";
import { useState, useRef } from "react";
import Homepage from "./homepage/page";
import Contact from "./contact/page";
import AAbout from "./about/page";
import Intro from "./components/intro";

export default function Home() {
  const [showLandingPage, setShowLandingPage] = useState(false);

  return (
    <>
      {!showLandingPage && <Intro onAnimationEnd={() => setShowLandingPage(true)} />}
      {showLandingPage && (
        <div className="min-h-screen overflow-hidden bg-[linear-gradient(90deg,#ffffff,#003968)]">
          <Homepage />
          <AAbout />
          <Contact />
        </div>
      )}
    </>
  );
}
