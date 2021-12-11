import Link from "next/link";
import { FunctionComponent } from "react";

const Links: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
}> = ({ name, activeItem, setActiveItem }) => {
  return (
    <>
      {activeItem !== name && (
        <Link href={`/${name.toLocaleLowerCase()}`}>
          <a>
            <span
              className="hover:text-vstext2"
              onClick={() => setActiveItem(name)}
            >
              {name}
            </span>
          </a>
        </Link>
      )}
    </>
  );
};

export default Links;
