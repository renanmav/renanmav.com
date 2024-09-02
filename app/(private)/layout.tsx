export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mx-auto mt-8 max-w-2xl text-base">{children}</main>;
}
