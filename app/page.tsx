import { FinalCta, Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProcessSection } from "@/components/ProcessSection";
import { ResultsSection } from "@/components/ResultsSection";
import { SolutionsSection } from "@/components/SolutionsSection";

export default function Home() {
  return <><Header /><main><Hero /><ProcessSection /><SolutionsSection /><ResultsSection /><FinalCta /></main><Footer /></>;
}
