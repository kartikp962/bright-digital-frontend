import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
              <span className="text-lg font-bold text-primary-foreground">
                BD
              </span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              Bright Digital
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* <a
              href="#"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Customers
            </a> */}
            <a
              href="#results"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Results
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          {/* <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Start Now
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col gap-4 pb-4">
              <a
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Customers
              </a>
              <a
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="ghost" size="sm" className="justify-start">
                  Log in
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 justify-start"
                >
                  Start Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
