import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Phone,
  Send,
  ArrowUpRight,
  Sparkles,
  MapPin,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);

    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`,
    );

    window.location.href = `mailto:ismamsadat34@gmail.com?subject=${subject}&body=${body}`;

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const contactLinks = [
    {
      label: "Email",
      value: "ismamsadat34@gmail.com",
      href: "mailto:ismamsadat34@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+880 1777-882244",
      href: "tel:+8801777882244",
      icon: Phone,
    },
    {
      label: "GitHub",
      value: "github.com/codermam",
      href: "https://github.com/codermam",
      icon: Github,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black px-6 py-24 text-white md:px-10"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Amber glow */}
      <motion.div
        className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[140px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-14 text-center"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-300 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Let's work together
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Have a project in mind, an opportunity, or simply want to say hello?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* =================================================
            CONTACT GRID
        ================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="flex flex-col"
          >
            {/* Intro card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl md:p-8">
              {/* Decorative circle */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-amber-400/10 bg-amber-400/5" />

              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/20">
                  <Mail className="h-6 w-6 text-black" />
                </div>

                <h3 className="text-2xl font-bold">Get in touch</h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  I'm always open to discussing software development,
                  interesting projects, collaborations, and new opportunities.
                </p>

                {/* Location */}
                <div className="mt-7 flex items-center gap-3 text-sm text-gray-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <MapPin className="h-4 w-4 text-amber-400" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-600">Location</p>

                    <p className="text-gray-300">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact methods */}
            <div className="mt-5 space-y-3">
              {contactLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.15 + index * 0.1,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-md transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-amber-400/20 group-hover:bg-amber-400/10">
                      <Icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-amber-400" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-600">{item.label}</p>

                      <p className="truncate text-sm text-gray-300">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE — FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl md:p-8"
            >
              {/* Top glow */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70" />

              <div className="mb-7">
                <h3 className="text-2xl font-bold">Send me a message</h3>

                <p className="mt-2 text-sm text-gray-500">
                  Fill out the form and your email client will open with the
                  message ready to send.
                </p>
              </div>

              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-amber-400/50 focus:bg-black/30 focus:ring-2 focus:ring-amber-400/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-amber-400/50 focus:bg-black/30 focus:ring-2 focus:ring-amber-400/10"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-amber-400/50 focus:bg-black/30 focus:ring-2 focus:ring-amber-400/10"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 font-bold text-black shadow-lg shadow-amber-500/10 transition-all duration-300 hover:shadow-amber-500/25"
              >
                <Send className="h-4 w-4" />
                Send Message
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* =================================================
            SOCIAL LINKS
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-sm text-gray-600">Find me online</p>

          <div className="flex justify-center gap-3">
            <a
              href="https://github.com/codermam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-400"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="mailto:ismamsadat34@gmail.com"
              aria-label="Email"
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-400"
            >
              <Mail className="h-5 w-5" />
            </a>

            <a
              href="tel:+8801777882244"
              aria-label="Phone"
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-400"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-gray-600">
            Designed & built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
