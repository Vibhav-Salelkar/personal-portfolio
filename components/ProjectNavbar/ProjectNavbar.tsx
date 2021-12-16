import { FunctionComponent } from "react";
import { Category } from "../../type";

const NavItem: FunctionComponent<{ value: Category | "all", handleCategories: Function, active:string }> = ({ value, handleCategories,active }) => {
  let dynamicClass = "capitalize cursor-pointer hover:text-vstext2";
  if(active === value) {
    dynamicClass+= " text-vstext2 font-bold";
  }
  return <li className={dynamicClass} onClick={()=>handleCategories(value)}>{value}</li>;
};

const ProjectNavbar:FunctionComponent<{handleCategories:Function, active:string}> = (props) => {
  return <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props}/>
      <NavItem value="react" {...props}/>
      <NavItem value="next" {...props}/>
      <NavItem value="node" {...props}/>
      <NavItem value="javascript/typescript" {...props}/>
      <NavItem value="mongo" {...props}/>
  </div>;
};

export default ProjectNavbar;
