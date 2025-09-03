const ValueProposition = () => {
  return (
    <section className="py-20 bg-clustal-gold relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-20 w-40 h-40 border-2 border-clustal-dark/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-clustal-dark/20 rotate-45"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl lg:text-2xl text-clustal-dark font-medium leading-relaxed">
            At Clustal, we are building a game-changing platform to
            <br className="hidden md:block" />
            <span className="font-bold"> connect brands and influencers</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;