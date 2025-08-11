export default function About() {
  return (
    <section className="py-16 flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 gap-8">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600">
          I’m a final-year engineering student passionate about solving problems — 
          from fixing race conditions in booking systems to building AI-powered apps.
        </p>
      </div>
    </section>
  );
}
