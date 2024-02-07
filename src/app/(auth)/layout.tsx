// CORE
import { redirect } from "next/navigation";

// UTILS
import { ServerCookieExtractor } from "../_utils/ServerCookieExtractor";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // COOKIE CHECK
  const { isLoggedIn } = ServerCookieExtractor();
  if (isLoggedIn) {
    return redirect("/");
  }

  return <main className="min-h-screen">{children}</main>;
}
