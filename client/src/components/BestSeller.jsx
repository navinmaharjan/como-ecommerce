import products from "../../public/data/productData";
import Container from "./Container";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  return (
    <div className="pt-12 pb-8">
      <Container>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-serif font-semibold">Best Seller</h2>
         
        </div>
        <div className="grid grid-cols-4 gap-2">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BestSeller;
