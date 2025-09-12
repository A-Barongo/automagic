export default function PortfolioPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Portfolio</h1>
      <p className="text-lg text-gray-600 mb-6">
        A showcase of our projects in smart homes, IoT prototypes, and software development.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Replace placeholders with real projects later */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="font-semibold text-xl text-blue-700">Smart Lighting System</h2>
          <p className="text-gray-600 mt-2">Prototype for energy-efficient connected lighting.</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="font-semibold text-xl text-blue-700">IoT Weather Station</h2>
          <p className="text-gray-600 mt-2">Sensor network for environmental monitoring.</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="font-semibold text-xl text-blue-700">Fleet Management App</h2>
          <p className="text-gray-600 mt-2">End-to-end software solution for logistics tracking.</p>
        </div>
      </div>
    </main>
  );
}
