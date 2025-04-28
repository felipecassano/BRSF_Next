import Image from 'next/image';
import Pinheiro from '../imgs/parceiros/pinheiro.jpeg';
import Mundial from '../imgs/parceiros/Mundial.png';
import CocoBambu from '../imgs/parceiros/CocoBambu.png';
import ZonaSul from '../imgs/parceiros/ZonaSul.png';
import parme from '../imgs/parceiros/parme.jpg';

function Clients() {
  return (
    <section
      id='clientes'
      className='mt-4 flex w-full flex-col items-center justify-center py-8 text-black max-sm:px-4'
    >
      <div className='mb-6 flex flex-col items-center justify-center gap-4 px-8'>
        <h2 className='text-ocean text-3xl font-bold'>Clientes</h2>
        <p className='text-ocean text-sm'>
          A Brasil Seafood tem o orgulho de atender a uma ampla gama de
          clientes, incluindo supermercados, restaurantes e distribuidores em
          todo o Brasil e no exterior.
        </p>
      </div>
      {/* Lista de Clientes */}
      <div className='flex w-[100%] flex-col items-center justify-around gap-8 p-2 sm:flex-row'>
        <Image src={Mundial} alt='Cliente 1' className='h-22 w-42' />
        <Image src={Pinheiro} alt='Cliente 2' className='h-22 w-26' />
        <Image src={CocoBambu} alt='Cliente 3' className='h-26 w-28' />
        <Image src={ZonaSul} alt='Cliente 3' className='h-22 w-22' />
        <Image src={parme} alt='Cliente 3' className='h-22 w-22' />
      </div>
    </section>
  );
}

export default Clients;
