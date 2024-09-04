export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mx-auto max-w-2xl text-base">{children}</main>;
}
