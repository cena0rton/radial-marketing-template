import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Radial",
  description: "Login to your Radial account to get started.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
