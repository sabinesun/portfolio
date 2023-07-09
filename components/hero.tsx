import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className={"flex h-screen items-center justify-center"}>
        <div className={" flex flex-col items-center"}>
          <div
            className={
              "flex h-48 w-48 flex-row items-center justify-center rounded-full bg-off-white pl-6"
            }
          >
            <Image
              src="/Image.png"
              alt="sun Logo"
              width={150}
              height={150}
              priority
            />
          </div>
          <div className={"flex flex-col justify-center"}>
            <span className={"p-5"}>
              {" "}
              Intern as Software Engineer at dcBrain
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
