"use client";
import { login, logout } from "@/lib/actions/auth";

export const SignOutButton = () => {
  return (
    <div>
      <button onClick={() => login()}> Sign In</button>
      <button onClick={() => logout()}> Sign Out</button>
    </div>
  );
};
