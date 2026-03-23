import { useMemo } from "react";
import { useParams } from "react-router-dom";
import PageBanner from "../components/common/PageBanner";
import Breadcrumb from "../components/common/Breadcrumb";
import Reveal from "../components/common/Reveal";
import ProductSidebar from "../components/product/ProductSidebar";
import ProductGallery from "../components/product/ProductGallery";
import products from "../data/products";

function ProductDetail() {
  const { slug } = useParams();

  const product = useMemo(
    () => products.find((item) => item.slug === slug) || products[0],
    [slug]
  );

  return (
    <>
      <PageBanner
        title={product.name}
        subtitle={product.description}
        image={product.image}
      />

      <section className="page-padding">
        <div className="container-shell">
          <Breadcrumb items={[{ label: "Products", to: "/products" }, { label: product.name }]} />

          <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
            <Reveal>
              <ProductSidebar products={products} currentSlug={product.slug} />
            </Reveal>

            <div className="space-y-10">
              <Reveal>
                <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
                    {product.category}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">{product.name}</h2>
                  <p className="mt-5 leading-8 text-slate-600">{product.details}</p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {product.specs.map((spec, index) => (
                      <Reveal key={spec} delay={index * 0.06}>
                        <div className="rounded-2xl bg-slate-100 px-4 py-4 text-sm font-medium text-slate-700">
                          {spec}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>

              <ProductGallery images={product.gallery} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;