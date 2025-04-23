const products = [
  { name: 'Hat', image: '/images/hat.jpg', price: '$20' },
  { name: 'Shirt', image: '/images/shirt.jfif', price: '$30' },
  { name: 'Coffee Mug', image: '/images/mug.jpg', price: '$15' },
];

const Merch = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Our Merch</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item, idx) => (
          <div key={idx} className="border p-4 rounded-xl shadow hover:shadow-lg transition">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl mt-4 font-semibold">{item.name}</h2>
            <p className="text-gray-700">{item.price}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merch;