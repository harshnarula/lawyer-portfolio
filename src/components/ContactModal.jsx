import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    if (formData.phone.trim()) {
      const cleanedPhone = formData.phone.trim();
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(cleanedPhone)) {
        newErrors.phone = "Enter a valid 10-digit phone number";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("Validation errors:", validationErrors);
      return;
    }

    setIsLoading(true);

    const templateParams = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone || "Not Provided",
      message: formData.message,
    };

    console.log("Test 2");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          console.log("Test 3");

          setSuccessMessage(
            "Thank you for reaching out. Your message has been successfully delivered — we’ll get back to you shortly."
          );

          setFormData({ name: "", email: "", phone: "", message: "" });

          setTimeout(() => setSuccessMessage(""), 4000);
          setIsLoading(false);
        },
        (error) => {
          console.error("Failed to send email:", error);
          setSuccessMessage("Something went wrong. Please try again.");
          setIsLoading(false);

          setFormData({ name: "", email: "", phone: "", message: "" });
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm blur-in">
      <div className="bg-white w-[90%] sm:w-[450px] rounded-3xl shadow-xl p-6 sm:p-8 relative transition-all fade-in-scale">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-red-500 transition"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl font-semibold text-[var(--primary)] font-serif mb-6 text-center">
          Reach Out for Expert Legal Guidance
        </h2>

        {successMessage && (
          <div className="bg-green-100 text-green-800 border border-green-300 rounded-lg px-4 py-3 mb-4 text-sm">
            {successMessage}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name *"
              className={`w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-sm ${
                errors.name ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              type="email"
              className={`w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-sm ${
                errors.email ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone (Optional)"
              type="tel"
              className={`w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-sm ${
                errors.phone ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message *"
              rows="4"
              className={`w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-sm resize-none ${
                errors.message ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 cursor-pointer rounded-full font-semibold text-white transition hover:scale-[1.03] ${
              isLoading ? "opacity-60 cursor-not-allowed" : ""
            }`}
            style={{
              background:
                "linear-gradient(to right, var(--cta-gradient-start), var(--cta-gradient-end))",
            }}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
