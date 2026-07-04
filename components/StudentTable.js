import { students } from "@/lib/data";

export default function StudentTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-900 text-slate-300">
          <tr>
            <th className="p-4">Student</th>
            <th className="p-4">Branch</th>
            <th className="p-4">Skills</th>
            <th className="p-4">Status</th>
            <th className="p-4">Readiness</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.name} className="border-t border-white/10 bg-white/[0.04]">
              <td className="p-4 font-semibold">{s.name}</td>
              <td className="p-4 text-slate-300">{s.branch}</td>
              <td className="p-4 text-slate-300">{s.skills}</td>
              <td className="p-4">{s.status}</td>
              <td className="p-4">{s.score}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
