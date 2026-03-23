import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import ProductCard from "../components/product/ProductCard";
import products from "../data/products";

function Products() {
  return (
    <>
      <PageBanner
        title="Our Products"
        subtitle="Discover core industrial systems and related components designed for heavy-duty applications."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Product Range"
            title="Engineered solutions for barrier systems and project support"
            text="Choose from our core product lines and accessory packages."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;