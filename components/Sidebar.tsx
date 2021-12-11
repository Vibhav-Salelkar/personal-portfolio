import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiDownload } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div>
      <img
        src="/media/profile.jfif"
        alt="my profile picture"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-5 text-2xl font-medium tracking-wider target font-Courgette">
        <span className="text-vstext2">Vibhav</span> Salelkar
      </h3>
      <p className="px-2 py-1 my-3 rounded-full bg-vspanel">
        Software Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-vspanel"
        href=""
        download=""
      >
        <FiDownload className="w-6 h-6 mr-2" />
        Download Resume
      </a>
      <div className="flex justify-around w-2/12 mx-auto my-5 md:justify-center md:w-full">
        <a href="">
          <AiFillLinkedin className="w-8 h-8 mx-2 text-blue-500 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 mx-2 cursor-pointer text-black-500" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-vspanel"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-6 h-6" />
          <span>Goa, India</span>
        </div>
        <p className="my-2">salelkarvibhav@gmail.com</p>
        <p className="my-2">9763048939/7972457850</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-vstext to-vstext2 focus:outline-none"
        onClick={() => window.open("mailto: salelkarvibhav@gmail.com")}
      >
        Email me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-vstext to-vstext2">
        Toggle
      </button>
    </div>
  );
};

export default Sidebar;
