const About = () => {
  return (
    <div className="p-6 space-y-8 max-w-5xl mx-auto">
      <section>
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">[Company History Content]</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Replace with actual team member images and info */}
          <div className="bg-white shadow rounded-xl p-4">[Team Member 1]</div>
          <div className="bg-white shadow rounded-xl p-4">[Team Member 2]</div>
          <div className="bg-white shadow rounded-xl p-4">[Team Member 3]</div>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Mission</h2>
        <p>[Mission Statement]</p>
        <h2 className="text-2xl font-semibold">Vision</h2>
        <p>[Vision Statement]</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Client Testimonials</h2>
        <blockquote className="mt-2 border-l-4 pl-4 italic">"[Testimonial]" - [Client Name]</blockquote>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Awards & Recognitions</h2>
        <ul className="list-disc list-inside">
          <li>[Award 1]</li>
          <li>[Award 2]</li>
        </ul>
      </section>
    </div>
  );
};

export default About;