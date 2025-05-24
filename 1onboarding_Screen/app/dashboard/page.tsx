// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Welcome to Diabetes Health
      </h1>
      <p className="text-gray-700">
        You've successfully entered Free Mode or Guest Mode.<br />
        This is the dashboard where your data and tools will live.
      </p>
    </main>
  );
}