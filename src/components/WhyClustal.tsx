const WhyClustal = () => {
  const features = [
    {
      title: "Customized Campaigns at Scale",
      description: "Focus on the strategy and leave the manual adjustment work on the platform.",
      icon: "📊"
    },
    {
      title: "AI-Powered Influencer Marketing", 
      description: "Drive results with targeted campaigns by leveraging Clustal's AI models.",
      icon: "🤖"
    },
    {
      title: "Creator Liquidity",
      description: "Tap into our extensive network of creators across categories from FMCG India.",
      icon: "🌟"
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 border border-clustal-gold/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-clustal-gold/20 rotate-45"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-clustal-gold/5 rounded-full"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-clustal-gold mb-6 animate-fade-in">
            Why Clustal
          </h2>
          <div className="w-24 h-1 bg-clustal-gold mx-auto"></div>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center space-y-6 p-8 rounded-3xl bg-gradient-to-br from-secondary/80 to-secondary/40 border border-clustal-gold/20 hover:border-clustal-gold/50 transition-all duration-500 hover:shadow-glow hover:scale-105 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-clustal-light leading-tight">
                {feature.title}
              </h3>
              <p className="text-clustal-muted leading-relaxed text-lg">
                {feature.description}
              </p>
              
              {/* Hover indicator */}
              <div className="w-0 group-hover:w-12 h-0.5 bg-clustal-gold mx-auto transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClustal;