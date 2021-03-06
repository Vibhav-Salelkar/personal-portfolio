import { GetStaticPropsContext } from "next";
import Head from "next/head";
import SkillCard from "../components/SkillCard/SkillCard";
import { skills } from "../data";

const index = () => {
  let aboutMe = `I'm currently a Software Developer at Hummingbird Web Solutions where my
  team and I work on building, optimising and scaling the wordpress plugin
  products and themes. Also E-Commerce solutions to clients using Adobe
  Magento2. With a little more interest and strength on the frontend side
  of the things, I work with JavaScript/TypeScript, React, Redux and many
  more and I'm currently learning Magento development. I also have some
  experience with backend technologies like NodeJS, Express, MongoDB and
  SQL.`;
  
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h5 className="my-2 font-medium ">
        {aboutMe}
      </h5>
      <div
        className="flex-grow p-4 mt-6 bg-gray-100 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="mt-4 mb-6 text-xl font-bold tracking-wide">
          What I Offer
        </h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="rounded-lg bg-vspanel dark:bg-dark-200 lg:col-span-1"
              >
                <SkillCard skill={skill} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
