"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import css from "./Contacts.module.css";

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className={css.contactSection}>
      <motion.div
        className={css.contactContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={css.title}>Contact Me</h2>

        <p className={css.subtitle}>
          Have a project or question? Let&apos;s talk 🙂
        </p>

        <form onSubmit={handleSubmit} className={css.form}>
          <div className={css.inputGroup}>
            <input type="text" required />
            <label>Name</label>
          </div>

          <div className={css.inputGroup}>
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className={css.inputGroup}>
            <textarea rows={4} required></textarea>
            <label>Message</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={css.button}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {success && (
          <p className={css.success}>Message sent 🚀</p>
        )}
      </motion.div>
    </section>
  );
}