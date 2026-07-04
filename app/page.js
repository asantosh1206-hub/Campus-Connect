import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Bot, FileSearch, BarChart3, Users, Building2, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  { icon: Bot, title: "AI Placement Assistant", text: "Answer eligibility doubts, placement process questions, and preparation guidance." },
  { icon: FileSearch, title: "Resume Screening", text: "Review resumes and suggest improvements for recruiter readiness." },
  { icon: BarChart3, title: "Placement Analytics", text: "Track applications, shortlisted students, readiness score, and recruiter pipeline." },
  { icon: Users, title: "Student Management", text: "Manage profiles, skills, CGPA, backlogs, certifications, and status." },
  { icon: Building2, title: "Recruiter Connect", text: "Match recruiters with suitable students based on role requirements." },
  { icon: ShieldCheck, title: "Eligibility Verification", text: "Quickly verify company eligibility rules before students apply." }
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Campus Placement Operations Manager
          </div>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            AI-powered campus placement management platform
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Streamline recruitment, verify eligibility, screen resumes, track student readiness,
            and connect students with recruiters through an intelligent placement assistant.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/chat" className="btn">Launch AI Demo</Link>
            <Link href="/dashboard" className="btn-outline">View Dashboard</Link>
          </div>
        </div>
        <div className="card p-6">
          <div className="rounded-2xl bg-slate-900 p-5">
            <div className="mb-4 flex items-center gap-3">
              <Bot className="h-6 w-6 text-blue-400" />
              <h2 className="text-xl font-bold">AI Assistant Preview</h2>
            </div>
            <div className="space-y-4">
              <div className="max-w-[85%] rounded-2xl bg-slate-800 p-4 text-slate-200">Can I apply for Infosys if my CGPA is 7.2?</div>
              <div className="ml-auto max-w-[85%] rounded-2xl bg-blue-600 p-4">
                Yes. If the company requires minimum 6.5 CGPA and no active backlogs, you are eligible.
              </div>
              <div className="flex gap-2 rounded-2xl border border-white/10 bg-slate-800 p-3">
                <input className="flex-1 bg-transparent outline-none" placeholder="Ask placement related question..." />
                <button className="rounded-xl bg-blue-500 px-4 py-2">Send</button>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">Frontend demo. Connect IdeaBoxAI API/embed when access is provided.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">Core Features</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card p-6 hover:bg-white/10">
                <Icon className="mb-4 h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600 to-indigo-600 p-10">
          <h2 className="text-3xl font-bold">Ready for hackathon demo</h2>
          <p className="mt-3 max-w-2xl text-blue-100">
            Deploy on Vercel now. Later connect the real IdeaBoxAI persona when API/embed access is available.
          </p>
          <Link href="/dashboard" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-bold text-blue-700">
            Open Platform <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
