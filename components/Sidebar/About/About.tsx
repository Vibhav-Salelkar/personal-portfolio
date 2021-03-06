import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <>
      <h3 className="my-5 text-2xl font-medium tracking-wider target font-Courgette">
        <span className="text-vstext2">Vibhav</span> Sinai Salelkar
      </h3>
      <p className="px-2 py-2 my-3 text-sm rounded-full bg-vspanel dark:bg-dark-200">
        Software Developer
      </p>
      {/* <a
        className="flex items-center justify-center px-2 py-2 my-3 text-sm rounded-full bg-vspanel dark:bg-dark-200"
        href=""
        download=""
      >
        <FiDownload className="w-4 h-4 mr-1" />
        Download Resume
      </a> */}
    </>
  );
}
