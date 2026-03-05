import illustrationFriendship from "@/assets/illustration-friendship.jpg";

const AboutSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-24 relative section-divider">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Illustration */}
          <div className="w-full md:w-5/12">
            <img
              src={illustrationFriendship}
              alt="A moment of comfort and friendship between cat and mouse"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Story Summary */}
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-heading mb-6 text-foreground">
              About the Story
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Little Whiskers was born in a mouse hole and raised by a loving mouse family. He ate cheese, scurried through tunnels, and believed with all his heart that he was a mouse — just like everyone around him.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              But the world outside didn't always understand. Some laughed. Some were confused. And some were unkind. It wasn't until a wise old owl and an unexpected act of kindness showed Whiskers the truth — that being different isn't something to hide, but something to celebrate.
            </p>
            <p className="text-lg text-primary font-heading italic">
              A story that gently teaches children about empathy, identity, and the courage to be yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
