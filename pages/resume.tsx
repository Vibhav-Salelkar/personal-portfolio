import Head from "next/head";
import ExperienceCard from "../components/ExperienceCard/EdExperienceCard";
import WorkExperienceCard from "../components/ExperienceCard/WorkExperienceCard";
import { educationExperience, workExperience } from "../data";

export default function resume() {
  return (
    <div className="px-6">
      <Head>
        <title>Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="mt-3 mb-4 text-2xl font-bold">Experience</h5>
          {workExperience.map((w,i) => {
            return <WorkExperienceCard key={i} experience={w} />;
          })}
        </div>
        <div>
          <h5 className="mt-3 mb-4 text-2xl font-bold">Education</h5>
          {educationExperience.map((e,i) => {
            return <ExperienceCard key={i} experience={e} />;
          })}
        </div>
      </div>
    </div>
  );
}
