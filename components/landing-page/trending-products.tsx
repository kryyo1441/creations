export default function TrendingProducts() {
  return (
    <>
    <section className="py-20 bg-muted/30">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <h1>Trending products</h1>
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          View All
        </button>
        </div>
      </div>
    </section>
    </>
  );
}
const trendingProducts = [
  { id: 1, name: "Wireless Headphones", price: "$129.99", rating: 4.8, image: "🎧" },
  { id: 2, name: "Smart Watch", price: "$199.99", rating: 4.6, image: "⌚" },
  { id: 3, name: "USB-C Cable", price: "$19.99", rating: 4.9, image: "🔌" },
  { id: 4, name: "Phone Stand", price: "$24.99", rating: 4.7, image: "📱" },
];

return (
  <section className="py-20">
    <div className="wrapper">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingProducts.map((product) => (
          <div key={product.id} className="bg-card rounded-lg border p-4 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">{product.image}</div>
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-primary">{product.price}</span>
              <span className="text-sm text-muted-foreground">⭐ {product.rating}</span>
            </div>
            <button className="w-full mt-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);