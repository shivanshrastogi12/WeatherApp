interface ErrorCompProps {
  message: string;
  isDarkMode: boolean;
}

export default function ErrorComp({ message, isDarkMode }: ErrorCompProps) {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="text-center py-8">
        {/* Error Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h3 className="text-lg font-medium text-red-500 mb-2">Error</h3>

        <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
          {message}
        </p>
      </div>
    </div>
  );
}
