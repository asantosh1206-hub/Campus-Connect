import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bot, Send } from "lucide-react";

export default function Chat() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-black">AI Chat</h1>
        <p className="mt-3 text-slate-300">Campus placement assistant interface. Replace demo logic with IdeaBoxAI API/embed later.</p>
        <div className="mt-8 card p-6">
          <div className="mb-5 flex items-center gap-3">
            <Bot className="text-blue-400" />
            <b>Campus Placement Operations Manager</b>
          </div>
          <div className="space-y-4">
            <div className="max-w-xl rounded-2xl bg-slate-800 p-4">How do I check eligibility for a company?</div>
            <div className="ml-auto max-w-xl rounded-2xl bg-blue-600 p-4">
              Enter company criteria such as CGPA, branch, backlogs, and skills. The system will compare it with the student profile.
            </div>
            <div className="max-w-xl rounded-2xl bg-slate-800 p-4">Can it screen resumes?</div>
            <div className="ml-auto max-w-xl rounded-2xl bg-blue-600 p-4">
              Yes, the resume screening module can highlight missing skills, weak sections, and improvement suggestions.
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <input className="input" placeholder="Ask a placement question..." />
            <button className="btn flex items-center gap-2"><Send className="h-4 w-4" /> Send</button>
          </div>
          <p className="mt-4 text-sm text-yellow-300">Demo mode: waiting for IdeaBoxAI API key, persona ID, or embeddable widget.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
