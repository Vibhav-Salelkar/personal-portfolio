import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  return (
    <Link href="/" passHref={true}>
      <Image
        src="/media/profile.png"
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
