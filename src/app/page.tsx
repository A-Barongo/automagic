export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-32 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Smart Homes, IoT & Software Consulting
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl">
          We help innovators and businesses design prototypes, develop IoT solutions, 
          and build scalable software systems that bring ideas to life.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
          >
            Get in Touch
          </a>
          <a
            href="/portfolio"
            className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            View Portfolio
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          From idea to execution, we provide consulting and development services 
          that help you innovate faster and smarter.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900">Smart Home Consulting</h3>
            <p className="mt-2 text-gray-600">
              Guidance on connected devices, automation strategies, and system integration 
              for modern living.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900">IoT Prototyping</h3>
            <p className="mt-2 text-gray-600">
              Rapid prototyping of hardware and software solutions for proof of concept 
              and market validation.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900">Software Development</h3>
            <p className="mt-2 text-gray-600">
              Scalable web and mobile applications tailored to your business needs, 
              from MVPs to enterprise systems.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-900 text-center text-white">
        <h2 className="text-3xl font-bold">Let’s Build the Future Together</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Whether you need a prototype, a smart home solution, or full-stack 
          software development, we’re here to help.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
}
