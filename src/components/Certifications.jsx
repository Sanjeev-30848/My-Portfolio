const certs = [
  "AWS Cloud Practitioner",
  "GitHub Copilot Certification",
  "Certified C Developer",
  "CEFR B1 English",
  "Social Internship Certification"
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Certifications
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h3 className="font-bold">
              {cert}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;