import { FunctionComponent } from "react";
import { IExperience } from "../../type";

const ExperienceCard: FunctionComponent<{
  experience: IExperience;
}> = ({ experience: { title, subtitle, score } }) => {
  return (
    <div className="mb-6 bg-vspanel dark:bg-dark-200">
      <div className="px-4 py-3">
        <h5 className="my-2 font-bold text-md">{title}</h5>
        <p className="text-sm font-semibold text-blue-500 ">{subtitle}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{score}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
