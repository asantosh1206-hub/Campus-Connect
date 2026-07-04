import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Navbar() {
  const links = [
    ["Home", "/"],
    ["Chat", "/chat"],
    ["Dashboard", "/dashboard"],
    ["Resume", "/resume"],
    ["Students", "/students"],
    ["Recruiters", "/recruiters"]
  ];
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-blue-500 p-2">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="text-xl font-black">Campus Connect AI</span>
        </Link>
        <div className="hidden gap-5 text-sm text-slate-300 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}
        </div>
      </div>
    </nav>
  );
}
