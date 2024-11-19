import React from "react";

interface FormCardProps {
  children: React.ReactNode;
  title: string;
}

const AuthFormCard: React.FC<FormCardProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default React.memo(AuthFormCard);
