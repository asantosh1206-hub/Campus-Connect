export default function StatCard({ label, value }) {
  return (
    <div className="card p-6">
      <p className="text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-black">{value}</p>
    </div>
  );
}
