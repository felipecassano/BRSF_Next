// import seafoogImg from '../imgs/mainImg.avif';
import Fundo3 from '../imgs/Fundo3.png';
import Image from 'next/image';

function MainContent() {
  return (
    <main className=''>
      <div className='relative overflow-hidden px-8 pt-44 pb-18 text-white max-sm:px-4 max-sm:pt-12'>
        <Image
          src={Fundo3}
          alt='Imagem de fundo de frutos do mar'
          fill
          priority
          quality={100}
          className='absolute inset-0 -z-10 object-cover'
        />
        <h1 className='block pb-25 text-5xl text-balance'>
          <p
            style={{ animationDelay: '10ms' }}
            className='animate-slide-in-left opacity-0'
          >
            Distribuição de
          </p>
          <p
            style={{ animationDelay: '100ms' }}
            className='animate-slide-in-left mt-2 opacity-0'
          >
            Pescados e Frutos
          </p>
          <p
            style={{ animationDelay: '150ms' }}
            className='animate-slide-in-left mt-2 opacity-0'
          >
            do Mar com
          </p>
          <p
            style={{ animationDelay: '200ms' }}
            className='animate-slide-in-left mt-2 opacity-0'
          >
            Qualidade e Confiança
          </p>
        </h1>
        <li className='mt-10 w-full list-none text-center font-serif'>
          <a className='' href=''>
            Saiba mais
          </a>
          <div className='flex w-full animate-bounce items-center justify-center text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mt-2'
            >
              <path d='M12 5v14' />
              <path d='m19 12-7 7-7-7' />
            </svg>
          </div>
        </li>
      </div>
    </main>
  );
}

export default MainContent;
