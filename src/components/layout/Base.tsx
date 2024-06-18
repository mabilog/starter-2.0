import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Base({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Navbar params={params} />
      {children}
      <Footer />
    </>
  );
}
