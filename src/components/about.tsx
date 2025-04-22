import Image from 'next/image';
import freshShrimp from '../imgs/fresh_shrimp.jpg';
import shrimpEstoque from '../imgs/shrimp_estoque.jpg';
import producao from '../imgs/producao.jpg';
import pescado from '../imgs/pescado.jpg';
import man from '../imgs/man.jpg';

function AboutUs() {
  return (
    <section
      id='quem-somos'
      className='flex items-center px-8 text-white max-sm:px-4'
    >
      <div className='grid w-full grid-cols-2 gap-10 py-10 max-sm:grid-cols-1'>
        <div className='text-ocean flex flex-col justify-center gap-10 rounded-lg p-10 max-sm:gap-4 max-sm:p-4'>
          <h1 className='font-sans text-2xl'>Quem somos</h1>
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
              src={man}
              alt='Casa 1'
            />
            <span className='absolute top-2 right-2 rounded-full bg-zinc-800 px-4 py-2 text-sm/none text-white uppercase'>
              Alguma legenda
            </span>
          </div>

          {/* Imagem inferior esquerda */}
          <div className='relative'>
            <Image
              className='h-62 w-full rounded-xl object-cover'
              src={producao}
              alt='Casa 2'
            />
            <span className='absolute top-2 right-2 rounded-full bg-zinc-800 px-4 py-2 text-sm/none text-white uppercase'>
              Alguma legenda
            </span>
          </div>

          {/* Imagem inferior direita */}
          <div className='relative'>
            <Image
              className='h-62 w-full rounded-xl object-cover'
              src={pescado}
              alt='Casa 3'
            />
            <span className='absolute top-2 right-2 rounded-full bg-zinc-800 px-4 py-2 text-sm/none text-white uppercase'>
              Alguma legenda
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
