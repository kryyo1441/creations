import { db } from "@/db";

export async function getTrendingProducts() {
    const productsData = await db.select().from
    (products)
}