import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import ProductGrid from "@/components/ProductGrid";
import { LandingPage, getPageBySlug } from "@/utils/getPages";

export default async function Home({ params }: { params: { locale: string } }) {
  const landingPage = (await getPageBySlug("/", params.locale)) as LandingPage;
  return (
    <main className="">
      <Landing landingPage={landingPage} />
    </main>
  );
}
