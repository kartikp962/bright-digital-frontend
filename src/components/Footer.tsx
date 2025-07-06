import { Button } from "@/components/ui/button";
import { Mail, Phone, Twitter, Linkedin, Github, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Stats Section */}
      {/* <div className="bg-background px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">
                2021
              </div>
              <div className="text-sm text-muted-foreground">
                Clause Founded
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">1k+</div>
              <div className="text-sm text-muted-foreground">
                Company Partners
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="bg-slate-800 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8 sm:text-4xl">
            Discover the full scale of{" "}
            <span className="text-green-400 underline decoration-green-400">
              Clause
            </span>{" "}
            capabilities
          </h2>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-slate-800 hover:bg-gray-100 px-8"
            >
              Get a Demo
            </Button>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8"
            >
              Start for Free
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-slate-900 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">
                    C
                  </span>
                </div>
                <span className="text-xl font-semibold text-white">Clause</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Mail className="h-4 w-4" />
                  <span>hello@clause.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Phone className="h-4 w-4" />
                  <span>+021 987 654 321</span>
                </div>
              </div>
            </div>

            {/* Solution Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                Solution
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Why Okpitaine
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    OpenAI
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Customers Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                Customers
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Procurement
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Sales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Medium
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Contact Sales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Changelog *
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © Copyright 2024 Clause. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
