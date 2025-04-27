import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  // Função para lidar com o envio do formulário

  return (
    <section
      id='contato'
      className='container mb-12 grid gap-8 px-8 py-16 text-white sm:mb-16 lg:grid-cols-2 lg:px-16'
    >
      {/* Informações de Contato */}
      <div className='flex flex-col gap-8'>
        <h1 className='text-ocean font-serif text-4xl'>Nossos Contatos</h1>
        <p className='text-ocean'>
          Tem interesse em nossos produtos? Entre em contato conosco e saiba
          mais sobre como podemos atender às suas necessidades. Estamos prontos
          para ajudar você a encontrar as melhores soluções em alimentos
          congelados.
        </p>
        <div className='grid gap-6'>
          {/* Base */}
          <div>
            <h2 className='text-ocean mb-2 font-serif text-2xl'>Base</h2>
            <p className='text-gray-700'>
              Avenida Palmeira dos Indios, 2222 , Sala V - Fortaleza - CE
              <br />
              <span className='text-[14px] text-gray-700'>CEP: 60.874-410</span>
            </p>
          </div>

          {/* Email */}
          <div>
            <h2 className='text-ocean mb-2 font-serif text-2xl'>Email</h2>
            <p className='text-gray-700'>Contato@brsf.com.br</p>
          </div>

          {/* Telefone */}
          <div>
            <h2 className='text-ocean mb-2 font-serif text-2xl'>Telefone</h2>
            <div className='flex items-center justify-start gap-2'>
              <FontAwesomeIcon
                width={17}
                height={17}
                color='#606264'
                icon={faPhone}
              />

              <p className='text-gray-700'>(85) 9 8220-9988</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulário de Contato */}
      <form className='bg-ocean flex flex-col gap-4 rounded-lg p-8 shadow-lg'>
        <h2 className='mb-4 font-serif text-3xl text-white'>
          Envie uma mensagem
        </h2>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-gray-200'>
            Nome
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            className='text-ocean rounded-md border border-gray-400 bg-white p-2 focus:ring-2 focus:ring-zinc-300 focus:outline-none'
          />
        </div>
        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-gray-200'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='text-ocean rounded-md border border-gray-400 bg-white p-2 focus:ring-2 focus:ring-zinc-300 focus:outline-none'
            />
          </div>
          <div className='grid gap-1'>
            <label className='text-white' htmlFor='telefone'>
              Telefone
            </label>
            <input
              id='telefone'
              name='telefone'
              className='text-ocean rounded-md border border-gray-400 bg-white p-2 focus:ring-2 focus:ring-zinc-300 focus:outline-none'
              placeholder='(21) 00000-0000'
              type='text'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='message' className='text-gray-200'>
            Mensagem
          </label>
          <textarea
            id='message'
            name='message'
            required
            rows={4}
            className='text-ocean rounded-md border border-gray-400 bg-white p-2 focus:ring-2 focus:ring-zinc-300 focus:outline-none'
          ></textarea>
        </div>
        <button
          type='submit'
          className='hover:bg-sky mt-4 cursor-pointer rounded-md bg-zinc-300 px-4 py-2 font-bold text-zinc-800'
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
