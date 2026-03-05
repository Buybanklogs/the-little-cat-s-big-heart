import bookCover from "@/assets/book-cover.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Book Cover */}
          <div className="w-full md:w-5/12 flex justify-center">
            <img
              src={bookCover}
              alt="The Cat Who Thought He Was a Mouse - Book Cover"
              className="w-64 md:w-80 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-7/12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-6 text-foreground">
              The Cat Who Thought<br />He Was a Mouse
            </h1>
            <p className="text-xl md:text-2xl text-primary font-heading italic mb-4">
              A heartwarming story about identity, kindness, and finding where you belong.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Perfect for children in Grades 1–4, this beautifully illustrated story follows a little cat who believes he is a mouse — and the lesson that changes everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="cta" size="lg" className="text-base px-8 py-6 rounded-full">
                Order Your Copy
              </Button>
              <Button variant="cta-outline" size="lg" className="text-base px-8 py-6 rounded-full">
                Read a Preview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
