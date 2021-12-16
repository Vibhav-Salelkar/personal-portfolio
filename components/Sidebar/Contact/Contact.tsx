import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export default function Contact() {
  return (
    <>
      <div className="flex justify-around w-2/12 mx-auto my-5 md:justify-center md:w-full">
        <a href="https://www.linkedin.com/in/vibhavsalelkar" target="_blank">
          <AiFillLinkedin className="w-8 h-8 mx-2 text-blue-500 cursor-pointer" />
        </a>
        <a href="https://github.com/Vibhav-Salelkar" target="_blank">
          <AiFillGithub className="w-8 h-8 mx-2 cursor-pointer text-black-500" />
        </a>
      </div>
      <div
        className="py-4 my-5 text-sm bg-vspanel dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-4 h-4" />
          <span className="mt-1">Goa, India</span>
        </div>
        <p className="my-2 sm:ml-3">salelkarvibhav@gmail.com</p>
        <p className="my-2 sm:ml-3">7972457850</p>
      </div>
    </>
  );
}
