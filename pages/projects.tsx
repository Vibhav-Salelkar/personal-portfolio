import { useTheme } from "next-themes";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar/ProjectNavbar";
import { projects as projectData } from "../data";
import { Category } from "../type";

export default function Projects() {
  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState(null);
  const {theme,setTheme} = useTheme()

  const handleCategories = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectData);
      setActive(category);
      return;
    }

    const filteredArr = projectData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filteredArr);
    setActive(category);
  };

  return (
    <div className="px-5 pb-2 overflow-y-scroll" style={{ height: "70vh" }}>
      <div
        className="absolute z-10 w-full h-full pointer-events-none"
        style={{ backgroundColor: theme!=='light' ? showDetail && "rgb(0 0 0 / 90%)" : showDetail && "rgb(255 255 255 / 90%)"  }}
      ></div>
      <ProjectNavbar handleCategories={handleCategories} active={active} />
      <div className="grid grid-cols-12 gap-4 my-3 ">
        {projects.map((project) => {
          return (
            <div key={project.id} className="col-span-12 p-2 bg-vspanel sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
              <ProjectCard
                project={project}
                key={project.name}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
