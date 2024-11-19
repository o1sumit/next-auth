import Link from "next/link";
import React from "react";

interface CombinationTextBtnProps {
  text: string;
  href: string;
  btnText: string;
}

const CombinationTextBtn: React.FC<CombinationTextBtnProps> = ({
  text,
  href,
  btnText,
}: CombinationTextBtnProps) => {
  return (
    <p className="text-gray-900 mt-4">
      {/* Don&apos;t have an account? */}
      {text}
      <Link
        className="text-sm text-blue-500 -200 hover:underline mt-4"
        href={href}
      >
        &nbsp;{btnText}
      </Link>
    </p>
  );
};

export default React.memo(CombinationTextBtn);
