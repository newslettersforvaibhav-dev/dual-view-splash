const WhyClustal = () => {
  const features = [
    {
      title: "Customized Campaigns at Scale",
      description: "Streamline the strategy and leave the manual adjustment work on the platform."
    },
    {
      title: "AI-Powered Influencer Marketing",
      description: "Utilize results-driven branded campaigns by leveraging Clustal's AI models."
    },
    {
      title: "Creator Liquidity",
      description: "Tap into our extensive network of creators across categories from FMCG India."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-clustal-gold mb-4">
            Why Clustal
          </h2>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-2xl bg-secondary/50 border border-border/20 hover:border-clustal-gold/30 transition-all duration-300 hover:shadow-glow"
            >
              <h3 className="text-xl md:text-2xl font-bold text-clustal-light">
                {feature.title}
              </h3>
              <p className="text-clustal-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClustal;