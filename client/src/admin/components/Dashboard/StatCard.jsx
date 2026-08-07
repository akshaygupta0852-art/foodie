import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const StatCard = ({
  title,
  value,
  icon,
  color = "orange",
  change,
  changeType = "increase",
}) => {
  const colors = {
    orange: {
      bg: "bg-orange-50",
      text: "text-[#FF6B35]",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
    },
    red: {
      bg: "bg-red-50",
      text: "text-red-500",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
    },
  };

  const theme = colors[color] || colors.orange;

  return (
    <div
      className="
        rounded-2xl
        border border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.bg} ${theme.text}`}
        >
          {icon}
        </div>
      </div>

      {/* Footer */}

      {change && (
        <div className="mt-5 flex items-center gap-2">
          {changeType === "increase" ? (
            <FiTrendingUp className="text-green-500" />
          ) : (
            <FiTrendingDown className="text-red-500" />
          )}

          <span
            className={`text-sm font-medium ${
              changeType === "increase"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {change}
          </span>

          <span className="text-sm text-gray-400">
            vs last month
          </span>
        </div>
      )}
    </div>
  );
};

export default StatCard;