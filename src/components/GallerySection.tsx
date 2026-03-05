import illustrationIdentity from "@/assets/illustration-identity.jpg";
import illustrationKindness from "@/assets/illustration-kindness.jpg";
import illustrationBelonging from "@/assets/illustration-belonging.jpg";
import illustrationFriendship from "@/assets/illustration-friendship.jpg";

const illustrations = [
  { src: illustrationIdentity, caption: "A quiet moment of self-discovery…" },
  { src: illustrationKindness, caption: "When Mouse stopped bullying…" },
  { src: illustrationFriendship, caption: "A moment of comfort and friendship…" },
  { src: illustrationBelonging, caption: "Finding where you truly belong…" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-12 text-foreground">
          Illustrations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {illustrations.map((ill, i) => (
            <div key={i} className="group">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src={ill.src}
                  alt={ill.caption}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-3 italic font-heading">
                {ill.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
