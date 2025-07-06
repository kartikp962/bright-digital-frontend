import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import topLeftProfile from '@/assets/img/top-left-profile.jpeg';
import bottomLeftProfile from '@/assets/img/bottom-left-profile.jpeg';

export default function Hero() {
  return (
    <div className="relative w-full px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Lightning bolt icon */}
        <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Zap className="h-6 w-6 text-primary" fill="currentColor" />
        </div>

        {/* Main heading */}
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          One system to build your brand,{" "}
          <span className="block">generate leads & scale your authority</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          We build premium LinkedIn personal brands for busy founders—attracting leads, establishing authority, and scaling visibility, all without you lifting a finger.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 px-8 py-3 text-base"
            onClick={() => {
    window.open('https://calendly.com/anuragpal/discoverycall', '_blank');
  }}
          >
            Book a Free Call
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-base border-input hover:bg-accent"
            onClick={() => {
    const section = document.getElementById("process");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
          >
            {/* <a href="#process"> */}
              See How It Works
            {/* </a> */}
          </Button>
        </div>
      </div>

      {/* Floating Profile Images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left profile */}
        <div className="absolute left-8 top-16 hidden lg:block">
          <div className="relative">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <img
                  src={topLeftProfile}
                  alt="Team member"
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              {/* <div className="h-2 w-2 rounded-full bg-white"></div> */}
              <Zap className="h-3 w-3 text-white" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Top right profile */}
        <div className="absolute right-8 top-20 hidden lg:block">
          <div className="relative">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
                  alt="Team member"
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <Zap className="h-3 w-3 text-white" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Bottom left profile */}
        <div className="absolute bottom-20 left-16 hidden lg:block">
          <div className="relative">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <img
                  src={bottomLeftProfile}
                  alt="Team member"
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              {/* <div className="h-2 w-2 rounded-full bg-white"></div> */}
              <Zap className="h-3 w-3 text-white" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Bottom right profile */}
        <div className="absolute bottom-16 right-16 hidden lg:block">
          <div className="relative">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
                  alt="Team member"
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              {/* <div className="h-2 w-2 rounded-full bg-white"></div> */}
              <Zap className="h-3 w-3 text-white" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
