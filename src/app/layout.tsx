import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breaker Tactical Solutions",
  description: "Premium night vision & thermal optics. Turnkey range design & construction. Expert-led tactical training programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
