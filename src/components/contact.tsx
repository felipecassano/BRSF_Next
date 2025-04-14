function Contact() {
  // Função para lidar com o envio do formulário

  return (
    <section
      id="contato"
      className="container mb-12 grid gap-8 bg-zinc-500 px-8 py-16 text-white sm:mb-16 lg:grid-cols-2 lg:px-16"
    >
      {/* Informações de Contato */}
      <div className="flex flex-col gap-8">
        <h1 className="font-serif text-4xl text-zinc-300">Nossos Contatos</h1>
        <p className="text-gray-200">
          Tem interesse em nossos produtos? Entre em contato conosco e saiba
          mais sobre como podemos atender às suas necessidades. Estamos prontos
          para ajudar você a encontrar as melhores soluções em alimentos
          congelados.
        </p>
        <div className="grid gap-6">
          {/* Base */}
          <div>
            <span className="neon inline-block h-0.5 w-6"></span>
            <h2 className="text-verde-300 mb-2 font-serif text-2xl">Base</h2>
            <p className="text-gray-300">
              Rua da Mata, 123 - Floresta Nacional - RJ
            </p>
          </div>

          {/* Email */}
          <div>
            <span className="neon inline-block h-0.5 w-6"></span>
            <h2 className="text-verde-300 mb-2 font-serif text-2xl">Email</h2>
            <p className="text-gray-300">contato@forest.com</p>
          </div>

          {/* Telefone */}
          <div>
            <span className="neon inline-block h-0.5 w-6"></span>
            <h2 className="text-verde-300 mb-2 font-serif text-2xl">
              Telefone
            </h2>
            <p className="text-gray-300">21 99999-9999</p>
          </div>
        </div>
      </div>

      {/* Formulário de Contato */}
      <form className="flex flex-col gap-4 bg-zinc-600 p-8 rounded-lg shadow-lg">
        <h2 className="font-serif text-3xl text-verde-300 mb-4">
          Envie uma mensagem
        </h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-200">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="rounded-md border border-gray-400 bg-zinc-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="rounded-md border border-gray-400 bg-zinc-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-gray-200">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="rounded-md border border-gray-400 bg-zinc-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 rounded-md bg-verde-300 px-4 py-2 text-zinc-800 font-bold hover:bg-verde-400"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
