
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="text-center z-10 max-w-2xl mx-auto px-6">
        {/* Large 404 number */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-primary animate-glow">
            404
          </div>
        </div>

        {/* Error message */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="group">
            <Link to="/">
              <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Go Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="group">
            <button onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </Button>
        </div>

        {/* Helpful links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/writings" 
              className="text-primary hover:text-primary/80 transition-colors text-sm underline-offset-4 hover:underline"
            >
              My Writings
            </Link>
            <Link 
              to="/premium-portfolio" 
              className="text-primary hover:text-primary/80 transition-colors text-sm underline-offset-4 hover:underline"
            >
              Premium Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
