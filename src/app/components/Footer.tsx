const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;