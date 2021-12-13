import { GetStaticPropsContext } from "next";
import SkillCard from "../components/SkillCard/SkillCard";
import { skills } from "../data";

const index = () => {  
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-2 font-medium ">
        I'm currently a Software Developer at Hummingbird Web Solutions where my team and I work on building, optimising and scaling the wordpress plugin products and themes. Also E-Commerce solutions to clients using Adobe Magento2. With a little more interest and strength on the frontend side of the things, I work with JavaScript/TypeScript, React, Redux and many more and I'm currently learning Magento development. I also have some experience with backend technologies like NodeJS, Express, MongoDB and SQL.
      </h5>
      <div className="flex-grow p-4 mt-6 bg-vspanel" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="mt-4 mb-6 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((skill) => {
            return <div className="bg-gray-200 rounded-lg lg:col-span-1">
               <SkillCard skill={skill} />
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
