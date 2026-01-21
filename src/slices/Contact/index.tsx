"use client";

import { useState } from "react";
import { type Content, isFilled } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Linkedin, Github, Mail } from "lucide-react";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

type ContactProps = SliceComponentProps<Content.ContactSlice>;

const iconMap: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin className="h-5 w-5" />,
  GitHub: <Github className="h-5 w-5" />,
  Email: <Mail className="h-5 w-5" />,
};

// Helper function to extract username from social media URLs
const extractUsername = (url: string, platform: string): string => {
  if (!url) return platform;
  
  try {
    if (platform === "LinkedIn") {
      const match = url.match(/linkedin\.com\/in\/([^/?]+)/);
      return match ? `@${match[1]}` : platform;
    } else if (platform === "GitHub") {
      const match = url.match(/github\.com\/([^/?]+)/);
      return match ? `@${match[1]}` : platform;
    } else if (platform === "Instagram") {
      const match = url.match(/instagram\.com\/([^/?]+)/);
      return match ? `@${match[1]}` : platform;
    } else if (platform === "Email") {
      const match = url.match(/mailto:([^@]+)/);
      return match ? match[1] : platform;
    }
  } catch (error) {
    return platform;
  }
  
  return platform;
};

const Contact = ({ slice }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Format message for WhatsApp
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = slice.primary.whatsappNumber
      ?.replace(/\D/g, "") // Remove non-numeric characters
      .replace(/^0/, ""); // Remove leading 0 for intl format

    if (whatsappNumber) {
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <Bounded
      as="section"
      id="contact"
      className="py-12 md:py-16 lg:py-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          {isFilled.richText(slice.primary.heading) && (
            <div className="mb-4">
              <PrismicRichText
                field={slice.primary.heading}
                components={{
                  heading1: ({ children }) => (
                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {children}
                    </h2>
                  ),
                  heading2: ({ children }) => (
                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {children}
                    </h2>
                  ),
                  heading3: ({ children }) => (
                    <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {children}
                    </h3>
                  ),
                }}
              />
            </div>
          )}
          {isFilled.richText(slice.primary.description) && (
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-base text-slate-300 sm:text-lg ">
                    {children}
                  </p>
                ),
              }}
            />
          )}
        </div>

        {/* Contact Section */}
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col justify-start space-y-8">
            {/* Social Links */}
            <div>
              <h3 className="text-center md:text-left mb-6 text-lg font-semibold text-white">
                Informações de Contato
              </h3>
              <div className="flex flex-col gap-4">
                {isFilled.group(slice.primary.socialLinks) &&
                  slice.primary.socialLinks.map((link: any, index: number) => {
                    if (!isFilled.link(link.url)) return null;
                    const platform = link.platform || "";
                    const icon = iconMap[platform] || null;
                    const urlString = typeof link.url === 'object' ? (link.url.url || '') : (link.url || '');
                    const username = extractUsername(urlString, platform);

                    return (
                      <PrismicNextLink
                        key={index}
                        field={link.url}
                        className="group flex items-center gap-3 rounded-sm border border-transparent px-4 py-3 text-slate-300 transition-all duration-200 hover:border-accent hover:bg-accent/10 hover:text-accent"
                        aria-label={`Visit ${platform}`}
                      >
                        <div className="flex items-center justify-center h-6 w-6">
                          {icon || <Mail className="h-5 w-5" />}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{platform}</span>
                          <span className="text-xs text-slate-400 group-hover:text-accent/80">
                            {username}
                          </span>
                        </div>
                      </PrismicNextLink>
                    );
                  })}
              </div>
            </div>

            {/* Availability Info */}
            <div className="rounded-sm border border-slate-700 bg-slate-900/30 px-4 py-4">
              <h4 className="mb-2 text-sm font-semibold text-white">
                Disponibilidade
              </h4>
              <p className="text-sm text-slate-300">
                Atualmente disponível para novos projetos. Tempo de resposta médio: 24 horas.
              </p>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white"
              >
                {slice.primary.nameLabel || "Your Name"}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full rounded-sm bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 border border-slate-700 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
              >
                {slice.primary.emailLabel || "Your Email"}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-sm bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 border border-slate-700 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="mb-2 block text-sm font-medium text-white"
              >
                {slice.primary.projectTypeLabel || "Project Type"}
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                required
                className="w-full rounded-sm bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 border border-slate-700 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50"
              >
                <option value="">Selecione um tipo de projeto</option>
                <option value="Desenvolvimento de Site">Desenvolvimento de Site</option>
                <option value="Aplicativo Móvel">Aplicativo Móvel</option>
                <option value="Sistema Completo">Sistema Completo</option>
                <option value="Consultoria">Consultoria</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                {slice.primary.messageLabel || "Your Message"}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full rounded-sm bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 border border-slate-700 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-[#FF6B6B] px-6 py-3 text-sm font-medium text-white shadow-[0_4px_20px_rgba(255,107,107,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff5252] hover:shadow-[0_4px_25px_rgba(255,107,107,0.4)]"
            >
              {slice.primary.submitButtonText || "Send via WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </Bounded>
  );
};

export default Contact;
