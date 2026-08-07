import { FiInbox } from "react-icons/fi";

const EmptyState = ({
  icon,
  title = "No Data Found",
  description = "There is nothing to display right now.",
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center">

      {/* Icon */}

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-[#FF6B35]">
        {icon || <FiInbox size={42} />}
      </div>

      {/* Title */}

      <h2 className="mt-6 text-2xl font-semibold text-gray-900">
        {title}
      </h2>

      {/* Description */}

      <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
        {description}
      </p>

      {/* Action Button */}

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="mt-8 rounded-xl bg-[#FF6B35] px-6 py-3 font-medium text-white transition hover:bg-[#e85b28]"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;