import Navbar from "app/components/nav";
import Footer from "app/components/footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto mt-8 flex min-w-0 max-w-xl flex-auto flex-col px-4 md:px-0">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
