"use client";
 
export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <h1 className="text-xl font-bold text-blue-600 mb-4">
        Welcome to Diabetes Health
      </h1>
      <p className="text-lg text-gray-700">
        You’ve successfully entered Free Mode or Guest Mode. <br />
        This is the dashboard where your data and tools will live.
      </p>
    </main>
  );
} 