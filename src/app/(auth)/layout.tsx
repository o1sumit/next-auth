"use client";

import AuthFormCard from "@/components/card/AuthFormCard";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  return (
    <section className="bg-gray-100">
      <AuthFormCard title={pathname === "/login" ? "Login" : "Sign Up"}>
        {children}
      </AuthFormCard>
    </section>
  );
};

export default AuthLayout;
