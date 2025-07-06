import { Star } from "lucide-react";

export default function Results() {
  const leftColumnTestimonials = [
    {
      id: 1,
      name: "Oyinkro K",
      message:
        "Hahah - Sending both to my team ngl BROOO - I LOVE THEM BOTH so much, yeaa combined it with version on that!!",
      time: "8:30 PM",
      likes: 1,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Praveen Kumar",
      title: "Content Designer",
      message: "Looking Damnnnnn cool on profile.. seriouslyy!!!",
      time: "8:31 PM",
      likes: 1,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Oyinkro K",
      message:
        "I can't wait another week so update these haha, profile is getting too many views! Wanna it to look SLICKK",
      time: "8:31 PM",
      likes: 1,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Praveen Kumar",
      title: "Content Designer",
      message: "Let's go goooo mannnnn..",
      time: "8:31 PM",
      likes: 1,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  ];

  const rightColumnTestimonials = [
    {
      id: 1,
      name: "Dennis Stahlhut",
      message: "Bringing out the best in people and helping them..",
      category: "Brand Design",
      rating: 5.0,
      date: "July 9, 2024",
      review:
        "Praveen transformed my LinkedIn presence with his exceptional design skills and branding expertise. Every detail, from colors and fonts to all the designs perfectly captures my brand voice and style. He crafted a brand strategy that showcased my strengths and value proposition with crystal clarity. Praveen's warmth and dedication made the process enjoyable, and the results were outstanding. My profile now attracts potential clients and collaborators. Highly recommend him!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Amaete Umanah",
      message:
        "I help you turn your low ROI tasks to high ROI | Leverage global talent | Scale your..",
      category: "Brand Design",
      rating: 5.0,
      date: "September 2, 2024",
      review: "I discovered Praveen's profile through a comment by",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
  ];

  return (
    <section className="w-full bg-gray-50 px-4 py-16 lg:px-8 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 sm:text-4xl lg:text-5xl">
            See How Our DFY System Helps Founders Achieve Incredible Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here’s what happens when you let us handle your LinkedIn branding, content, and lead generation.
          </p>
        </div>

        {/* Scrolling Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Scrolling Bottom to Top */}
          <div className="h-[600px] overflow-hidden">
            <div className="animate-scroll-up hover:[animation-play-state:paused]">
              <div className="space-y-4 mb-4">
                {/* Duplicate for seamless loop */}
                {[...leftColumnTestimonials, ...leftColumnTestimonials].map(
                  (testimonial, index) => (
                    <div
                      key={`${testimonial.id}-${index}`}
                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm text-foreground">
                              {testimonial.name}
                            </span>
                            {testimonial.title && (
                              <span className="text-xs text-muted-foreground">
                                {testimonial.title}
                              </span>
                            )}
                            <span className="text-xs text-muted-foreground ml-auto">
                              {testimonial.time}
                            </span>
                          </div>
                          <p className="text-sm text-foreground mb-2">
                            {testimonial.message}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>👍 {testimonial.likes}</span>
                            <span>💬</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Scrolling Top to Bottom */}
          <div className="h-[600px] overflow-hidden">
            <div className="animate-scroll-down hover:[animation-play-state:paused]">
              <div className="space-y-4 mb-4">
                {/* Duplicate for seamless loop */}
                {[...rightColumnTestimonials, ...rightColumnTestimonials].map(
                  (testimonial, index) => (
                    <div
                      key={`${testimonial.id}-${index}`}
                      className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.message}
                          </p>
                        </div>
                        <button className="text-muted-foreground">•••</button>
                      </div>

                      <div className="mb-3">
                        <span className="text-sm font-medium text-foreground">
                          {testimonial.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">
                          {testimonial.rating}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {testimonial.date}
                        </span>
                      </div>

                      <p className="text-sm text-foreground leading-relaxed">
                        {testimonial.review}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}