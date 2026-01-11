import { StarIcon } from "lucide-react";
import SectionHeader from "../common/section-header";

export default function TrendingProducts() {
  return (
    <>
    <section className="py-2 bg-muted/40">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader title="Trending Products"  icon={StarIcon} description="Top creations from our community"/>
        </div>
      </div>
    </section>
    </>
  );
}