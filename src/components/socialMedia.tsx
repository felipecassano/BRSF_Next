import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function SocialMedia() {
  return (
    <section className='bg-white px-10 pb-12'>
      <div className='px-4w container mx-auto border-t-1 border-zinc-400 text-center'>
        <h2 className='text-ocean mt-8 mb-8 text-3xl font-bold'>
          Conheça nossas redes sociais
        </h2>

        <div className='mb-6 flex justify-center gap-3 md:gap-8'>
          {/* Facebook */}
          <a
            className='bg-ocean hover:bg-sky flex h-8 w-8 items-center justify-center rounded-full p-2'
            href='https://facebook.com'
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              size='2x'
              width={20}
              height={20}
              color='white'
            />
          </a>

          {/* LinkedIn */}
          <a
            className='bg-ocean hover:bg-sky flex h-8 w-8 items-center justify-center rounded-full p-2'
            href='https://facebook.com'
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size='2x'
              width={20}
              height={20}
              color='white'
            />
          </a>

          {/* YouTube */}
          <a
            className='bg-ocean hover:bg-sky flex h-8 w-8 items-center justify-center rounded-full p-2'
            href='https://facebook.com'
          >
            <FontAwesomeIcon
              icon={faYoutube}
              size='2x'
              width={20}
              height={20}
              color='white'
            />
          </a>

          {/* Instagram */}
          <a
            className='bg-ocean hover:bg-sky flex h-8 w-8 items-center justify-center rounded-full p-2'
            href='https://facebook.com'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size='2x'
              width={20}
              height={20}
              color='white'
            />
          </a>
        </div>
        <div className='flex justify-center gap-8'>
          <a
            className='bg-ocean hover:bg-sky flex items-center justify-center gap-2 rounded-lg p-3 text-white'
            href='
'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size='2x'
              width={20}
              height={20}
              color='white'
            />

            <p className='text-md font-medium text-white'>
              Siga nosso Instagram
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
