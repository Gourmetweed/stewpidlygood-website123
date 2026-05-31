import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { FeaturedBowl } from "@/components/sections/FeaturedBowl";
import { Festivals } from "@/components/sections/Festivals";
import { Story } from "@/components/sections/Story";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Stewpidly Good — Mad Bowls. Happy Souls." },
      { name: "description", content: "Slow-cooked comfort food inspired by the world's greatest stews. Available for festivals, events and catering." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-charcoal text-white">
      <Toaster
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: "#2D3130",
            color: "#fff",
            border: "1px solid #F5C518",
            borderRadius: 2,
            fontFamily: "Oswald, Impact, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          },
        }}
      />
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <FeaturedBowl />
        <Festivals />
        <Story />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
