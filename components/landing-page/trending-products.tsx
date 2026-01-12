import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import SectionHeader from "../common/section-header";
import { Button } from "../ui/button";
import Product from "@/app/products/page";
import ProductCard from '@/components/products/product-card';

const FeaturedProducts = [
  {
    id: 1,
    name: "AI Chat Assistant",
    description: "Build your own intelligent chatbot with natural language processing.",
    tags: ["ai", "javascript", "nlp"],
    votes: 10,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Task Management App",
    description: "Full-stack web app with real-time collaboration features.",
    tags: ["react", "node.js", "database"],
    votes: 15,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "Interactive weather app with maps and forecasting API integration.",
    tags: ["typescript", "api", "frontend"],
    votes: 22,
    isFeatured: true,
  },
  {
    id: 4,
    name: "E-commerce Platform",
    description: "Scalable marketplace with payment processing and inventory management.",
    tags: ["fullstack", "commerce", "backend"],
    votes: 18,
    isFeatured: false,
  }
]

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
        
        </div><div className="grid-wrapper">
          {FeaturedProducts.map((product) => 
          <ProductCard key={product.id} product={product}/>)}
      </div>
    </section>
    </>
  );
}