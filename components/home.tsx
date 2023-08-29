export default function Screen() {
  return (
    <>
      <div className={"flex h-screen "}>
        <div
          className={"m-6 flex h-5/6 w-full flex-col flex-wrap justify-center"}
        >
          <div className={"py-4 text-9xl font-black text-black"}>Hey !</div>
          <div>
            {" "}
            Je suis (bientôt) fullstack developer mais ce que j'aime le plus
            c'est le front.{" "}
          </div>
          <div>
            J'aime coder de belle interface, si c'est ce que tu recherches,
            contactes moi !
          </div>
        </div>
      </div>
    </>
  );
}
