const HamburgerToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="rounded-full p-4 bg-yellow relative w-12 h-12 cursor-pointer"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {/* Top Bar */}
      <span
        className={`absolute left-1/2 h-1 rounded-full bg-black transform transition-all duration-400 ease-in-out ${
          isOpen
            ? "top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 w-8 scale-110"
            : "top-1/2 translate-y-2 -translate-x-2 rotate-0 w-4"
        }`}
      />

      {/* Middle Bar */}
      <span
        className={`absolute left-1/2 -translate-x-1/2 w-8 h-1 rounded-full top-1/2 bg-black transform transition-all duration-400 ease-in-out ${
          isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
        }`}
      />

      {/* Bottom Bar */}
      <span
        className={`absolute left-1/2 h-1 rounded-full bg-black transform transition-all duration-400 ease-in-out ${
          isOpen
            ? "top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-45 w-8 scale-110"
            : "top-1/2 -translate-y-2 -translate-x-2 rotate-0 w-6"
        }`}
      />
    </button>
  );
};

export default HamburgerToggle;
