const HamburgerToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="hamburger-toggle bg-yellow"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span className={`bar top ${isOpen ? "open" : ""}`} />
      <span className={`bar middle ${isOpen ? "open" : ""}`} />
      <span className={`bar bottom ${isOpen ? "open" : ""}`} />
    </button>
  );
};

export default HamburgerToggle;
