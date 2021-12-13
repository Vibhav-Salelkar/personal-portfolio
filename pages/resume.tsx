import ExperienceCard from "../components/ExperienceCard/EdExperienceCard";
import WorkExperienceCard from "../components/ExperienceCard/workExperienceCard";
import { educationExperience, workExperience } from "../data";

export default function resume() {
  return (
    <div className="px-6">
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
