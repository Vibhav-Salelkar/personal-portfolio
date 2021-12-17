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
      className="absolute z-10 grid h-auto grid-cols-2 p-10 text-black bg-gray-100 md:left-7 sm:left-4 top-40 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
      style={{ width: "92%" }}
    >
      <div>
        <div className="border-4 border-gray-800 dark:border-gray-200">
          <Image
            src={`/media/${img}`}
            alt=""
            width="200"
            height="120"
            layout="responsive"
          />
        </div>
        <div className="flex justify-center my-4 space-x-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
          >
            <AiFillGithub /> <span>Source Code</span>
          </a>
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
          >
            <AiFillProject /> <span>Live Demo</span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
        <h5 className="mb-3 font-medium">{desc}</h5>
        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
          {tech.map((tech, index) => {
            return (
              <span
                className="px-1 bg-gray-200 py1 my1 dark:bg-dark-200 rounded-small"
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
        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
      >
        <MdClose size={30} />
      </button>
    </div>
  );
};

export default Modal;
