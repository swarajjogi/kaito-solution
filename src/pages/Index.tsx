import { useRef } from "react";

const Index = () => {
  const reportsRef = useRef<HTMLDivElement | null>(null);

  // This could be passed to a sidebar component later
  const scrollToReports = () => {
    reportsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Navigation bar or sidebar (or link to it) */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={scrollToReports}
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Reports
        </button>
      </div>

      {/* Sections of the dashboard */}
      <section>
        <h2 className="text-xl font-bold mb-4">HR Dashboard</h2>
        {/* Employees, Attendance, Payroll, etc. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mock content blocks */}
          <div className="p-4 bg-gray-100 rounded shadow">Employees</div>
          <div className="p-4 bg-gray-100 rounded shadow">Attendance</div>
          <div className="p-4 bg-gray-100 rounded shadow">Payroll</div>
        </div>
      </section>

      {/* 📌 This is your scroll target */}
      <section ref={reportsRef} className="mt-10">
        <h2 className="text-xl font-bold mb-4">Reports</h2>
        <div className="p-4 bg-gray-200 rounded shadow">
          {/* Actual report content */}
          <p>All Departments | All Positions</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
