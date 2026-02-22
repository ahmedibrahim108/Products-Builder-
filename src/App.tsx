import ProductCard from "./components/productCard";
import { productList } from "./data";

function App() {
  const renderProducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-10 m-8 rounded-md">
      {renderProducts}
    </div>
  );
}

export default App;
