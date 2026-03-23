import Reveal from "../common/Reveal";

function ProductGallery({ images = [] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((image, index) => (
        <Reveal key={image} delay={index * 0.1}>
          <img
            src={image}
            alt={`Product view ${index + 1}`}
            className="h-64 w-full rounded-3xl object-cover shadow-sm"
          />
        </Reveal>
      ))}
    </div>
  );
}

export default ProductGallery;