function Research() {
  return (
    <section
      id="research"
      className="py-20 px-8 bg-gray-100"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Research Experience
      </h2>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-4">
          CNN-Based Automated Disease Detection
        </h3>

        <p className="text-gray-700 mb-4">
          Developing a deep learning model for disease
          detection using Chest X-Ray images.
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>TensorFlow & CNN Architectures</li>
          <li>Grad-CAM Explainability</li>
          <li>Medical Imaging Analysis</li>
          <li>Research Paper Preparation</li>
        </ul>
      </div>
    </section>
  );
}

export default Research;