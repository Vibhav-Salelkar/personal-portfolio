import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { FunctionComponent } from "react";

const Modal: FunctionComponent<{
  name: string;
  desc: string;
  img: string;
  source: string;
  github: string;
  tech: string[];
  setShowDetail: Function;
}> = ({ name, desc, img, source, github, tech, setShowDetail }) => {
  return (
    <div
      className="absolute top-0 z-10 grid grid-cols-1 p-10 text-black border-2 border-blue-100 dark:border-gray-700 bg-vspanel md:grid-cols-2 md:left-7 sm:left-4 md:top-28 gap-x-12 dark:text-white dark:bg-dark-100 left-2" 
      style={{ width: "92%" }}
    >
      <div>
        <div className="border-4 border-gray-800 rounded-lg dark:border-gray-700">
          <Image
            src={`/media/${img}`}
            alt=""
            width="200"
            height="120"
            layout="responsive"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2 my-4 md:flex-row">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-2 py-1 space-x-2 text-xs bg-gray-200 border-2 border-gray-400 rounded-lg md:px-4 md:py-2 md:text-lg sm:py-1 sm:text-sm sm:px-2 whitespace-nowrap dark:border-gray-700 dark:bg-dark-200"
          >
            <AiFillGithub /> <span>Source Code</span>
          </a>
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-2 py-1 space-x-2 text-xs bg-gray-200 border-2 border-gray-400 rounded-lg md:px-4 md:py-2 md:text-lg sm:py-1 sm:text-sm sm:px-2 whitespace-nowrap dark:border-gray-700 dark:bg-dark-200"
          >
            <AiFillProject /> <span>Live Demo</span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-base font-medium md:text-2xl">{name}</h2>
        <h5 className="mb-3 text-xs font-medium tracking-wider md:tracking-wide md:text-base">{desc}</h5>
        <div className="flex flex-wrap gap-1 mt-5 text-sm tracking-wider md:gap-2">
          {tech.map((tech, index) => {
            return (
              <span
                className="px-2 py-1 my-1 text-xs bg-gray-200 border-2 border-gray-400 rounded-lg md:px-3 md:py-2 dark:bg-dark-200 rounded-small md:text-base dark:border-gray-700"
                key={index}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => {
          setShowDetail(null);
        }}
        className="absolute bg-gray-200 rounded-full md:p-2 sm:p-1 top-3 right-3 focus:outline-none dark:bg-dark-200"
      >
        <MdClose size={20} />
      </button>
    </div>
  );
};

export default Modal;
