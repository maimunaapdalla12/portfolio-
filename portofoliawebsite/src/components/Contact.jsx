
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ContactLine from "./ContactLine";
import instance from "../config/config";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Fadlan buuxi dhammaan meelaha bannaan.",
      });
      return;
    }

    try {
      setLoading(true);

      // U dir xogta backend-ka
      const response = await instance.post("/contact", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      if (response.data.success) {
        setStatus({
          type: "success",
          message: "Fariintaada si guul leh ayaa loo diray!",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: response.data.message || "Fariinta lama dirin.",
        });
      }
    } catch (error) {
      console.error(
        "Contact form error:",
        error.response?.data?.message || error.message
      );

      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Fariinta lama dirin. Fadlan mar kale isku day.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-24"
    >
      <SectionTitle title="Get in touch" />

      <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h3 className="bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">
            Let's talk
          </h3>

          <p className="mt-6 leading-8 text-zinc-600">
            I am currently available to take on new projects.
            Send me a message about anything that you want me to work on.
          </p>

          <div className="mt-8 space-y-5 text-zinc-700">
            <ContactLine
              icon="M"
              text="maimaaabdalla@gmail.com"
            />

            <ContactLine
              icon="P"
              text="WhatsApp: +252 686641953"
            />

            <ContactLine
              icon="L"
              text="SOMAALIA"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="font-semibold">Your Name</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-3 w-full rounded border border-zinc-200 bg-zinc-100 px-5 py-4 outline-none transition focus:border-cyan-400"
              placeholder="Your Name"
            />
          </label>

          <label className="block">
            <span className="font-semibold">Your Email</span>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              className="mt-3 w-full rounded border border-zinc-200 bg-zinc-100 px-5 py-4 outline-none transition focus:border-cyan-400"
              placeholder="your@email.com"
            />
          </label>

          <label className="block">
            <span className="font-semibold">
              Write your message here
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-3 min-h-44 w-full resize-y rounded border border-zinc-200 bg-zinc-100 px-5 py-4 outline-none transition focus:border-cyan-400"
              placeholder="Write your message..."
            />
          </label>

          {status.message && (
            <p
              role="status"
              aria-live="polite"
              className={
                status.type === "success"
                  ? "rounded-lg bg-green-100 p-3 text-green-800"
                  : "rounded-lg bg-red-100 p-3 text-red-800"
              }
            >
              {status.message}
            </p>
          )}

          <button
            disabled={loading}
            className="rounded-full bg-gradient-to-r from-cyan-100 to-cyan-200 px-8 py-4 font-semibold text-zinc-900 shadow-lg shadow-cyan-200/70 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
          >
            {loading ? "Sending..." : "Submit now"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
