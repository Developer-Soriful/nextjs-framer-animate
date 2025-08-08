const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#8d493a] text-white font-bold py-3 px-6 rounded-md hover:bg-[#b85842] focus:outline-none focus:ring focus:ring-brown-500 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
