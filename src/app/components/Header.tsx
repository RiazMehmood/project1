import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold hover:underline">
          MyCompany
        </Link>
        <nav className="space-x-4">
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/merch" className="hover:underline">Merch</Link>
          <Link href="/help" className="hover:underline">Help</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;