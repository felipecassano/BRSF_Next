import Image from 'next/image';
import Pinheiro from '../imgs/parceiros/pinheiro.jpeg';
import Mundial from '../imgs/parceiros/Mundial.png';
import CocoBambu from '../imgs/parceiros/CocoBambu.png';
import ZonaSul from '../imgs/parceiros/ZonaSul.png';

function Clients() {
  return (
    <section
      id='clientes'
      className='mt-4 mb-4 flex w-full flex-col items-center justify-center py-15 text-black max-sm:px-4'
    >
      <div className='mb-6 flex flex-col items-center justify-center gap-4'>
        <h2 className='text-ocean text-3xl font-bold'>Clientes</h2>
        <p className='text-ocean text-sm'>
          A Brasil Seafood tem o orgulho de atender a uma ampla gama de
          clientes, incluindo supermercados, restaurantes e distribuidores em
          todo o Brasil e no exterior.
        </p>
      </div>
      {/* Lista de Clientes */}
      <div className='flex w-[100%] flex-col items-center justify-around gap-8 p-8 sm:flex-row'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <Image src={Mundial} alt='Cliente 1' className='h-22 w-42' />
          <h1>Supermercado Mundial</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image src={Pinheiro} alt='Cliente 2' className='h-22 w-22' />
          <h1>Supermercado Pinheiro</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image src={CocoBambu} alt='Cliente 3' className='h-22 w-22' />
          <h1>Coco Bambu</h1>
        </div>{' '}
        <div className='flex flex-col items-center justify-center'>
          <Image src={ZonaSul} alt='Cliente 3' className='h-22 w-22' />
          <h1>Mercado Zona Sul</h1>
        </div>
      </div>
    </section>
  );
}

export default Clients;
