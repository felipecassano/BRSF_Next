import shrimp from '../assets/shrimp.jpg';
import shrimp2 from '../assets/shrimp2.jpg';
import shrimp3 from '../assets/shrimp3.jpg';

function AboutTest() {
  return (
    <section
      id='quem-somos'
      className='radial-gradient container mb-12 grid gap-8 pt-16 sm:mb-16 lg:grid-cols-[2fr_3fr]'
    >
      <div className='ml-6 w-160 rounded-lg bg-zinc-200 pl-6'>
        <h1 className='mt-8 mb-8 font-serif text-4xl text-white lg:text-5xl'>
          Brasil Seafood
        </h1>
        <p className='w-3/4 text-start font-sans text-sm leading-6 max-sm:w-full max-sm:text-center'>
          A Brasil Seafood é uma empresa especializada na produção e
          comercialização de alimentos congelados, com foco na qualidade e
          segurança alimentar. Com uma vasta experiência no setor, a empresa se
          destaca pela excelência em seus produtos e serviços.
          <br />
          <br />
          A empresa oferece uma ampla gama de produtos, incluindo peixes, frutos
          do mar, carnes e vegetais congelados, todos cuidadosamente
          selecionados e processados para garantir a frescura e o sabor
          excepcionais. A Brasil Seafood também se preocupa com a
          sustentabilidade e a responsabilidade ambiental, adotando práticas de
          pesca e produção responsáveis.
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
          está sempre em busca de novas oportunidades e parcerias para expandir
          seus negócios e levar seus produtos a mais clientes em todo o Brasil e
          no exterior.
          <br />
        </p>
      </div>
      <div className='grid grid-cols-[2fr_1fr] gap-6 sm:gap-8'>
        <div className='col-span-full grid *:col-start-1 *:row-start-1'>
          <img
            className='h-62 w-full rounded-xl object-cover'
            src={shrimp}
            alt='Casa 1'
          />
          <span className='bg-verde-950/60 m-2 self-start justify-self-end rounded-full px-4 py-2 text-sm/none text-white uppercase'>
            Ruby
          </span>
        </div>
        <div className='grid *:col-start-1 *:row-start-1'>
          <img
            className='size-full rounded-xl object-cover'
            src={shrimp2}
            alt='Casa 2'
          />
          <span className='bg-verde-950/60 m-2 self-start justify-self-end rounded-full px-4 py-2 text-sm/none text-white uppercase'>
            Emerald
          </span>
        </div>
        <div className='grid *:col-start-1 *:row-start-1'>
          <img
            className='size-full rounded-xl object-cover'
            src={shrimp3}
            alt='Casa 3'
          />
          <span className='bg-verde-950/60 m-2 self-start justify-self-end rounded-full px-4 py-2 text-sm/none text-white uppercase'>
            Saphire
          </span>
        </div>
      </div>
    </section>
  );
}

export default AboutTest;
