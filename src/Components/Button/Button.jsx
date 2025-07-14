const Button = ({ type, children, onClick, disabled }) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`w-full mt-2 py-1 rounded flex items-center justify-center transition-all active:translate-y-1
        ${
          type === "primary"
            ? "bg-gray-800 text-gray-100 active:bg-gray-900"
            : ""
        }
        ${type === "danger" ? "bg-red-600 text-white hover:bg-red-700" : ""}
        ${
          disabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed active:translate-y-0"
            : ""
        }
      `}
    >
      {children}
    </button>
  );
};

export default Button;
