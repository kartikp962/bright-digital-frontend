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
                TFS
              </span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              The Founders Studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {/* <a
              href="#"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Customers
            </a> */}
            {/* <a
              href="#results"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Results
            </a> */}
            <span
  onClick={(e) => {
    e.preventDefault(); // just in case
    const section = document.getElementById("results");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="cursor-pointer text-sm font-medium text-foreground transition-colors hover:text-primary"
>
  Results
</span>

          </nav>

          {/* Desktop Auth Buttons */}
          {/* <div className="hidden items-center gap-4 md:flex">
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
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Customers
              </a>
              <a
                href="#"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Pricing
              </a>
              <div className="flex flex-col gap-2 border-t pt-4">
                <Button variant="ghost" size="sm" className="justify-start">
                  Log in
                </Button>
                <Button
                  size="sm"
                  className="justify-start bg-primary hover:bg-primary/90"
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
