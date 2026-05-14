import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav-shell ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="flex items-center gap-2.5 no-underline">
        <img src={logo} alt="Shankara" className="w-11 h-7 object-contain" />
        <span className="font-serif text-xl font-semibold tracking-wide text-black">Shankara</span>
      </a>
      <ul className="flex items-center gap-9 list-none m-0 p-0">
        <li className="hidden md:block"><a href="#process" className="nav-link">Process</a></li>
        <li className="hidden md:block"><a href="#packages" className="nav-link">Packages</a></li>
        <li><a href="#contact" className="nav-link nav-pill">Enquire Now</a></li>
      </ul>
    </nav>
  );
}
