import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companies } from "@/lib/data";
import { Building2 } from "lucide-react";

export default function Recruiters() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl font-black">Recruiter Portal</h1>
        <p className="mt-3 text-slate-300">Company criteria and candidate matching overview.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {companies.map((c) => (
            <div key={c.name} className="card p-6">
              <Building2 className="mb-4 h-8 w-8 text-blue-400" />
              <h2 className="text-2xl font-bold">{c.name}</h2>
              <p className="mt-2 text-slate-300">{c.criteria}</p>
              <p className="mt-4 font-semibold text-blue-300">{c.openings} openings</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
