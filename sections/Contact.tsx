"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import Globe from "@/components/Globe";
import SectionWrap from "@/components/SectionWrap";
import TypingText from "@/components/TypingText";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY
      })
      .then(
        () => {
          setLoading(false);
          setMessageSent(true);
          formRef.current?.reset();
        },
        () => {
          setLoading(false);
          alert("Oops, something went wrong. Try again.");
        }
      );
  };

  return (
    <section id="contact">
      {/* Header */}
      <motion.div className="mb-10 text-center">
        <h1 className="section-title">
          <span className="text-primary">Contact</span> Me
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2">
        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid grid-cols-1 gap-6"
        >
          <TypingText text="Have a project, collaboration, or just want to say hi? Send me a message!" />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="bg-border/20 border-border focus:ring-primary rounded-lg border p-3 focus:ring-2 focus:outline-none"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="bg-border/20 border-border focus:ring-primary rounded-lg border p-3 focus:ring-2 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="bg-border/20 border-border focus:ring-primary h-32 resize-none rounded-lg border p-3 focus:ring-2 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="btn-primary mt-2 mb-2 w-full cursor-pointer lg:mt-6 lg:mb-0"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {messageSent && (
            <p className="text-success font-medium">
              Message sent successfully! I will get back to you soon.
            </p>
          )}
        </form>

        <div className="flex h-[300px] w-full items-center justify-center lg:h-full">
          <Globe lat={6.5244} lon={3.3792} />
          {/* <Globe lat={45.76342} lon={4.834277} />*/}
        </div>
      </div>
    </section>
  );
};

export default SectionWrap(Contact);
