import { FunctionComponent } from "react";
import { ISkill } from "../../type";

const SkillCard: FunctionComponent<{ skill: ISkill }> = ({
  skill: { title, about, Icon },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center p-4 space-x-4">
      <div>
        <Icon className="w-10 h-10 text-vstext2" />
      </div>
      <div>
        <h4 className="mb-1 font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default SkillCard;
