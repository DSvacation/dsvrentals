import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Waves } from 'lucide-react';

interface Property {
  id: string;
  name: string;
  location: string;
  category: 'Oceanfront' | 'Dunes & Bay';
  guests: number;
  bedrooms: number;
  bathrooms: number;
  ratePerNight: number;
  image: string;
  description: string;
}

const PROPERTIES: Property[] = [
  {
    id: 'salt-meadow-bungalow',
    name: 'Salt Meadow Oceanfront Bungalow',
    location: 'Carmel-by-the-Sea',
    category: 'Oceanfront',
    guests: 6,
    bedrooms: 3,
    bathrooms: 2.5,
    ratePerNight: 485,
    image: '/src/assets/images/property_oceanfront_bungalow_1794393896514.jpg',
    description:
      'Floor-to-ceiling glass sliders open onto a private cedar deck above the surf, with sunlit linen interiors and a chef-ready coastal kitchen.',
  },
  {
    id: 'seagrass-dune-house',
    name: 'Seagrass Dune House',
    location: 'Santa Barbara Coast',
    category: 'Dunes & Bay',
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    ratePerNight: 620,
    image: '/src/assets/images/property_dune_house_1794393896172.jpg',
    description:
      'Whitewashed cedar architecture tucked into private sand dunes with a wraparound porch, outdoor rain shower, and direct boardwalk beach access.',
  },
  {
    id: 'harbor-point-cottage',
    name: 'Harbor Point Waterfront Cottage',
    location: 'Monterey Bay',
    category: 'Dunes & Bay',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    ratePerNight: 365,
    image: '/src/assets/images/property_harbor_retreat_1794393896984.jpg',
    description:
      'Calm bayfront retreat featuring a private wooden dock, sunset Adirondack seating, kayaks included, and a cozy hearth for cool coastal evenings.',
  },
];

const DIRECT_BENEFITS = [
  {
    number: '01.',
    title: 'Zero Third-Party Service Fees',
    detail:
      'Save 12% to 18% on every reservation by booking directly with DS Vacation Rentals instead of paying marketplace platform markups.',
  },
  {
    number: '02.',
    title: 'Best-Rate Guarantee',
    detail:
      'Our direct calendar always reflects our lowest available nightly rate, with transparent cleaning and local tax breakdowns upfront.',
  },
  {
    number: '03.',
    title: 'Dedicated Local Concierge',
    detail:
      'Speak directly with our coastal hospitality team for private chef bookings, grocery pre-stocking, and local beach equipment rentals.',
  },
  {
    number: '04.',
    title: 'Flexible Check-In & Extended Stays',
    detail:
      'Direct guests receive priority early check-in, late check-out when available, and custom multi-week seasonal pricing.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Booking directly saved our family over $640 in platform fees, and the house was stocked with fresh local coffee and beach towels before we even arrived.',
    author: 'Claire & Marcus Bennett',
    stay: 'Stayed at Seagrass Dune House · 7 Nights',
  },
  {
    quote:
      'The oceanfront deck at Salt Meadow is unforgettable. Having a local host text us restaurant recommendations and arrange our kayak launch made the whole week effortless.',
    author: 'David Kowalski',
    stay: 'Stayed at Salt Meadow Bungalow · 5 Nights',
  },
  {
    quote:
      'Spotless, thoughtfully designed, and steps from calm bay water. We have already reserved Harbor Point Cottage again for next autumn.',
    author: 'Elena & Thomas Morales',
    stay: 'Stayed at Harbor Point Cottage · 4 Nights',
  },
];

function PropertyImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#E6EEF4] to-[#F3ECE1] flex flex-col items-center justify-center p-6 text-center">
        <Waves className="w-8 h-8 text-[#0C4A6E] mb-2" aria-hidden="true" />
        <span className="text-sm font-medium text-[#0C4A6E]">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
    />
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState<'All Stays' | 'Oceanfront' | 'Dunes & Bay'>('All Stays');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProperties =
    activeFilter === 'All Stays'
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.category === activeFilter);

  const scrollToInquiry = () => {
    setMobileMenuOpen(false);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Bar Contract: 3-Zone Header */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className="font-serif text-xl font-semibold tracking-tight text-[#0C4A6E] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C4A6E] rounded"
          >
            DS Vacation Rentals
          </a>

          {/* Zone 2: 4 concise single-line text nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600" aria-label="Primary">
            <a
              href="#properties"
              className="hover:text-[#0C4A6E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C4A6E] rounded"
            >
              Properties
            </a>
            <a
              href="#why-direct"
              className="hover:text-[#0C4A6E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C4A6E] rounded"
            >
              Why Direct
            </a>
            <a
              href="#testimonials"
              className="hover:text-[#0C4A6E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C4A6E] rounded"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="hover:text-[#0C4A6E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C4A6E] rounded"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action + mobile menu button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={scrollToInquiry}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#0C4A6E] hover:bg-[#075985] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C4A6E] focus-visible:ring-offset-2"
            >
              Book Your Stay
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 hover:bg-[#F3ECE1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C4A6E]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-[#FAF7F2] px-4 py-4 space-y-2">
            <a
              href="#properties"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-medium text-slate-700 hover:text-[#0C4A6E] hover:bg-[#F3ECE1] rounded-lg"
            >
              Properties
            </a>
            <a
              href="#why-direct"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-medium text-slate-700 hover:text-[#0C4A6E] hover:bg-[#F3ECE1] rounded-lg"
            >
              Why Direct
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-medium text-slate-700 hover:text-[#0C4A6E] hover:bg-[#F3ECE1] rounded-lg"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-medium text-slate-700 hover:text-[#0C4A6E] hover:bg-[#F3ECE1] rounded-lg"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={scrollToInquiry}
              className="w-full mt-2 py-3 px-4 text-base font-medium text-white bg-[#0C4A6E] hover:bg-[#075985] rounded-lg transition-colors"
            >
              Book Your Stay
            </button>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[540px] sm:h-[600px] lg:h-[660px] w-full overflow-hidden">
            <img
              src="/src/assets/images/hero_coastal_villa_1794393897166.jpg"
              alt="Sunlit coastal vacation villa with infinity pool overlooking the ocean"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-slate-950/15"
              aria-hidden="true"
            />

            <div className="absolute inset-0 flex items-end">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
                <div className="max-w-2xl">
                  <p className="text-sm font-medium text-[#F3ECE1] mb-3 tracking-wide">
                    Handpicked Coastal Homes · Direct Owner Rates
                  </p>
                  <h1
                    className="font-serif font-semibold text-white leading-[1.1] tracking-tight mb-4"
                    style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)', textWrap: 'balance' }}
                  >
                    Wake up to the sound of the tide.
                  </h1>
                  <p className="text-base sm:text-lg text-slate-100/90 leading-relaxed mb-8 max-w-xl">
                    Private oceanfront bungalows, dune houses, and bayfront cottages managed with local care. Book direct for our lowest nightly rates and zero platform fees.
                  </p>
                  <button
                    type="button"
                    onClick={scrollToInquiry}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0369A1] hover:bg-[#0C4A6E] rounded-lg transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 whitespace-nowrap"
                  >
                    Book Your Stay
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties Showcase */}
        <section id="properties" className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
                  Featured Coastal Properties
                </h2>
                <p className="text-slate-600 max-w-xl text-base leading-relaxed">
                  Every home is professionally cleaned, stocked with coastal essentials, and inspected before your arrival.
                </p>
              </div>

              {/* Interactive Filter Controls */}
              <div
                className="inline-flex items-center gap-1 p-1 bg-[#F3ECE1] rounded-lg self-start md:self-auto"
                role="tablist"
                aria-label="Filter properties by setting"
              >
                {(['All Stays', 'Oceanfront', 'Dunes & Bay'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      activeFilter === tab
                        ? 'bg-white text-[#0C4A6E] shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <article
                  key={property.id}
                  className="group flex flex-col bg-[#FAF7F2] border border-slate-200/90 rounded-xl overflow-hidden transition-colors hover:border-[#0C4A6E]/35"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#F3ECE1]">
                    <PropertyImage src={property.image} alt={property.name} />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                      <span>{property.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{property.guests} Guests</span>
                      <span aria-hidden="true">·</span>
                      <span>{property.bedrooms} Beds</span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2">
                      {property.name}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                      {property.description}
                    </p>

                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-lg font-semibold text-slate-900 tabular-nums">
                          ${property.ratePerNight}
                        </span>
                        <span className="text-xs text-slate-500"> / night</span>
                      </div>

                      <button
                        type="button"
                        onClick={scrollToInquiry}
                        className="px-4 py-2 text-sm font-medium text-[#0C4A6E] bg-white border border-slate-200 hover:border-[#0C4A6E] hover:bg-[#0C4A6E] hover:text-white rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        Inquire to Book
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book Direct Section */}
        <section id="why-direct" className="py-16 sm:py-24 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                  Why Book Direct with DS Vacation Rentals
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Skip the automated call centers and hidden traveler service fees. When you reserve directly with us, your stay is backed by our local coastal team from inquiry to checkout.
                </p>
                <button
                  type="button"
                  onClick={scrollToInquiry}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0C4A6E] hover:bg-[#075985] rounded-lg transition-colors whitespace-nowrap"
                >
                  Check Availability
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {DIRECT_BENEFITS.map((benefit) => (
                  <div key={benefit.number} className="border-t border-slate-200 pt-5">
                    <span className="font-serif text-sm font-semibold text-[#0369A1] block mb-2">
                      {benefit.number}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {benefit.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guest Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-24 bg-[#F3ECE1]/65 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
                Guest Stories
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Hear from families and couples who booked their coastal getaway directly with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((item) => (
                <blockquote
                  key={item.author}
                  className="bg-white p-7 rounded-xl border border-slate-200/80 flex flex-col justify-between"
                >
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="pt-4 border-t border-slate-100">
                    <div className="text-sm font-semibold text-slate-900">
                      {item.author}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {item.stay}
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Inquiry / Contact Section */}
        <section id="contact" className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                Plan Your Coastal Stay
              </h2>
              <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto">
                Share your preferred dates, group size, and property of interest. Our local reservations team responds within two hours with availability and a direct-booking quote.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-slate-200 rounded-xl p-2 sm:p-4">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/Um5rrOxQbrcdPEDF1bXS"
                width="100%"
                height="750px"
                style={{ border: 'none' }}
                title="Lead Inquiry Form"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="bg-[#FAF7F2] border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="font-serif font-semibold text-[#0C4A6E]">
            DS Vacation Rentals
          </div>
          <div className="flex items-center gap-6">
            <a href="#properties" className="hover:text-[#0C4A6E] transition-colors">
              Properties
            </a>
            <a href="#why-direct" className="hover:text-[#0C4A6E] transition-colors">
              Why Direct
            </a>
            <a href="#testimonials" className="hover:text-[#0C4A6E] transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-[#0C4A6E] transition-colors">
              Contact
            </a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} DS Vacation Rentals. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
