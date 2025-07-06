import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Integrations() {
  const integrationIcons = [
    { name: "Slack", color: "bg-green-500" },
    { name: "Notion", color: "bg-gray-800" },
    { name: "Trello", color: "bg-blue-500" },
    { name: "PayPal", color: "bg-blue-600" },
    { name: "Figma", color: "bg-orange-500" },
    { name: "Atlassian", color: "bg-blue-600" },
    { name: "Spotify", color: "bg-green-500" },
    { name: "Webflow", color: "bg-purple-600" },
    { name: "Airtable", color: "bg-orange-400" },
    { name: "Figma", color: "bg-gray-700" },
    { name: "Yelp", color: "bg-red-500" },
    { name: "Under Armour", color: "bg-gray-600" },
    { name: "Zendesk", color: "bg-green-600" },
    { name: "Shopify", color: "bg-green-600" },
    { name: "Spotify", color: "bg-blue-500" },
    { name: "Shopify", color: "bg-green-500" },
  ];

  return (
    <section className="w-full">
      {/* Integrations Section */}
      <div className="bg-slate-800 px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium text-slate-300 uppercase tracking-wider mb-6">
            🔗 Replace with <strong>“Our Process”</strong>
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6">
            Don’t guess. Follow a proven system.
          </h2>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Our step-by-step process builds your authority, grows your audience, and drives leads, all done-for-you so you stay focused on your business.
          </p>

          {/* <Button
            variant="ghost"
            className="text-white border-white/20 hover:bg-white/10 mb-12"
          >
            All Integrations
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button> */}

          {/* Integration Icons Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
            {integrationIcons.map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 h-16 w-16 flex items-center justify-center hover:scale-105 transition-transform duration-200"
              >
                <div className={`w-8 h-8 rounded ${integration.color}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="text-6xl text-primary mb-6">"</div>
            <blockquote className="text-2xl font-medium text-foreground leading-relaxed sm:text-3xl lg:text-4xl">
              "Clause is helping our company to decrease operational expenses
              and turnaround time, while increasing the compliance, resource
              allocation and effectiveness of our contract management."
            </blockquote>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-sm font-medium text-yellow-900">👨</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center">
                <span className="text-xs font-medium text-pink-900">👩</span>
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">
                Darlene Robertson
              </div>
              <div className="text-sm text-muted-foreground">
                Head of Strategy at Matchsmp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
