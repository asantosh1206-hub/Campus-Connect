import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import StudentTable from "@/components/StudentTable";
import { stats } from "@/lib/data";

export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl font-black">Placement Dashboard</h1>
        <p className="mt-3 text-slate-300">Live-style overview of campus recruitment operations.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="card p-6 lg:col-span-2">
            <h2 className="text-xl font-bold">Readiness Trend</h2>
            <div className="mt-6 flex h-64 items-end gap-4">
              {[45, 62, 58, 71, 80, 88].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-xl bg-blue-500" style={{height: `${h}%`}} />
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-bold">AI Insights</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• 68% students are recruiter-ready.</li>
              <li>• Resume improvement needed for 124 profiles.</li>
              <li>• Java, SQL, Python are top demanded skills.</li>
              <li>• 42 students match Deloitte criteria.</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <StudentTable />
        </div>
      </section>
      <Footer />
    </main>
  );
}
