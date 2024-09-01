"use client";
import SideBar from "@/components/SideBar";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Layout({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("b2exclusiveadmin");
    const expirationTime = localStorage.getItem("tokenExpiration");

    if (!token || Date.now() > expirationTime) {
      // Token not found or expired, redirect to login
      localStorage.removeItem("b2exclusiveadmin");

      router.push("/login");
    } else {
      // Token is valid, authenticate user
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <div className="md:flex h-full relative w-full mx-auto">
        <SideBar />
        {children}
      </div>
    </>
  );
}

export default Layout;
