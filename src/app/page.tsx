import value from '../data.js' 
with { turbopackLoader: 'string-replace-loader', turbopackLoaderOptions: '{"search":"PLACEHOLDER","replace":"replaced value"}' }
import Navbar from "../
  components/Navbar";
    
  import {
  Battery,
  Brain,
  Car,
  Radar,
  Zap,
  Wrench,
  Search,
} from "lucide-react";

const topics = [
  { title: "Batterietechnik", icon: Battery },
  { title: "Künstliche Intelligenz", icon: Brain },
  { title: "Software-defined Vehicle", icon: Car },
  { title: "Sensorik", icon: Radar },
  { title: "Ladeinfrastruktur", icon: Zap },
  { title: "Fahrzeugprüfung", icon: Wrench },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
<Navbar />
        <h1 className="text-6xl font-bold text-center">
          AutoVision AI
        </h1>

        <p className="text-center text-xl text-gray-400 mt-4 mb-12">
          Die Zukunft der Mobilität verstehen – mit KI.
        </p>

        <div className="max-w-3xl mx-auto">

          <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4">

            <Search className="text-orange-500 w-6 h-6 mr-3" />

            <input
              type="text"
              placeholder="Was möchtest du über Automotive-Technologien wissen?"
              className="flex-1 bg-transparent outline-none text-lg"
            />

          </div>

          <button className="mt-6 w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold hover:bg-blue-500 transition">
            Analysieren
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <button
                key={topic.title}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-left hover:border-blue-500 hover:scale-105 transition"
              >
                <div className="flex items-center gap-4">

                  <Icon
                    className="text-orange-500"
                    size={32}
                    strokeWidth={2.2}
                  />

                  <span className="text-xl font-semibold text-white">
                    {topic.title}
                  </span>

                </div>

                <p className="text-gray-400 mt-4">
                  KI-gestützte Analysen, aktuelle Entwicklungen und technische Hintergründe.
                </p>

              </button>
            );
          })}

        </div>

        <footer className="mt-24 border-t border-zinc-800 pt-8 text-center text-gray-500">
          © 2026 AutoVision AI • Prototype v2.0
        </footer>

      </section>
    </main>
  );
}
