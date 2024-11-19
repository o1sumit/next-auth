import React from "react";

interface PriamryBtnProps {
  btnText: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
}

const PriamryBtn: React.FC<PriamryBtnProps> = ({
  btnText,
  onClick,
  type,
}: PriamryBtnProps) => {
  return (
    <button
      className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
      onClick={onClick}
      type={type}
    >
      {btnText}
    </button>
  );
};

export default React.memo(PriamryBtn);
