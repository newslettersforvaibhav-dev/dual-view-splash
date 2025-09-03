import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import youtubePhone from "@/assets/youtube-phone.jpg";
import tiktokPhone from "@/assets/tiktok-phone.jpg";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-clustal-dark via-background to-clustal-darker"></div>
      
      {/* Geometric lines */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-clustal-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border border-clustal-gold/30 rotate-45"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-clustal-gold/20 rounded-full"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-clustal-gold">Clustal</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-clustal-light max-w-xl">
                Empowering brands through
                <br />
                <span className="text-clustal-gold">influencer partnership</span>
              </p>
            </div>
            
            {/* Email signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="hero" size="lg" className="whitespace-nowrap">
                INTERESTED
              </Button>
            </div>
          </div>
          
          {/* Right side - Phone mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* YouTube phone */}
              <div className="absolute -left-8 top-8 w-48 md:w-56 transform -rotate-12 hover:rotate-6 transition-transform duration-700">
                <div className="bg-gradient-to-br from-clustal-gold/20 to-transparent p-1 rounded-3xl">
                  <img
                    src={youtubePhone}
                    alt="YouTube mobile interface"
                    className="w-full rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
              
              {/* TikTok phone */}
              <div className="relative z-10 w-48 md:w-56 ml-auto mr-8 transform rotate-12 hover:-rotate-6 transition-transform duration-700">
                <div className="bg-gradient-to-br from-clustal-gold/20 to-transparent p-1 rounded-3xl">
                  <img
                    src={tiktokPhone}
                    alt="TikTok mobile interface"
                    className="w-full rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;