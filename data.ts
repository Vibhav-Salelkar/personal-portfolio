import { ISkill } from "./type";
import {RiComputerLine} from 'react-icons/ri';
import {FaServer,FaTools} from 'react-icons/fa';
import {MdDeveloperMode} from 'react-icons/md';

export const skills:ISkill[] = [
    {
        title: 'Frontend Development',
        about: 'Experience with Javascript/Typescript, React, Redux, Jquery, Bootstrap, Tailwind, Material UI, NextJs, HTML, CSS, LESS, Sass',
        Icon: RiComputerLine,
    },
    {
        title: 'Backend Development',
        about: 'Experience with backend technologies like NodeJS, Express, PHP, MongoDB and SQL.',
        Icon: FaServer,
    },
    {
        title: 'Version Control & tools',
        about: 'Experience working with Github, Bitbucket, GitLab and tools like Jira and Asana',
        Icon: FaTools,
    },
    {
        title: 'Programming languages',
        about: 'Javascript, TypeScript, PHP, Basics of Python & C++',
        Icon: MdDeveloperMode,
    },
]
