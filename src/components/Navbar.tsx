export default function Navbar() {
  return (
   <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-zinc-800">
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-white">AutoVision</span>{" "}
        <span className="text-orange-500">AI</span>
      </div>

      <div className="hidden md:flex gap-8 text-gray-300">
        <a href="#" className="hover:text-orange-500 transition">
          Home
        </a>

        <a href="#" className="hover:text-orange-500 transition">
          Technologien
        </a>

        <a href="#" className="hover:text-orange-500 transition">
          News
        </a>

        <a href="#" className="hover:text-orange-500 transition">
          KI-Chat
        </a>

        <a href="#" className="hover:text-orange-500 transition">
          Über uns
        </a>
      </div>
    </nav>
  );
}
