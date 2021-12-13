import Link from "next/link";
import { FunctionComponent } from "react";

const Links: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ name, activeItem, setActiveItem, route }) => {
  return (
    <>
      {activeItem !== name && (
        <Link href={`/${route.toLocaleLowerCase()}`}>
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
