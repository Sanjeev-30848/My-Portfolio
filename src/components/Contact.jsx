function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto text-center">

        <p className="mb-4">
          📧 2400030848csehtr@gmail.com
        </p>

        <p className="mb-4">
          📱 +91 7981595479
        </p>

        <div className="flex justify-center gap-6 mt-8">

          <a
            href="YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            LinkedIn
          </a>

          <a
            href="YOUR_GITHUB"
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            GitHub
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;