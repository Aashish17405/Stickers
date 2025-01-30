const stickers = [
  { id: 1, name: "Cool Cat", image: "/images/cool-cat.jpg", price: 2.99 },
  { id: 2, name: "Happy Sun", image: "/images/happy-sun.jpg", price: 1.99 },
  { id: 3, name: "Cute Puppy", image: "/images/cute-puppy.jpg", price: 2.49 },
  // Add more stickers here
];

function ShopPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Shop Stickers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stickers.map((sticker) => (
          <div
            key={sticker.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={sticker.image || "/placeholder.svg"}
              alt={sticker.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{sticker.name}</h2>
              <p className="text-gray-600 mb-4">${sticker.price.toFixed(2)}</p>
              <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;