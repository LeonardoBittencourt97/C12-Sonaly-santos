import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OFFICE_INFO, LAWYER_PROFILE } from "@/lib/data";
import { MessageSquare, Globe, MapPin, ShieldCheck, ArrowUpRight, Scale } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sonaly-santos-advocacia.vercel.app";

export const metadata: Metadata = {
  title: "Canais Oficiais & Links | Dra. Sonaly Cristina dos Santos Advocacia",
  description:
    "Acesse rapidamente o WhatsApp oficial da Dra. Sonaly Cristina dos Santos, Instagram, localização em Curitiba/PR e website institucional.",
  alternates: {
    canonical: `${siteUrl}/links`,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${siteUrl}/links`,
    title: "Canais Oficiais & Links | Dra. Sonaly Cristina dos Santos Advocacia",
    description:
      "Acesse rapidamente o WhatsApp oficial, Instagram e localização da sede em Curitiba/PR.",
    siteName: "Sonaly Cristina dos Santos Advocacia",
    images: [
      {
        url: "/og-image_optimized_300.jpeg",
        width: 1200,
        height: 630,
        alt: "Sonaly Cristina dos Santos Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canais Oficiais & Links | Dra. Sonaly Cristina dos Santos Advocacia",
    description:
      "Acesse rapidamente o WhatsApp oficial, Instagram e localização da sede em Curitiba/PR.",
    images: ["/og-image_optimized_300.jpeg"],
  },
};

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "Atendimento WhatsApp Direto",
      subtitle: "(41) 99164-1398 • Fale com a Dra. Sonaly",
      href: OFFICE_INFO.whatsappUrl,
      icon: MessageSquare,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Oficial Institucional",
      subtitle: "Áreas de atuação, artigos educativos e biografia",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Siga no Instagram",
      subtitle: "@sonalysantos.adv • Conteúdo jurídico e orientações",
      href: OFFICE_INFO.social.instagram,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "maps",
      title: "Como Chegar / Traçar Rota no GPS",
      subtitle: "Paraná Office - Av. Paraná, 1755 - Sala 34 - Boa Vista, Curitiba/PR",
      href: OFFICE_INFO.mapsDirectionsUrl,
      icon: MapPin,
      highlight: false,
    },
  ];

  const specialties = [
    "Direito Penal",
    "Processo Penal",
    "Direito de Família",
    "Direito das Sucessões",
    "Direito do Trabalho",
    "10 Anos de Prática",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#FFFFFF] text-[#1A1A1A]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Escuro Corporativo com Logo e Identidade Visual */}
        <div className="relative bg-[#1A1A1A] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#7B6253]/40">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D4AF37" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#D4AF37" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop)" />
            </svg>
          </div>

          {/* Topo: Logo */}
          <div className="relative z-10">
            <div className="relative h-16 w-80">
              <Image
                src="/logo_semfundo_escritabranca_paramodoescuro.png"
                alt={OFFICE_INFO.name}
                fill
                priority
                className="object-contain object-left"
                sizes="340px"
              />
            </div>
          </div>

          {/* Centro: Foto de Perfil & Bio Executiva */}
          <div className="relative z-10 flex items-center gap-6 my-auto max-w-lg">
            <div className="relative w-28 h-28 xl:w-32 xl:h-32 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-xl flex-shrink-0 bg-[#252220]">
              <Image
                src={LAWYER_PROFILE.photo}
                alt={LAWYER_PROFILE.name}
                fill
                priority
                className="object-cover object-top"
                sizes="128px"
              />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-xs font-heading font-semibold text-[#D4AF37]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Advocacia Especializada</span>
              </div>
              <h1 className="font-heading text-2xl xl:text-3xl font-bold leading-tight text-white">
                {LAWYER_PROFILE.name}
              </h1>
              <p className="font-body text-xs xl:text-sm text-gray-300 leading-relaxed">
                10 anos de prática jurídica forense com especialização em Direito Penal e Processo Penal, e sólida atuação em Família, Sucessões e Direito do Trabalho em Curitiba/PR.
              </p>
            </div>
          </div>

          {/* Rodapé: Pilares e Selo Ético */}
          <div className="relative z-10 space-y-4 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {specialties.map((spec, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[0.6875rem] font-heading text-gray-300"
                >
                  {spec}
                </span>
              ))}
            </div>
            <p className="text-[0.6875rem] text-gray-400 font-body">
              Atendimento com hora marcada no Paraná Office (Boa Vista, Curitiba) e online para todo o Brasil.
            </p>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro com Links de Conversão Direta */}
        <div className="bg-[#F9F6F0] flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden">
          
          <div className="space-y-1">
            <span className="font-heading uppercase text-xs tracking-widest text-[#7B6253] font-bold">
              Canais de Contato & Informações
            </span>
            <h2 className="font-heading text-2xl xl:text-3xl font-bold text-[#1A1A1A]">
              Selecione o canal desejado
            </h2>
          </div>

          {/* Grade de Links */}
          <div className="space-y-3.5 my-auto max-w-xl w-full">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.id === "website" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md ${
                    link.highlight
                      ? "bg-[#25D366] text-white border-[#20ba59] hover:bg-[#20ba59]"
                      : "bg-white text-[#1A1A1A] border-[#7B6253]/25 hover:border-[#D4AF37] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        link.highlight
                          ? "bg-white/20 text-white"
                          : "bg-[#EFE8DF] text-[#7B6253] group-hover:bg-[#D4AF37] group-hover:text-black"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-sm xl:text-base block">
                        {link.title}
                      </span>
                      <span
                        className={`text-xs block font-body ${
                          link.highlight ? "text-white/90" : "text-[#6B625B]"
                        }`}
                      >
                        {link.subtitle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      link.highlight ? "text-white" : "text-[#6B625B] group-hover:text-[#D4AF37]"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Rodapé Direito */}
          <div className="pt-4 border-t border-[#7B6253]/20 flex items-center justify-between text-xs text-[#6B625B] font-body">
            <span>© {new Date().getFullYear()} {OFFICE_INFO.name}</span>
            <Link href="/" className="font-heading font-semibold text-[#7B6253] hover:underline">
              Ir para o Website Principal →
            </Link>
          </div>
        </div>

      </div>

      {/* ===================== VERSÃO MOBILE (Vertical Fluida com Imagem de Topo) ===================== */}
      <div className="lg:hidden min-h-screen flex flex-col justify-between p-4 sm:p-6 bg-[#F9F6F0]">
        
        <div className="space-y-6">
          {/* Header Mobile com Logo */}
          <div className="flex items-center justify-between pb-4 border-b border-[#7B6253]/20">
            <div className="relative h-12 w-48">
              <Image
                src="/logo_semfundo_escritapreta_paramodoclaro.png"
                alt={OFFICE_INFO.name}
                fill
                priority
                className="object-contain object-left"
                sizes="200px"
              />
            </div>
            <Link
              href="/"
              className="px-3 py-1.5 rounded-full bg-[#EFE8DF] border border-[#7B6253]/30 text-xs font-heading font-semibold text-[#7B6253]"
            >
              Website
            </Link>
          </div>

          {/* Card da Advogada */}
          <div className="p-5 rounded-2xl bg-white border border-[#7B6253]/25 shadow-xs flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#D4AF37] flex-shrink-0 bg-[#252220]">
              <Image
                src={LAWYER_PROFILE.photo}
                alt={LAWYER_PROFILE.name}
                fill
                priority
                className="object-cover object-top"
                sizes="80px"
              />
            </div>
            <div className="space-y-1">
              <span className="text-[0.6875rem] font-heading uppercase tracking-wider text-[#D4AF37] font-bold block">
                Advocacia Especializada
              </span>
              <h2 className="font-heading text-lg font-bold text-[#1A1A1A] leading-tight">
                {LAWYER_PROFILE.name}
              </h2>
              <p className="text-xs text-[#6B625B] font-body line-clamp-2">
                10 anos de prática forense • Especialista em Direito Penal • Família, Sucessões e Trabalho
              </p>
            </div>
          </div>

          {/* Lista de Botões Rápidos */}
          <div className="space-y-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.id === "website" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between shadow-xs ${
                    link.highlight
                      ? "bg-[#25D366] text-white border-[#20ba59]"
                      : "bg-white text-[#1A1A1A] border-[#7B6253]/25 active:bg-[#EFE8DF]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        link.highlight
                          ? "bg-white/20 text-white"
                          : "bg-[#EFE8DF] text-[#7B6253]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-sm block">
                        {link.title}
                      </span>
                      <span
                        className={`text-xs block font-body ${
                          link.highlight ? "text-white/90" : "text-[#6B625B]"
                        }`}
                      >
                        {link.subtitle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 flex-shrink-0 ${
                      link.highlight ? "text-white" : "text-[#6B625B]"
                    }`}
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Rodapé Mobile */}
        <div className="pt-6 border-t border-[#7B6253]/20 text-center text-xs text-[#6B625B] font-body space-y-1 mt-6">
          <p>© {new Date().getFullYear()} {OFFICE_INFO.name}</p>
          <p>{OFFICE_INFO.addressShort}</p>
        </div>

      </div>
    </main>
  );
}