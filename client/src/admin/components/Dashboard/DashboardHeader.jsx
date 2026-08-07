import { FiCalendar } from "react-icons/fi";
import useDashboard from "../../hooks/useDashboard";

const DashboardHeader = () => {
  // Greeting based on current time
  const hour = new Date().getHours();
  const {admin} = useDashboard();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="flex flex-col justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center">

      {/* Left */}

      <div>
        <p className="text-sm capitalize font-medium text-[#FF6B35]">
          {greeting}, {admin?.name} 👋
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-2 max-w-2xl text-gray-500">
          Manage restaurants, food items, customer orders,
          users, and monitor the overall performance of
          your CraveCart platform.
        </p>
      </div>

      {/* Right */}

      <div className="flex flex-col items-start gap-3 lg:items-end">

        <div className="flex items-center gap-2 rounded-xl border border-orange-100 bg-orange-50 px-4 py-2 text-sm text-[#FF6B35]">
          <FiCalendar size={18} />
          {today}
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500">
            System Status
          </p>

          <div className="mt-1 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

            <span className="text-sm font-medium text-green-600">
              All Systems Operational
            </span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default DashboardHeader;