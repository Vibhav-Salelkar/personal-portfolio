import { FunctionComponent } from "react";
import { IWorkExperience } from "../../type";

const WorkExperienceCard: FunctionComponent<{
  experience: IWorkExperience;
}> = ({ experience: { title, subtitle, url, tenure, about } }) => {
  return (
    <div className="mb-6 bg-gray-100">
      <div className="px-4 py-3">
        <h5 className="my-2 font-bold text-md">{title}</h5>
        <a
          className="font-semibold text-blue-400 text-md "
          href={url}
          target="_blank"
        >
          {subtitle}
        </a>
        <p className="mt-1 text-sm text-gray-600">{tenure}</p>
        <p className="mt-3 text-sm">{about}</p>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
