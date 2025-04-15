'use client';
import { useEffect, useState } from 'react';
import BrsfLogo from '../imgs/BRSF.avif';
import Image from 'next/image';
import BrsfSecondLogo from '../imgs/BRSF_Logo.png';

function Header() {
  useEffect(() => {
    const mobileButton = document.getElementById('mobile-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const handleButtonClick = () => {
      mobileMenu?.classList.toggle('hidden');
      mobileMenu?.classList.toggle('flex');
    };

    const handleMenuClick = () => {
      mobileMenu?.classList.add('hidden');
      mobileMenu?.classList.remove('flex');
      setIsMenuOpen(!isMenuOpen);
    };

    mobileButton?.addEventListener('click', handleButtonClick);
    mobileMenu?.addEventListener('click', handleMenuClick);

    // Cleanup event listeners on component unmount
    return () => {
      mobileButton?.removeEventListener('click', handleButtonClick);
      mobileMenu?.removeEventListener('click', handleMenuClick);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItemClasses = 'animate-slide-in-scale opacity-0';
  const navLinkClasses =
    'block p-4 max-lg:hover:bg-white/10 lg:px-0 lg:py-2 lg:underline-offset-8 lg:hover:underline hover:text-sky';

  return (
    <header className='bg-ocean flex items-center justify-between border-b-2 border-white/10 p-8'>
      <a href='./'>
        <Image
          priority
          width={150}
          color='white'
          height={150}
          src={BrsfSecondLogo}
          alt='BRSF Logo'
          className='h-10'
        />
      </a>

      <nav
        className='z-40 hidden items-center max-lg:fixed max-lg:inset-0 max-lg:w-full lg:block'
        id='mobile-menu'
      >
        <div className='fixed inset-0 bg-zinc-200/10 backdrop-blur-lg duration-200 ease-in-out lg:hidden'></div>
        {/* Close button in top-right corner */}
        <button
          onClick={toggleMenu}
          className='absolute top-11 right-12 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 transition-opacity duration-300 lg:hidden'
          aria-label='Fechar menu'
        >
          <span className='relative flex h-5 w-5'>
            <span className='absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-black'></span>
            <span className='absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-black'></span>
          </span>
        </button>

        <ul className='flex list-none gap-10 font-sans text-white uppercase transition-all max-lg:absolute max-lg:z-50 max-lg:w-full max-lg:flex-col max-lg:justify-center max-lg:gap-2 max-lg:divide-y-2 max-lg:divide-black/40 max-lg:p-10 max-lg:text-center *:max-lg:text-[20px] lg:flex lg:text-[15px]'>
          <li className={navItemClasses} style={{ animationDelay: '100ms' }}>
            <a className={navLinkClasses} href='#inicio'>
              Início
            </a>
          </li>
          <li className={navItemClasses} style={{ animationDelay: '200ms' }}>
            <a className={navLinkClasses} href='#quem-somos'>
              quem somos
            </a>
          </li>
          <li className={navItemClasses} style={{ animationDelay: '300ms' }}>
            <a className={navLinkClasses} href='#missao'>
              Missão
            </a>
          </li>
          <li className={navItemClasses} style={{ animationDelay: '400ms' }}>
            <a className={navLinkClasses} href='#clientes'>
              Clientes
            </a>
          </li>
          <li className={navItemClasses} style={{ animationDelay: '500ms' }}>
            <a className={navLinkClasses} href='#contato'>
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <button
        className='mouser-pointer flex cursor-pointer items-center justify-center gap-3 rounded-full bg-zinc-200 px-4 py-2 text-zinc-900 lg:hidden'
        onClick={toggleMenu}
        id='mobile-button'
      >
        <p>Menu</p>
        <span className='flex h-3 w-5 flex-col justify-between *:h-0.5 *:rounded-lg *:bg-black'>
          <span
            className={`transition-transform duration-300 ${
              isMenuOpen ? 'translate-y-1 rotate-45' : ''
            }`}
          ></span>
          <span
            className={`transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`transition-transform duration-300 ${
              isMenuOpen ? '-translate-y-1 -rotate-45' : ''
            }`}
          ></span>
        </span>
      </button>
    </header>
  );
}

export default Header;
