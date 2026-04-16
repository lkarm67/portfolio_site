"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./Contact.module.css";
import { useLanguage } from "@/context/LanguageContext";
import en from "../../locales/en.json";
import uk from "../../locales/uk.json";

type LocaleType = typeof en;

// ===== FORM DATA =====
type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { lang } = useLanguage();
  const t: LocaleType = lang === "uk" ? uk : en;

  // ===== SCHEMA =====
  const schema = yup.object({
    name: yup
      .string()
      .min(2, t.contact.errors.nameMin)
      .required(t.contact.errors.nameRequired),

    email: yup
      .string()
      .email(t.contact.errors.emailInvalid)
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        t.contact.errors.emailDomain
      )
      .required(t.contact.errors.emailRequired),

    message: yup
      .string()
      .min(10, t.contact.errors.messageMin)
      .required(t.contact.errors.messageRequired),
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      reset();

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      alert("Something went wrong 😢");
    } finally {
      setLoading(false);
    }
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
        <h2 className={css.title}>{t.contact.title}</h2>

        <div className={css.parWrapper}>
          <p className={css.subtitle}>{t.contact.subtitle1}</p>
          <p className={css.subtitle}>{t.contact.subtitle2}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          {/* NAME */}
          <div className={css.inputGroup}>
            <input
              {...register("name")}
              placeholder=" "
              className={errors.name ? css.inputError : ""}
            />
            <label>{t.contact.form.name}</label>
            {errors.name && (
              <span className={css.error}>{errors.name.message}</span>
            )}
          </div>

          {/* EMAIL */}
          <div className={css.inputGroup}>
            <input
              {...register("email")}
              placeholder=" "
              className={errors.email ? css.inputError : ""}
            />
            <label>{t.contact.form.email}</label>
            {errors.email && (
              <span className={css.error}>{errors.email.message}</span>
            )}
          </div>

          {/* MESSAGE */}
          <div className={css.inputGroup}>
            <textarea
              rows={4}
              {...register("message")}
              placeholder=" "
              className={errors.message ? css.inputError : ""}
            />
            <label>{t.contact.form.message}</label>
            {errors.message && (
              <span className={css.error}>{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid || loading}
            className={css.button}
          >
            {loading
              ? t.contact.form.button.sending
              : t.contact.form.button.send}
          </button>
        </form>

        {success && (
          <p className={css.success}>{t.contact.form.success}</p>
        )}
      </motion.div>
    </section>
  );
}