import Image from "next/image";

export default function LoginSideSection() {
  return (
    <figure className="hidden bg-blue-600 lg:flex items-center justify-center w-full h-full">
      <Image src="/logo.svg" width={100} height={100} alt="logo" />
    </figure>
  );
}
