import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  error?: boolean;
  errorMessage?: string;
}

const InputComponent = ({
  placeholder,
  type,
  error,
  errorMessage,
  ...rest
}: InputProps) => {
  return (
    <div className="flex flex-col mb-4">
      <input
        placeholder={placeholder}
        className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-0 focus:bg-gray-200 focus:outline-none focus:ring-0 focus:ring-blue-500 transition ease-in-out duration-150"
        type={type}
        {...rest}
      />
      {error && (
        <p className="text-red-500 text-xs mt-0.5 mx-1">{errorMessage}</p>
      )}
    </div>
  );
};
export default React.memo(InputComponent);
