import React from 'react';
import vinyl from "../assets/vinyl.jpg";
import holographic from "../assets/holographic.jpg";

const stickers = [
  { id: 1, name: "Cool Cat", image: holographic, price: 20 },
  { id: 2, name: "Happy Sun", image: vinyl, price: 15 },
  { id: 3, name: "Cute Puppy", image: holographic, price: 25 },
  // Add more stickers here
];

function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
          Shop Stickers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {stickers.map((sticker) => (
            <div
              key={sticker.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={sticker.image || "/placeholder.svg"}
                  alt={sticker.name}
                  className="w-full h-full object-cover p-3"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-1">
                  {sticker.name}
                </h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Rs. {sticker.price.toFixed(2)}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <button className="w-full bg-blue-500 text-white px-3 py-2 rounded text-sm sm:text-base font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                    Add to Cart
                  </button>
                  <button className="w-full bg-gray-200 text-gray-800 px-3 py-2 rounded text-sm sm:text-base font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;