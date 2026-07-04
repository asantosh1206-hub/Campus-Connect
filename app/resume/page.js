import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Upload, CheckCircle2 } from "lucide-react";

export default function Resume() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-black">Resume Screening</h1>
        <p className="mt-3 text-slate-300">Demo UI for AI-powered resume analysis.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card p-8">
            <Upload className="h-10 w-10 text-blue-400" />
            <h2 className="mt-4 text-2xl font-bold">Upload Resume</h2>
            <p className="mt-2 text-slate-300">PDF/DOC upload can be connected to IdeaBoxAI file-reading skill later.</p>
            <div className="mt-6 rounded-2xl border border-dashed border-white/20 p-10 text-center text-slate-400">
              Drag and drop resume here
            </div>
            <button className="btn mt-6 w-full">Analyze Resume</button>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-bold">Sample Analysis</h2>
            <div className="mt-5 space-y-4">
              {["Strong project section", "Add GitHub links", "Improve measurable achievements", "Mention SQL certification"].map((x) => (
                <div key={x} className="flex items-center gap-3 rounded-2xl bg-slate-900 p-4">
                  <CheckCircle2 className="text-green-400" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
