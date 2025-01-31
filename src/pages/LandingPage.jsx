import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vinyl from "../assets/vinyl.jpg"

const stickerTypes = [
  { id: 1, name: "Vinyl Stickers", image: vinyl },
  { id: 2, name: "Holographic Stickers", image: vinyl },
  { id: 3, name: "Die-Cut Stickers", image: vinyl },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-2">
        <section className="text-center max-w-4xl mx-auto mb-12 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Express Yourself with Custom Stickers
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
            Create unique stickers that reflect your personality and style.
          </p>
          <Link
            to="/customstickers"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Custom Stickers
          </Link>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-4">
            Explore Sticker Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {stickerTypes.map((type) => (
              <motion.div
                key={type.id}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg cursor-pointer flex flex-col items-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  // Navigate to shop page with filter
                }}
              >
                <div className="w-full aspect-square mb-4 rounded-lg overflow-hidden">
                  <img
                    src={type.image || "/placeholder.svg"}
                    alt={type.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-center">
                  {type.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;