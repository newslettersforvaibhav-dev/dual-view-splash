const ProcessSections = () => {
  return (
    <>
      {/* Discovery & Matchmaking Section */}
      <section className="py-20 bg-clustal-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-clustal-gold to-yellow-500"></div>
        
        {/* Decorative starburst */}
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
          <div className="relative w-48 h-48">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-16 bg-clustal-dark/20 origin-bottom"
                style={{
                  left: '50%',
                  bottom: '50%',
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-clustal-dark mb-8">
                Unlock your brand potential through.....
              </h2>
            </div>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-clustal-dark mb-4">
                  Discovery
                </h3>
                <p className="text-clustal-dark text-lg leading-relaxed">
                  Discover the most relevant influencers for your needs from our diverse pool of creator profiles.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-clustal-dark mb-4">
                  Matchmaking
                </h3>
                <p className="text-clustal-dark text-lg leading-relaxed">
                  AI powered matchmaking through brands match and curated list of creators with fraud protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Marketing & Performance Section */}
      <section className="py-20 bg-background relative">
        {/* Decorative orbital rings */}
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
          <div className="relative w-64 h-64">
            <div className="absolute inset-8 border-2 border-clustal-gold/30 rounded-full animate-pulse"></div>
            <div className="absolute inset-16 border border-clustal-gold/20 rounded-full"></div>
            <div className="absolute inset-24 border border-clustal-gold/10 rounded-full"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl ml-auto">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-clustal-light mb-4">
                  Campaign Marketing
                </h3>
                <p className="text-clustal-muted text-lg leading-relaxed">
                  End-to-end campaign management that allows brands to plan, execute, and track their campaigns from start to finish.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-clustal-light mb-4">
                  Performance metrics
                </h3>
                <p className="text-clustal-muted text-lg leading-relaxed">
                  End-to-end campaign management that allows brands to plan, execute, and track their campaigns from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSections;