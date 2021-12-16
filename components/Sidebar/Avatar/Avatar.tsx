import Image from "next/image";

export default function Avatar() {
  return (
    <a href="/">
      <Image
        src="/media/profile.jfif"
        alt="my profile picture"
        className="mx-auto rounded-full"
        width="128"
        height="128"
        layout="intrinsic"
        quality="100"
      />
    </a>
  );
}
