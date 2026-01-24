import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
  Music2
} from "lucide-react";

type FooterProps = SliceComponentProps<Content.FooterSlice>;

const platformIcons = {
  Instagram: Instagram,
  Facebook: Facebook,
  Twitter: Twitter,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  WhatsApp: MessageCircle,
  TikTok: Music2,
};

const Footer: FC<FooterProps> = ({ slice }) => {
  return (
    <footer
      className="bg-[#0B0F17] py-12 px-6 border-t border-slate-800"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Address Column */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Dantinos<span className="text-[#FF6B6B]">.</span>
            </h2>
            {isFilled.richText(slice.primary.address) && (
              <div className="text-slate-400 text-sm leading-relaxed max-w-xs">
                <PrismicRichText field={slice.primary.address} />
              </div>
            )}
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Links Rápidos</h3>
            <ul className="flex flex-col gap-4">
              {slice.primary.navigation_links.map((item, index) => (
                <li key={index}>
                  <PrismicNextLink
                    field={item.link}
                    className="text-slate-400 hover:text-[#FF6B6B] transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Redes Sociais</h3>
            <div className="flex flex-wrap gap-4">
              {slice.primary.social_links.map((item, index) => {
                const Icon = platformIcons[item.platform as keyof typeof platformIcons] || Instagram;
                return (
                  <PrismicNextLink
                    key={index}
                    field={item.link}
                    className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-[#FF6B6B] hover:bg-[#FF6B6B]/10 transition-all duration-300"
                    aria-label={item.platform || "Rede Social"}
                  >
                    <Icon size={18} />
                  </PrismicNextLink>
                );
              })}
            </div>
          </div>

          {/* Copyright Column */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <div className="text-slate-500 text-xs">
              <p className="mt-auto">
                {slice.primary.copyright || `© ${new Date().getFullYear()} Dantinos. Todos os direitos reservados.`}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line (Optional Mobile-friendly copyright center) */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 md:hidden">
          <p className="text-slate-500 text-xs text-center">
            {slice.primary.copyright || `© ${new Date().getFullYear()} Dantinos. Todos os direitos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
