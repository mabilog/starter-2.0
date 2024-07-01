import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import ProductGrid from "@/components/ProductGrid";
import { getPageBySlug } from "@/utils/getPages";
import { LandingPage } from "@/utils/interfaces";

export default async function Home({ params }: { params: { locale: string } }) {
  const landingPage = (await getPageBySlug("/", params.locale)) as LandingPage;
  return (
    <main className="">
      <Landing landingPage={landingPage} />
    </main>
  );
}
