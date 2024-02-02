// CORE
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// CONSTANTS
import { COOKIE_NAME } from "../_config/constanst";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // COOKIE CHECK
  const cookieStore = cookies();
  if (cookieStore.has(COOKIE_NAME)) {
    return redirect("/");
  }

  return <main className="min-h-screen">{children}</main>;
}
