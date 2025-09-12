export default function ServicesPage() {
  const services = [
    { title: "Smart Home Consulting", desc: "We help you design, plan, and implement connected living spaces." },
    { title: "IoT Prototyping", desc: "From concept to working demo, we build hardware and software prototypes." },
    { title: "Software Development", desc: "Custom software solutions for startups, enterprises, and innovators." },
    { title: "Product Strategy", desc: "Guidance on turning your vision into scalable, market-ready solutions." },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div key={s.title} className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">{s.title}</h2>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
