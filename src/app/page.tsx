export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        AutoVision AI
      </h1>

      <p className="text-xl text-gray-400 mb-10 text-center">
        Die Zukunft der Mobilität verstehen – mit KI.
      </p>

      <div className="w-full max-w-2xl">
        <input
          className="w-full rounded-2xl bg-zinc-900 border border-zinc-700 px-6 py-5 text-lg outline-none"
          placeholder="Was möchtest du über Automotive-Technologien wissen?"
        />

        <button className="mt-5 w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold hover:bg-blue-500">
          Analysieren
        </button>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 max-w-4xl">
        {[
          "🔋 Batterietechnik",
          "🤖 Künstliche Intelligenz",
          "🚗 Software-defined Vehicle",
          "📡 Sensorik",
          "⚡ Ladeinfrastruktur",
          "🛠 Fahrzeugprüfung",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 text-center hover:border-blue-500 transition"
          >
            {item}
          </div>
        ))}
      </section>
    </main>
  );
}

       
        
