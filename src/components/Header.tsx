import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border/20">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-clustal-gold">
              ✦ CLUSTAL
            </div>
          </div>
          
          <Button variant="outline-gold" size="sm">
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;