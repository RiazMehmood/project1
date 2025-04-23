const faqs = [
  { question: 'How can I contact support?', answer: 'You can email us at support@example.com.' },
  { question: 'What is your return policy?', answer: 'Returns are accepted within 30 days.' },
];

const Help = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Help & Contact Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Contact Options</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Help Street, Support City</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Help;