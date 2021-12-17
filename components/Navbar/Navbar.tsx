import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Links from "./Links/Links";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, [pathname]);

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
          route=""
        />
        <Links
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="projects"
        />
        <Links
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="resume"
        />
      </div>
    </div>
  );
}
