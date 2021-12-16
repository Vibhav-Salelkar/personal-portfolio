import { FunctionComponent, useState } from "react";
import { IProject } from "../../type";

import Image from "next/image";
import Modal from "./Modal/Modal";

const ProjectCard: FunctionComponent<{
  project: IProject;
  setShowDetail: (id: null | number) => void;
  showDetail: null | number;
}> = ({
  project: { id, name, desc, img, source, github, category, tech },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={`/media/${img}`}
        alt=""
        className="cursor-pointer"
        onClick={(e) => {
          setShowDetail(id);
        }}
        width="300"
        height="180"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <Modal name={name} img={img} desc={desc} source={source} github={github} tech={tech} setShowDetail={setShowDetail}/>
      )}
    </div>
  );
};

export default ProjectCard;
