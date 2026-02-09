import { db } from "@/db";
import { products } from "@/db/schema";

export async function getTrendingProducts() {
    const productsData = await db.select().from
    (products);

    console.log("Products data:", productsData);

    return productsData;
}