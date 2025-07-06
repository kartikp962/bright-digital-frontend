import { Button } from "@/components/ui/button";
import { Cloud, Folder, Plus } from "lucide-react";

export default function VideoEditing() {
  return (
    <section className="w-full bg-black px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl text-center">
        {/* Main Headlines */}
        <h2 className="text-4xl font-bold text-white mb-4 sm:text-5xl lg:text-6xl">
          No Monthly Retainers
        </h2>
        <h3 className="text-3xl font-normal text-blue-400 mb-8 sm:text-4xl lg:text-5xl">
          Just Simple, Flexible Video Editing
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
          Tired of long-term commitments and monthly retainers?
          <br />
          Get high-quality video content without the stress.
        </p>

        {/* Three Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Step 1: Choose Credits */}
          <div className="text-center">
            <div className="bg-purple-600 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">
              Choose your credits
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Buy a pack of editing credits upfront. No subscriptions, no
              commitments—just what you need, when you need it.
            </p>
          </div>

          {/* Step 2: Send Videos */}
          <div className="text-center">
            <div className="bg-gray-600 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Folder className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">
              Send us your videos
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Upload your footage, and we'll take care of the rest. We'll
              transform your raw content into polished short-form videos.
            </p>
          </div>

          {/* Step 3: Post and Repeat */}
          <div className="text-center">
            <div className="bg-blue-600 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Plus className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">
              Post and repeat
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Get your videos back, ready to post. Use your credits anytime,
              whether it's next week or months later. It's that simple!
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-base font-medium"
        >
          Book a 30-min call →
        </Button>
      </div>
    </section>
  );
}
