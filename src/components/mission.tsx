import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

function Mission() {
  return (
    <section className='bg-lightblue flex flex-col items-center justify-around p-4 text-white lg:flex-row'>
      <div className='ml-4 flex h-30 w-30 items-center justify-center rounded-full bg-white lg:ml-30'>
        <FontAwesomeIcon
          icon={faFlag}
          className=''
          width={80}
          height={80}
          color='#002e47'
        />
      </div>
      <div className='text-ocean flex flex-col max-lg:mt-4 max-lg:items-center max-lg:gap-4'>
        <h2 className='text-4xl font-bold'>Missão</h2>
        <p className='mt-4 max-w-2xl text-start font-sans text-lg leading-8'>
          Nossa missão é fornecer produtos de alta qualidade e frescor,
          garantindo a satisfação dos nossos clientes e contribuindo para a
          preservação do meio ambiente.
          <br /> Trabalhamos com responsabilidade e ética, buscando sempre a
          excelência em nossos serviços e produtos.
        </p>
      </div>
    </section>
  );
}

export default Mission;
