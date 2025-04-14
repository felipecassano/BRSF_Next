import Image from 'next/image';
import shrimp from '../imgs/shrimp.jpg';
import shrimp2 from '../imgs/shrimp2.jpg';
import shrimp3 from '../imgs/shrimp3.jpg';

function AboutUs() {
  return (
    <section
      id='quem-somos'
      className='mt-10 flex items-center bg-zinc-500/90 px-8 text-white max-sm:px-4'
    >
      <div className='grid w-full grid-cols-2 gap-10 py-20 max-sm:grid-cols-1'>
        {/* Texto */}
        <div className='flex flex-col justify-center gap-10 rounded-lg bg-zinc-800 p-10 max-sm:gap-4 max-sm:p-4'>
          <h1 className='font-sans text-2xl'>Brasil Seafood</h1>
          <p className='font-snas text-start text-sm leading-6 max-sm:text-center'>
            A Brasil Seafood é uma empresa especializada na produção e
            comercialização de alimentos congelados, com foco na qualidade e
            segurança alimentar. Com uma vasta experiência no setor, a empresa
            se destaca pela excelência em seus produtos e serviços.
            <br />
            <br />
            A empresa oferece uma ampla gama de produtos, incluindo peixes,
            frutos do mar, carnes e vegetais congelados, todos cuidadosamente
            selecionados e processados para garantir a frescura e o sabor
            excepcionais. A Brasil Seafood também se preocupa com a
            sustentabilidade e a responsabilidade ambiental, adotando práticas
            de pesca e produção responsáveis.
            <br />
            <br />
            Além disso, a Brasil Seafood conta com uma equipe altamente
            qualificada e comprometida com a qualidade, que trabalha
            constantemente para garantir a satisfação dos clientes. A empresa
            investe em tecnologia e inovação para oferecer produtos de alta
            qualidade e atender às necessidades do mercado.
            <br />
            <br />
            Com um compromisso com a qualidade, segurança alimentar e
            sustentabilidade, a Brasil Seafood é a escolha ideal para quem busca
            produtos congelados de alta qualidade e sabor excepcional. A empresa
            está sempre em busca de novas oportunidades e parcerias para
            expandir seus negócios e levar seus produtos a mais clientes em todo
            o Brasil e no exterior.
            <br />
          </p>
        </div>

        {/* Imagens */}
        <div className='grid grid-cols-2 gap-6 max-sm:grid-cols-1'>
          {/* Imagem superior */}
          <div className='relative col-span-2'>
            <Image
              className='h-62 w-full rounded-xl object-cover'
              src={shrimp}
              alt='Casa 1'
            />
            <span className='absolute top-2 right-2 rounded-full bg-zinc-800 px-4 py-2 text-sm/none text-white uppercase'>
              Camarão
            </span>
          </div>

          {/* Imagem inferior esquerda */}
          <div className='relative'>
            <Image
              className='h-62 w-full rounded-xl object-cover'
              src={shrimp2}
              alt='Casa 2'
            />
            <span className='absolute top-2 right-2 rounded-full bg-zinc-800 px-4 py-2 text-sm/none text-white uppercase'>
              Camarão com molho
            </span>
          </div>

          {/* Imagem inferior direita */}
          <div className='relative'>
            <Image
              className='h-62 w-full rounded-xl object-cover'
              src={shrimp3}
              alt='Casa 3'
            />
            <span className='absolute top-2 right-2 rounded-full bg-zinc-800 px-4 py-2 text-sm/none text-white uppercase'>
              Camarão frito
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

{
  /* <div className='grid *:col-start-1 *:row-start-1'> */
}
