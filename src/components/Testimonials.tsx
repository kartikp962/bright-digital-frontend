import testimonial1 from '@/assets/img/Testimonial-1.jpeg';
import testimonial2 from '@/assets/img/Testimonial-2.jpeg';
import testimonial3 from '@/assets/img/Testimonial-3.jpeg';
import testimonial4 from '@/assets/img/Testimonial-4.jpeg';
import testimonial5 from '@/assets/img/Testimonial-5.jpeg';
import testimonial6 from '@/assets/img/Testimonial-6.jpeg';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Lara Acosta",
      title: "Founder @ The Heart Academy",
      image: testimonial1,
      text: "Anurag and his team are incredible. They transformed my LinkedIn and delivered results fast. Highly recommended.",
      rating: "Testimonial 1",
    },
    {
      id: 2,
      name: "Marcus Engel",
      title: "Founder @SkillTricks",
      image: testimonial2,
      text: "Anurag built my LinkedIn profile from scratch and made it stand out professionally. His expertise truly made a difference. Highly recommended.",
      rating: "Testimonial 2"
    },
    {
      id: 3,
      name: "Niall Ratcliffe",
      title: "Founder @Health Cost Labs",
      image: testimonial3,
      text: "Anurag and his team took over my LinkedIn completely — strategy, content, everything. The results have been incredible.",
      rating: "Testimonial 3"
    },
    {
      id: 4,
      name: "Luke Matthews",
      title: "Founder @Woodford Properties, LLC",
      image: testimonial4,
      text: "My LinkedIn finally reflects my level as a founder. Anurag’s team handles everything so I can focus on scaling. Incredible work!",
      rating: "Testimonial 4"
    },
    {
      id: 5,
      name: "Mena Michael",
      title: "Founder @Integrative Oncology Working Group",
      image: testimonial5,
      text: "Anurag’s team made LinkedIn effortless for me. My brand looks premium, and leads come in consistently. Thanks!",
      rating: "Testimonial 5"
    },
    {
      id: 6,
      name: "Niall Ratcliffe",
      title: "CEO & Founder @Tagua by Soraya Cedeno",
      image: testimonial6,
      text: "I finally have a LinkedIn presence that matches my business — all done for me, no extra work. Great Work!",
      rating: "Testimonial 6"
    },
  ];

  return (
    <section className="w-full px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold mb-8 sm:text-5xl lg:text-6xl">
            There's a reason people <br />
            are <span className="text-primary italic">raving</span> about us.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              {/* Rating (if exists) */}
              {testimonial.rating && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-300">
                    {/* {testimonial.rating} */}
                  </p>
                </div>
              )}

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  {/* <h4 className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </h4> */}
                  {testimonial.title && (
                    <p className="text-gray-400 text-xs">{testimonial.title}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center font-medium'>
          + more...
        </div>
      </div>
    </section>
  );
}