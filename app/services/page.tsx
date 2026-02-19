import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wall painting, texture finishes, interior styling, and commercial painting services by Paint Hill in Mumbai & Navi Mumbai.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "wall-painting",
    title: "Wall Painting",
    description:
      "Transform your space with our professional wall painting services. We provide complete painting solutions for homes and offices.",
    features: [
      "Surface preparation and crack filling",
      "Premium quality paints from top brands",
      "Professional color consultation",
      "Clean and timely execution",
      "1-year service warranty",
    ],
    price: "Starting from ₹12/sq ft",
    image: "/images/services/wall-painting.jpg",
  },
  {
    id: "texture-painting",
    title: "Texture Painting",
    description:
      "Add depth and character to your walls with our premium texture painting services. Create stunning visual effects that make your space unique.",
    features: [
      "Wide range of texture designs",
      "Customizable patterns and finishes",
      "Durable and long-lasting",
      "Expert craftsmen",
      "Premium texture materials",
    ],
    price: "Starting from ₹80/sq ft",
    image: "/images/services/texture-painting.jpg",
  },
  {
    id: "interior-design",
    title: "Interior Design",
    description:
      "Complete interior design solutions to transform your space into a beautiful and functional environment.",
    features: [
      "Space planning and layout",
      "Furniture selection and placement",
      "Color scheme development",
      "Lighting design",
      "3D visualization",
    ],
    price: "Custom pricing based on project",
    image: "/images/services/interior-design.jpg",
  },
  {
    id: "commercial-projects",
    title: "Commercial Projects",
    description:
      "Professional painting and design services for commercial spaces including offices, retail stores, and restaurants.",
    features: [
      "Minimal business disruption",
      "After-hours execution available",
      "Large-scale project management",
      "Corporate branding integration",
      "Quick turnaround times",
    ],
    price: "Get a custom quote",
    image: "/images/services/commercial-projects.jpg",
  },
];

export default function Services() {
  return <ServicesClient services={services} />;
}
