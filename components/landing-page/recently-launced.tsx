import { CalendarIcon, RocketIcon, Section } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";

export default async function RecentlyLaunchedProducts() {
    const recentlyLauncedCreations = await getRecentlyLaunchedProducts();
    return(
        <>
            <section className="py-20 bg-muted/20">
                <div className="wrapper">
                    <SectionHeader 
                        title="Recently Launced Creations"
                        icon={RocketIcon}
                        description="Discover Latest Creations"
                    />
                    
                              {recentlyLauncedCreations.length > 0 ? (
                                <div className="grid-wrapper">
                                  {recentlyLauncedCreations.map((product) => 
                                    <ProductCard key={product.id} product={product}/>)}
                                </div>
                              ) : (
                                <EmptyState message="No creations launced in the last week. Check back later!" icon={CalendarIcon}/>
                              )}
                </div>
            </section>
        </>
    )
}