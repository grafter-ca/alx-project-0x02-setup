"use client";

import React, { useState } from "react";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import { type CardProps } from "@/interfaces";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initial property listings
  const [properties, setProperties] = useState<CardProps[]>([
    {
      title: "Luxury Apartment",
      content: "A beautiful luxury apartment in the heart of the city.",
    },
    {
      title: "Cozy Cottage",
      content:
        "A cozy cottage in the countryside, perfect for a weekend getaway.",
    },
    {
      title: "Modern Office Space",
      content:
        "A modern office space available for rent in a prime location.",
    },
    {
      title: "Beachfront Villa",
      content: "A stunning beachfront villa with breathtaking ocean views.",
    },
    {
      title: "Downtown Loft",
      content: "A stylish downtown loft with all the amenities you need.",
    },
    {
      title: "Suburban Family Home",
      content:
        "A spacious family home in a quiet suburban neighborhood.",
    },
    {
      title: "Penthouse Suite",
      content:
        "An exclusive penthouse suite with luxury finishes and panoramic views.",
    },
    {
      title: "Historic Mansion",
      content:
        "A historic mansion with rich architectural details and a large garden.",
    },
    {
      title: "Urban Studio",
      content:
        "A chic urban studio apartment with modern design elements.",
    },
  ]);

  // Handle adding new property
  const handleAddProperty = (newProperty: CardProps) => {
    setProperties((prev) => [...prev, newProperty]);
  };

  return (
    <section className={`${isModalOpen ? "overflow-hidden bg-blend-overlay" : ""}`}>
      <Header />
      <section className="container mx-auto p-4 flex flex-col items-center">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome to Our Property Listing
          </h1>
          <p className="text-gray-600">
            Explore properties for rent and sale. Add your own listings too!
          </p>
        </header>

        {/* Button to open modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          + Add New Property
        </button>

        {/* Grid of cards */}
        <article className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {properties.map((property, index) => (
              <Card
                key={index}
                title={property.title}
                content={property.content}
              />
            ))}
          </div>
        </article>
      </section>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddProperty}
      />
    </section>
  );
};

export default Home;
