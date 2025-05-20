import Image from 'next/image';
import clienteFundo from '../imgs/mainBackground.JPG';

function MainContent() {
  return (
    <main className=''>
      <div className='relative overflow-hidden px-8 pt-38 pb-18 text-white max-sm:px-4 max-sm:pt-12 md:pb-38'>
        <Image
          style={{
            objectFit: 'cover',
            objectPosition: '50% 30%',
          }}
          src={clienteFundo}
          alt='Imagem de fundo de frutos do mar'
          fill
          priority
          quality={100}
          className='absolute inset-0 -z-10 brightness-[0.75] saturate-[1.2]'
        />
        <div className='absolute inset-0 -z-5 bg-black/35'></div>
        <div className='relative items-start justify-center'>
          <div className='md:text-5x text-clamp block pb-25 text-balance'>
            <p
              style={{ animationDelay: '10ms' }}
              className='animate-slide-in-left opacity-0'
            >
              Distribuição de
            </p>
            <p
              style={{ animationDelay: '100ms' }}
              className='animate-slide-in-left mt-3 opacity-0'
            >
              Pescados e Frutos
            </p>
            <p
              style={{ animationDelay: '150ms' }}
              className='animate-slide-in-left mt-3 opacity-0'
            >
              do Mar com
            </p>
            <p
              style={{ animationDelay: '200ms' }}
              className='animate-slide-in-left mt-3 flex flex-col items-start gap-2 opacity-0 md:flex-row md:items-center'
            >
              Qualidade e{' '}
              <span className='max-md:mt-1 max-md:ml-1'>Confiança</span>
            </p>
          </div>
          <button className='bg-aqua animate-slide-in-left hover:bg-ocean absolute bottom-8 cursor-pointer rounded-full px-4 py-2 text-sm text-white transition duration-300 ease-in-out sm:w-auto sm:px-6 sm:py-3 sm:text-base'>
            Entre em contato
          </button>
        </div>

        {/* Ícone para "Saiba mais" */}
        <div className='absolute right-0 bottom-1 left-0 flex flex-col items-center justify-center text-center font-serif'>
          <a href='#quem-somos' className='mb-2 hover:underline'>
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
