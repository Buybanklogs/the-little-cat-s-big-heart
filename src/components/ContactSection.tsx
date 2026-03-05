import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-4 text-foreground">
          Contact & School Orders
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-lg">
          For bulk school orders or author inquiries, please get in touch.
        </p>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <Input
            placeholder="Your Name"
            className="rounded-xl py-6 bg-card border-border"
          />
          <Input
            placeholder="Email Address"
            type="email"
            className="rounded-xl py-6 bg-card border-border"
          />
          <Textarea
            placeholder="Your Message"
            rows={5}
            className="rounded-xl bg-card border-border"
          />
          <div className="text-center">
            <Button variant="cta" size="lg" className="text-base px-10 py-6 rounded-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
