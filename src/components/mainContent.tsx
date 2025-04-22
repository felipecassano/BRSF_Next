// import seafoogImg from '../imgs/mainImg.avif';
import Fundo3 from '../imgs/Fundo3.png';
import Image from 'next/image';
import FundoAlternativo from '../imgs/fundoAlternativo.jpg';
import image from '../imgs/image.png';

function MainContent() {
  return (
    <main className=''>
      <div className='relative overflow-hidden px-8 pt-38 pb-18 text-white max-sm:px-4 max-sm:pt-12'>
        <Image
          src={Fundo3}
          alt='Imagem de fundo de frutos do mar'
          fill
          priority
          quality={100}
          className='absolute inset-0 -z-10 object-cover brightness-[0.75] saturate-[1.2]'
        />
        <div className='relative items-start justify-center'>
          <div className='block pb-25 text-3xl text-balance md:text-5xl'>
            <p
              style={{ animationDelay: '10ms' }}
              className='animate-slide-in-left opacity-0'
            >
              Distribuição de
            </p>
            <p
              style={{ animationDelay: '100ms' }}
              className='animate-slide-in-left mt-5 opacity-0'
            >
              Pescados e Frutos
            </p>
            <p
              style={{ animationDelay: '150ms' }}
              className='animate-slide-in-left mt-5 opacity-0'
            >
              do Mar com
            </p>
            <p
              style={{ animationDelay: '200ms' }}
              className='animate-slide-in-left mt-5 opacity-0'
            >
              Qualidade e <br className='block sm:hidden' /> Confiança
            </p>
          </div>
          <button className='bg-aqua animate-slide-in-left absolute bottom-8 cursor-pointer rounded-full px-6 py-3 text-white hover:bg-blue-600'>
            Entre em contato
          </button>
        </div>

        {/* Ícone para "Saiba mais" */}
        <div className='absolute right-0 bottom-8 left-0 flex flex-col items-center justify-center text-center font-serif'>
          <a href='#saiba-mais' className='mb-2 hover:underline'>
            Saiba mais
          </a>
          <div className='animate-bounce'>
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
              className='text-white'
            >
              <path d='M12 5v14' />
              <path d='m19 12-7 7-7-7' />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
