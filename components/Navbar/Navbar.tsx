import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Links from "./Links/Links";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/" || pathname === "/about") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-vstext2 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex mr-2 text-lg space-x-7">
        <Links
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
        />
        <Links
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
        />
        <Links
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
        />
      </div>
    </div>
  );
}
