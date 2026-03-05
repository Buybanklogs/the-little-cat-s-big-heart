import { Button } from "@/components/ui/button";

const PurchaseSection = () => {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="bg-card rounded-3xl shadow-2xl p-10 md:p-14 max-w-lg w-full text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6 text-foreground">
            Get Your Copy
          </h2>
          <div className="space-y-3 text-muted-foreground mb-8">
            <p className="text-2xl font-heading text-foreground">$14.99</p>
            <p>📖 Paperback · Full Color</p>
            <p>👶 Ages 5–10 (Grades 1–4)</p>
            <p>🚚 Free shipping on orders over $25</p>
          </div>
          <Button variant="cta" size="lg" className="text-base px-10 py-6 rounded-full w-full sm:w-auto">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
