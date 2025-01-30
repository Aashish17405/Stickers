import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stickerTypes = [
  { id: 1, name: "Vinyl Stickers", image: "../assets/vinyl.jpg" },
  { id: 2, name: "Holographic Stickers", image: "../assets/vinyl.jpg" },
  { id: 3, name: "Die-Cut Stickers", image: "../assets/holographic.jpg" },
];

function LandingPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Express Yourself with Custom Stickers
        </h1>
        <p className="text-xl mb-8">
          Create unique stickers that reflect your personality and style.
        </p>
        <Link
          to="/customstickers"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Create Custom Stickers
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Sticker Types
        </h2>
        <div className="flex justify-center space-x-8">
          {stickerTypes.map((type) => (
            <motion.div
              key={type.id}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Navigate to shop page with filter
              }}
            >
              <img
                src={type.image || "/placeholder.svg"}
                alt={type.name}
                className="w-48 h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{type.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
