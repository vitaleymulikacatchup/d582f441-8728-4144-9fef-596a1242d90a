"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Check, Flame, Salad } from "lucide-react";

const assetMap = [
  {"id":"hero-steak","url":"https://images.pexels.com/photos/10749578/pexels-photo-10749578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Delicious grilled steak served with rosemary, garlic, and spices on a stone slab, perfect for a gourmet meal."},
  {"id":"about-grill","url":"https://images.pexels.com/photos/6605423/pexels-photo-6605423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Portrait of a confident tattooed chef with crossed arms in a kitchen setting wearing an apron and flat cap."},
  {"id":"menu-dishes","url":"https://images.pexels.com/photos/960840/pexels-photo-960840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Savor the flavors of Portuguese cuisine with juicy beef and fresh vegetables in a rustic setting."},
  {"id":"chefs-team","url":"https://images.pexels.com/photos/6937464/pexels-photo-6937464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Chefs in a professional kitchen preparing and plating gourmet dishes with precision and teamwork."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingOverlay 
          navItems={[
            { name: "About us", id: "about" },
            { name: "Menu", id: "product" },
            { name: "Chefs", id: "team" },
            { name: "Reservations", id: "contact" }
          ]}
          brandName="Steakhouse Grill"
          buttonText="Reserve Table"
          buttonVariant="shift-hover"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Steakhouse Grill"
            description="Experience the best steaks and an unforgettable dining atmosphere."
            imageSrc="https://images.pexels.com/photos/10749578/pexels-photo-10749578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            imageAlt="Delicious grilled steak"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Discover our passion for grilling and our commitment to serving the finest cuts."
            bulletPoints={[
              { title: "Our Legacy", description: "Established in 1990, offering quality and service.", icon: Check },
              { title: "The Grill", description: "Our one-of-a-kind grill creates unique flavors.", icon: Flame }
            ]}
            imageSrc="https://images.pexels.com/photos/6605423/pexels-photo-6605423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            imageAlt="Restaurant interior"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Menu Highlights"
            description="Explore our curated selection of dishes."
            features={[
              { title: "Signature Steak", description: "Our most popular choice for meat lovers.", icon: Salad },
              { title: "New Sides", description: "Delight in our range of gourmet sides.", icon: Salad }
            ]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Our Menu"
            description="View our selection of premium steaks and sides."
            products={[
              { id: "1", name: "Ribeye Steak", price: "$35", imageSrc: "https://images.pexels.com/photos/960840/pexels-photo-960840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", name: "T-Bone Steak", price: "$40", imageSrc: "https://images.pexels.com/photos/960840/pexels-photo-960840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "3", name: "Filet Mignon", price: "$45", imageSrc: "https://images.pexels.com/photos/960840/pexels-photo-960840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            title="Happy Customers"
            description="Hear from those who dined with us."
            testimonials={[
              { id: "1", name: "Sarah Johnson", role: "Food Critic", testimonial: "The steaks were cooked to perfection." },
              { id: "2", name: "Michael Chen", role: "Food Blogger", testimonial: "An unmatched dining experience." },
              { id: "3", name: "Emily Rodriguez", role: "Chef", testimonial: "Innovative flavors and excellent service." },
              { id: "4", name: "David Kim", role: "Gourmet", testimonial: "A true steakhouse experience." }
            ]}
          />
        </div>
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FaqBase
            title="Frequently Asked Questions"
            description="Have questions? Here are some answers."
            faqs={[
              { id: "1", title: "What are your opening hours?", content: "We are open from 12 PM to 11 PM daily." },
              { id: "2", title: "Do you offer vegan options?", content: "Yes, we offer a range of vegan dishes." }
            ]}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Explore", items: [
                { label: "Home", href: "#" },
                { label: "Menu", href: "products" }
              ]},
              { title: "Visit Us", items: [
                { label: "Location", href: "https://maps.google.com/" },
                { label: "Contact", href: "contact" }
              ]}
            ]}
            copyrightText="© 2025 | Steakhouse Grill"
            logoSrc="/brand/logo.svg"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
