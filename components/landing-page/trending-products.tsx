import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import SectionHeader from "../common/section-header";
import { Button } from "../ui/button";

export default function TrendingProducts() {
  return (
    <>
    <section className="py-2 bg-muted/40">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader title="Trending Products"  icon={StarIcon} description="Top creations from our community"/>
            <Button 
            className="hidden sm:flex" 
            variant="outline" 
            asChild>
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4"/>
            </Link>
            </Button>
        </div>
      </div>
    </section>
    </>
  );
}