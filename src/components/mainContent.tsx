import seafoogImg from "../imgs/mainImg.avif";
import Image from "next/image";

function MainContent() {
  return (
    <main className="mt-5 px-8">
      <div className="relative overflow-hidden rounded-2xl px-8 pt-44 pb-8 text-white max-sm:px-4 max-sm:pt-12">
        <Image
          src={seafoogImg}
          alt=""
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <h1 className="pb-30 font-sans text-6xl text-balance">
          Brasil Seafood Industria e Comércio de Alimentos
        </h1>
        <li className="mt-10 w-full list-none text-center font-serif">
          <a className="" href="">
            Saiba mais
          </a>
          <div className="flex w-full animate-bounce items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-2"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
        </li>
      </div>
    </main>
  );
}

export default MainContent;
