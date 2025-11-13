// This is a minimal root layout required for Next.js
// The actual layout with html/body tags is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
