import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bookCover from "@/assets/book-cover.jpg";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-2xl">
        <button
          onClick={() => navigate("/")}
          className="text-primary hover:underline mb-8 inline-flex items-center gap-1 font-heading"
        >
          ← Back to Home
        </button>

        <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={bookCover}
              alt="The Cat Who Thought He Was a Mouse"
              className="w-40 rounded-xl shadow-lg mb-6"
            />
            <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-2">
              Order Summary
            </h1>
            <p className="text-muted-foreground">
              The Cat Who Thought He Was a Mouse
            </p>
          </div>

          <div className="border-t border-b border-border py-6 mb-8 space-y-3">
            <div className="flex justify-between text-foreground">
              <span>📖 Paperback · Full Color</span>
              <span className="font-heading">$14.99</span>
            </div>
            <div className="flex justify-between text-muted-foreground text-sm">
              <span>👶 Ages 5–10 (Grades 1–4)</span>
            </div>
            <div className="flex justify-between text-muted-foreground text-sm">
              <span>🚚 Free shipping on orders over $25</span>
            </div>
            <div className="flex justify-between text-foreground font-heading text-lg pt-3 border-t border-border">
              <span>Total</span>
              <span>$14.99</span>
            </div>
          </div>

          <h2 className="text-xl font-heading text-foreground mb-6 text-center">
            Choose Payment Method
          </h2>

          <div className="space-y-4">
            <a
              href="https://www.paypal.com/paypalme/anneemail/14.99"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="cta"
                size="lg"
                className="w-full text-base py-6 rounded-full"
              >
                💳 Pay with PayPal — $14.99
              </Button>
            </a>

            <a
              href="https://cash.app/$YOURCASHTAG/14.99"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="cta-outline"
                size="lg"
                className="w-full text-base py-6 rounded-full"
              >
                💵 Pay with Cash App — $14.99
              </Button>
            </a>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            After payment, please allow 3–5 business days for delivery. <br />
            For questions, email{" "}
            <a href="mailto:anne.email@gmail.com" className="text-primary hover:underline">
              anne.email@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Payment;
