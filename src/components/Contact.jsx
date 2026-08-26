import React, { useState } from "react";
import { Github, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:ismamsadat34@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6 md:p-10"
    >
      <div className="max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="textarea textarea-bordered w-full h-32"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-outline">
              Send
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/codermam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-amber-400"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:ismamsadat34@gmail.com"
            aria-label="Email"
            className="hover:text-amber-400"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="tel:+8801777882244"
            aria-label="Phone"
            className="hover:text-amber-400"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
