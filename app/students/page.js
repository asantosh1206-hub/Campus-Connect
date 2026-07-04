import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentTable from "@/components/StudentTable";

export default function Students() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl font-black">Student Portal</h1>
        <p className="mt-3 text-slate-300">Student readiness and eligibility tracking.</p>
        <div className="mt-8"><StudentTable /></div>
      </section>
      <Footer />
    </main>
  );
}
