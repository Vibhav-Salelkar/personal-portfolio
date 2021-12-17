import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  return (
    <Link href="/">
      <Image
        src="/media/profile.jfif"
        alt="my profile picture"
        className="mx-auto rounded-full"
        width="128"
        height="128"
        layout="intrinsic"
        quality="100"
      />
    </Link>
  );
}
