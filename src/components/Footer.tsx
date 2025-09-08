import { Button } from "@/components/ui/button";
import { Mail, Phone, Twitter, Linkedin, Github, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Stats Section */}
      {/* <div className="bg-background px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold text-foreground">
                2021
              </div>
              <div className="text-sm text-muted-foreground">
                Clause Founded
              </div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-foreground">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-foreground">1k+</div>
              <div className="text-sm text-muted-foreground">
                Company Partners
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      {/* <div className="bg-slate-800 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
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
              className="bg-white px-8 text-slate-800 hover:bg-gray-100"
            >
              Get a Demo
            </Button>
            <Button
              size="lg"
              className="bg-green-500 px-8 text-white hover:bg-green-600"
            >
              Start for Free
            </Button>
          </div>
        </div>
      </div> */}

      {/* Footer Links */}
      <div className="bg-slate-900 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Logo and Contact */}
            {/* <div className="space-y-4">
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
            </div> */}

            {/* Solution Column */}
            {/* <div>
              <h3 className="mb-4 text-sm font-semibold text-white">
                Solution
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Why Okpitaine
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    OpenAI
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Customers Column */}
            {/* <div>
              <h3 className="mb-4 text-sm font-semibold text-white">
                Customers
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Procurement
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Sales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Medium
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Enterprise
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Resources Column */}
            {/* <div>
              <h3 className="mb-4 text-sm font-semibold text-white">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Contact Sales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Changelog *
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-400">
              © Copyright 2025 The Founders Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* <a
                href="#"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
              <a
                href="https://www.linkedin.com/in/anuragpal7/"
                className="text-slate-400 transition-colors hover:text-white"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a> */}
              {/* <a
                href="#"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
