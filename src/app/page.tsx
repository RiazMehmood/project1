import Image from "next/image";

import Link from 'next/link';

const Home = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center space-y-8">
      <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
      <p className="text-lg text-gray-700">Explore our offerings and learn more about us.</p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
        <Link href="/about" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          About Us
        </Link>
        <Link href="/merch" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Merch
        </Link>
        <Link href="/help" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          Help & Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;