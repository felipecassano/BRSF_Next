'use client';
import { useState } from 'react';
import BrsfLogo from '../imgs/BRSF.avif'; // Importando a imagem do logo
import Image from 'next/image';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItemClasses = 'flex flex-col items-center justify-center gap-1 ';
  const navLinkClasses = 'md:underline-offset-6 md:hover:underline';
  const navSeparatorClasses =
    'max-md:w-40 max-md:border-b-1 max-md:border-zinc-500';

  return (
    <header className='flex items-center justify-between bg-zinc-200 p-8'>
      <a href='./'>
        <Image
          priority
          width={150}
          height={150}
          src={BrsfLogo}
          alt='BRSF Logo'
          className='h-10'
        />
      </a>

      <nav
        className={`z-40 flex items-center max-md:fixed max-md:inset-0 max-md:w-full md:block ${
          isMenuOpen ? 'max-md:visible' : 'max-md:invisible'
        }`}
        id='mobile-menu'
      >
        <div
          className={`fixed inset-0 bg-white backdrop-blur-sm duration-200 ease-in-out ${
            isMenuOpen
              ? 'pointer-events-auto opacity-90'
              : 'pointer-events-none opacity-0'
          }`}
        ></div>
        {/* Close button in top-right corner */}
        <button
          onClick={toggleMenu}
          className={`absolute top-11 right-12 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-label='Fechar menu'
        >
          <span className='relative flex h-5 w-5'>
            <span className='absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-black'></span>
            <span className='absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-black'></span>
          </span>
        </button>

        <ul
          className={`flex list-none gap-12 font-sans text-[14px] uppercase transition-all duration-300 ease-in-out max-md:absolute max-md:w-full max-md:flex-col max-md:justify-center max-md:gap-2 max-md:p-10 max-md:text-center *:max-md:text-[20px] md:flex ${
            isMenuOpen
              ? 'max-md:flex max-md:translate-y-0 max-md:opacity-100'
              : 'max-md:hidden'
          } `}
        >
          <li className={navItemClasses}>
            <a
              className='underline-offset-6 max-md:text-blue-400 md:hover:underline'
              href='#inicio'
            >
              Início
            </a>
            <div className={navSeparatorClasses}></div>
          </li>
          <li className={navItemClasses}>
            <a className={navLinkClasses} href='#quem-somos'>
              quem somos
            </a>
            <div className={navSeparatorClasses}></div>
          </li>
          <li className={navItemClasses}>
            <a className={navLinkClasses} href='#missao'>
              Missão
            </a>
            <div className={navSeparatorClasses}></div>
          </li>
          <li className={navItemClasses}>
            <a className={navLinkClasses} href='#clientes'>
              Clientes
            </a>
            <div className={navSeparatorClasses}></div>
          </li>
          <li>
            <a className={navLinkClasses} href='#contato'>
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <button
        className='text-verde-900 mouser-pointer flex cursor-pointer items-center justify-center gap-3 rounded-full bg-zinc-200 px-4 py-2 md:hidden'
        onClick={toggleMenu}
      >
        <p>Menu</p>
        <span className='flex h-3 w-5 flex-col justify-between *:h-0.5 *:rounded-md *:bg-black'>
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
