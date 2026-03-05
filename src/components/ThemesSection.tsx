const themes = [
  {
    emoji: "🌿",
    title: "Kindness",
    description: "Discover how a single act of kindness can change someone's entire world and help them see themselves in a new light.",
  },
  {
    emoji: "🐭",
    title: "Identity & Belonging",
    description: "Explore what it means to truly know yourself — and how finding where you belong starts with accepting who you are.",
  },
  {
    emoji: "💛",
    title: "Understanding Differences",
    description: "Learn that being different isn't a weakness — it's what makes each of us special, valuable, and worthy of love.",
  },
];

const ThemesSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 mt-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-12 text-foreground">
          Themes & Messages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="bg-accent/20 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-4xl mb-4 block">{theme.emoji}</span>
              <h3 className="text-xl font-heading mb-3 text-foreground">{theme.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
