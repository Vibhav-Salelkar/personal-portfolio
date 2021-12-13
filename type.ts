import { IconType } from "react-icons";

export interface ISkill {
    title: string,
    about: string,
    Icon: IconType
}

export interface IExperience {
    title: string,
    subtitle: string,
    score: string,
}

export interface IWorkExperience {
    title: string,
    subtitle: string,
    tenure: string,
    url: string,
    about: string
}
