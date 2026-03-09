'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact_page');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyles = 'w-full border border-silver-800 bg-silver-950 px-4 py-3 font-body text-sm text-silver-200 placeholder:text-silver-600 focus:border-brick-ember-500 focus:outline-none transition-colors';

  return (
    <section className="bg-black pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-brick-ember-500">///</p>
          <h1 className="mb-4 text-5xl font-bold text-silver-50 md:text-6xl">{t('title')}</h1>
          <p className="max-w-2xl text-lg text-silver-400">{t('intro')}</p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-heading text-xs font-bold uppercase tracking-wider text-silver-400">
                    {t('form_name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-heading text-xs font-bold uppercase tracking-wider text-silver-400">
                    {t('form_email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block font-heading text-xs font-bold uppercase tracking-wider text-silver-400">
                    {t('form_phone')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="mb-2 block font-heading text-xs font-bold uppercase tracking-wider text-silver-400">
                    {t('form_organization')}
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    className={inputStyles}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block font-heading text-xs font-bold uppercase tracking-wider text-silver-400">
                  {t('form_subject')}
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputStyles}
                >
                  <option value="">&mdash;</option>
                  <option value="optics">{t('form_subject_optics')}</option>
                  <option value="range">{t('form_subject_range')}</option>
                  <option value="training">{t('form_subject_training')}</option>
                  <option value="general">{t('form_subject_general')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-heading text-xs font-bold uppercase tracking-wider text-silver-400">
                  {t('form_message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brick-ember-500 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brick-ember-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick-ember-500 sm:w-auto"
              >
                {t('form_submit')}
              </button>
            </form>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="border border-silver-800 bg-silver-950 p-8">
              <h2 className="mb-6 font-heading text-xl font-bold uppercase text-silver-50">{t('direct_title')}</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-brick-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-mono text-sm text-silver-200">{t('phone')}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-brick-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-mono text-sm text-silver-200">{t('email')}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-brick-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-sm text-silver-300">
                    <p>{t('address_line1')}</p>
                    <p>{t('address_line2')}</p>
                    <p>{t('address_city')}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="border-t border-silver-800 pt-6">
                  <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-wider text-silver-400">{t('hours_title')}</h3>
                  <p className="font-mono text-sm text-silver-300">{t('hours')}</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 flex h-48 items-center justify-center border border-silver-800 bg-alabaster-grey-950">
              <div className="flex flex-col items-center gap-2 text-silver-700">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="font-mono text-xs">Map</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
