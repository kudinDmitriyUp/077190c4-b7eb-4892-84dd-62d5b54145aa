"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmall"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Artisan Bakery"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Order Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="ARTISAN"
          description="Handcrafted breads, pastries, and desserts baked fresh daily using time-honored techniques and premium natural ingredients. Experience the warmth of true artisanal baking."
          background={{ variant: "plain" }}
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/assortment-bread-products_123827-36235.jpg", imageAlt: "Artisan bakery showcase with fresh baked goods" },
            { imageSrc: "http://img.b2bpic.net/free-photo/croissant-coffee-food-photography_53876-104492.jpg?_wi=1", imageAlt: "Golden butter croissants" },
            { imageSrc: "http://img.b2bpic.net/free-photo/baker-holds-homemade-craft-bread-his-hands_166373-749.jpg?_wi=1", imageAlt: "Fresh sourdough loaf" },
            { imageSrc: "http://img.b2bpic.net/free-photo/piece-chocolate-cake_1220-166.jpg?_wi=1", imageAlt: "Rich dark chocolate cake" },
            { imageSrc: "http://img.b2bpic.net/free-photo/traditional-cinnamon-buns-white-table-homemade-sweet-buns_127032-2691.jpg?_wi=1", imageAlt: "Warm cinnamon rolls" },
            { imageSrc: "http://img.b2bpic.net/free-photo/olive-coconut-oils-products-top-view_23-2148337437.jpg?_wi=1", imageAlt: "Premium baking ingredients" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Story"
          title="Since 1995, we've been dedicated to bringing traditional baking methods to your table"
          useInvertedBackground={false}
          buttons={[
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Products"
          description="Discover our most beloved selections, crafted with passion and the finest ingredients"
          tag="Best Sellers"
          products={[
            {
              id: "1",              brand: "Artisan Bakery",              name: "Butter Croissants",              price: "$4.50",              rating: 5,
              reviewCount: "342",              imageSrc: "http://img.b2bpic.net/free-photo/croissant-coffee-food-photography_53876-104492.jpg?_wi=2",              imageAlt: "Golden butter croissants"
            },
            {
              id: "2",              brand: "Artisan Bakery",              name: "Sourdough Loaf",              price: "$6.99",              rating: 5,
              reviewCount: "289",              imageSrc: "http://img.b2bpic.net/free-photo/baker-holds-homemade-craft-bread-his-hands_166373-749.jpg?_wi=2",              imageAlt: "Fresh sourdough loaf"
            },
            {
              id: "3",              brand: "Artisan Bakery",              name: "Dark Chocolate Cake",              price: "$24.99",              rating: 5,
              reviewCount: "156",              imageSrc: "http://img.b2bpic.net/free-photo/piece-chocolate-cake_1220-166.jpg?_wi=2",              imageAlt: "Rich dark chocolate cake"
            },
            {
              id: "4",              brand: "Artisan Bakery",              name: "Cinnamon Rolls",              price: "$3.99",              rating: 5,
              reviewCount: "428",              imageSrc: "http://img.b2bpic.net/free-photo/traditional-cinnamon-buns-white-table-homemade-sweet-buns_127032-2691.jpg?_wi=2",              imageAlt: "Warm cinnamon rolls"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Why Choose Our Bakery"
          description="We combine traditional craftsmanship with modern quality standards"
          tag="What Makes Us Special"
          features={[
            {
              id: 1,
              title: "Premium Ingredients",              description: "We source the finest organic flour, butter, and natural ingredients from trusted local and international suppliers to ensure every bite is exceptional.",              imageSrc: "http://img.b2bpic.net/free-photo/olive-coconut-oils-products-top-view_23-2148337437.jpg?_wi=2",              imageAlt: "Premium baking ingredients"
            },
            {
              id: 2,
              title: "Time-Honored Techniques",              description: "Our bakers follow traditional methods refined over decades, using slow fermentation and hand-crafted processes that modern factories cannot replicate.",              imageSrc: "http://img.b2bpic.net/free-photo/pumpkin-pie-making-assortment_23-2149055395.jpg",              imageAlt: "Traditional baking methods"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="The moment I tasted the sourdough, I knew I'd found my new favorite bakery. Every product is made with such care and attention to detail. I'm a customer for life!"
          rating={5}
          author="Sarah Mitchell, Food Blogger"
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/woman-with-blond-short-hair-tanned-smiling-cute-gazing-camera-with-friendly_176420-44610.jpg",              alt: "Sarah Mitchell"
            },
            {
              src: "http://img.b2bpic.net/free-photo/smiling-millennial-man-looking-camera-cafe-headshot-portrait_1163-5163.jpg",              alt: "John Davis"
            },
            {
              src: "http://img.b2bpic.net/free-photo/outdoor-shot-young-caucasian-man-with-beard-relaxing-open-air-surrounded-by-beautiful-mountain-setting-rainforest_273609-1855.jpg",              alt: "Emma Rodriguez"
            },
            {
              src: "http://img.b2bpic.net/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg",              alt: "Michael Chen"
            }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Order Your Favorites Today"
          description="Join our mailing list for weekly specials, new product launches, and exclusive bakery updates. Fresh baked goodness delivered to your inbox."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Artisan Bakery"
          columns={[
            {
              items: [
                { label: "Home", href: "/" },
                { label: "Products", href: "#products" },
                { label: "About", href: "#about" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "#contact" },
                { label: "Hours", href: "#" },
                { label: "Location", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Careers", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
