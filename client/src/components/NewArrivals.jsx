import products from "../../public/data/productData";
import Container from "./Container";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  return (
    <div className="pt-12 pb-8">
      <Container>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-serif font-semibold">New Arrivals</h2>
          <div className="flex gap-6 font-serif uppercase">
            <p>All</p>
            <p>Jackets</p>
            <p>Pants</p>
            <p>Accessories</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {products.slice(0, 8).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
