import { ISkill, IExperience, IWorkExperience } from "./type";
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
];

export const educationExperience:IExperience[] = [
    {
        title: 'Electronics & Telecommunication Engineering',
        subtitle: 'Goa College of Engineering (2016-2020)',
        score: 'Aggregate Percentage: 75.21%, CGPA: 7.92',
    },
    {
        title: 'Higher Secondary School (Science)',
        subtitle: 'GVM\'s S.N.J.A. Higher Secondary School(2014-2016)',
        score: 'Aggregate Percentage: 80.17%',
    },
    {
        title: 'Secondary School (Science)',
        subtitle: 'I.V.B.D High School (2008-2014)',
        score: 'Aggregate Percentage: 88.33%',
    }
]

export const workExperience:IWorkExperience[] = [
    {
        title: 'Software Developer',
        subtitle: 'Hummingbird Web Solutions',
        url: 'https://hbwsl.com/',
        tenure: 'February 2021 - Present',
        about: 'Work on building, optimising and scaling the wordpress plugin products and themes. Also E-Commerce solutions to clients using Adobe Magento2. Tech Stack & tools: React, Redux, PHP, SQL, Wordpress, KnockoutJs, Magento 2, Github, Bitbucket, Jira'
    },
    {
        title: 'Junior Developer',
        subtitle: 'Cybertrom Digital Services',
        url: 'http://cybertrom.com/',
        tenure: 'September 2020 - December 2020 (4 Months)',
        about: 'Worked on building system for Alderwwood Education that automates most of their administrative tasks like onboarding, finances, invoices, clients management, email reminders etc. Tech Stack & tools: Javascript, Laravel 8 PHP Framework, Tailwind, jQuery, Gitlab, Docker'
    },
]