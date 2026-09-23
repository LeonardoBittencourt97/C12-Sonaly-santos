import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OFFICE_INFO, LAWYER_PROFILE } from "@/lib/data";
import { MessageSquare, Globe, MapPin, ShieldCheck, ArrowUpRight, Scale } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sonaly-santos-advocacia.vercel.app";

export const metadata: Metadata = {
  title: "Canais Oficiais & Links | Sonaly Cristina dos Santos Advocacia",
  description:
    "Acesse rapidamente o WhatsApp oficial da Dra. Sonaly Cristina dos Santos, Instagram, localização da sede no Paraná Office em Curitiba/PR e website institucional.",
  alternates: {
    canonical: `${siteUrl}/links`,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${siteUrl}/links`,
    title: "Canais Oficiais & Links | Sonaly Cristina dos Santos Advocacia",
    description:
      "Acesse rapidamente o WhatsApp oficial da Dra. Sonaly Cristina dos Santos, Instagram e localização da sede em Curitiba/PR.",
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
    title: "Canais Oficiais & Links | Sonaly Cristina dos Santos Advocacia",
    description:
      "Acesse rapidamente o WhatsApp oficial da Dra. Sonaly Cristina dos Santos, Instagram e localização da sede em Curitiba/PR.",
    images: ["/og-image_optimized_300.jpeg"],
  },
};

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "Atendimento WhatsApp Direto",
      subtitle: "(41) 99164-1398 • Fale diretamente com a advogada",
      href: OFFICE_INFO.whatsappUrl,
      icon: MessageSquare,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Oficial Institucional",
      subtitle: "Conheça nossas áreas, artigos educativos e biografia",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Siga-nos no Instagram",
      subtitle: "@sonalysantos.adv • Conteúdo jurídico e orientações",
      href: OFFICE_INFO.social.instagram,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "maps",
      title: "Como Chegar / Rota no GPS (Google Maps)",
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
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll - Padrão C08) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Escuro com Logo e Identidade Visual */}
        <div className="relative bg-[#141414] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#7B6253]/25">
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

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-white/5 backdrop-blur-md text-xs font-heading tracking-wider text-[#D4AF37]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Advocacia Especializada • 10 Anos</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#D4AF37]">
              Curitiba - PR
            </span>
          </div>

          <div className="relative z-10 my-auto py-2 flex flex-col items-center text-center w-full">
            <div className="relative w-full max-w-[560px] xl:max-w-[640px] h-52 xl:h-64 mb-4">
              <Image
                src="/logo_semfundo_escritapreta_paramodoclaro.png"
                alt={OFFICE_INFO.name}
                fill
                priority
                className="object-contain object-center drop-shadow-md"
                sizes="(min-width: 1280px) 640px, 560px"
              />
            </div>

            <div className="h-0.5 w-16 bg-[#D4AF37]/40 mb-4" />

            <h1 className="font-heading text-xl xl:text-2xl font-semibold max-w-sm leading-snug text-white">
              {OFFICE_INFO.tagline}
            </h1>

            <p className="font-body text-xs xl:text-sm text-gray-300 max-w-xs mt-3 leading-relaxed">
              Atuação combativa e especializada nas áreas de Direito Penal, Família, Sucessões e Direito do Trabalho.
            </p>
          </div>

          <div className="relative z-10 text-[0.6875rem] font-body text-gray-400 flex items-center justify-between border-t border-white/10 pt-3">
            <span>Sede: Paraná Office • Curitiba/PR</span>
            <span>© {new Date().getFullYear()} {OFFICE_INFO.name}</span>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro com Ações e Especialidades */}
        <div className="bg-[#FFFFFF] flex flex-col justify-between p-6 xl:p-8 h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center my-auto space-y-3 xl:space-y-3.5 py-4">
            
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full max-w-[460px] xl:max-w-[520px] h-36 xl:h-44 mb-2">
                <Image
                  src="/logo_semfundo_escritabranca_paramodoescuro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  priority
                  className="object-contain object-center drop-shadow-xs"
                  sizes="(min-width: 1280px) 520px, 460px"
                />
              </div>
              <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[#7B6253] block mb-0.5 font-bold">
                Acesso Rápido
              </span>
              <h2 className="font-heading text-2xl xl:text-3xl font-bold text-[#1A1A1A]">
                Canais de Atendimento
              </h2>
              <p className="font-body text-xs text-gray-500 mt-0.5">
                Escolha o canal desejado para se comunicar diretamente conosco.
              </p>
            </div>

            <div className="space-y-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-3 xl:p-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#7B6253] text-white border-[#7B6253] hover:bg-[#665043] shadow-sm hover:shadow-md"
                    : "bg-[#FFFFFF] text-[#1A1A1A] border-[#7B6253]/25 hover:border-[#7B6253] shadow-2xs hover:shadow-xs"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-white/15 text-white" : "bg-[#F7F4F0] text-[#7B6253]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-sm font-bold block leading-snug">
                          {item.title}
                        </span>
                        <span
                          className={`font-body text-[0.6875rem] block ${
                            item.highlight ? "text-white/85" : "text-gray-500"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-white/85" : "text-[#7B6253]"
                      }`}
                    />
                  </>
                );

                return isInternal ? (
                  <Link key={item.id} href={item.href} className={buttonClasses}>
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl border border-[#7B6253]/25 bg-[#F7F4F0]">
              <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-heading text-[#7B6253] font-bold mb-1.5">
                <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Especialidades Jurídicas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[0.6875rem] font-body bg-white text-gray-700 border border-[#7B6253]/20"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center text-[0.6875rem] font-body text-gray-500 pt-2 border-t border-gray-200">
            {OFFICE_INFO.address}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (Bio Instagram Otimizada - Padrão C08) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between min-h-[100dvh] w-full px-5 py-6 overflow-y-auto bg-[#FFFFFF]">
        {/* Fundo Geométrico Sofisticado com Linhas e Formas nas Cores da Marca (#7B6253 / #D4AF37) */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          {/* 1. Padrão Geométrico Repetido com Linhas Cruzadas e Losangos na Cor Primária */}
          <svg
            className="absolute inset-0 w-full h-full opacity-25"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="sonaly-mobile-geom-pattern"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                {/* Linhas de contorno sutil do módulo */}
                <path
                  d="M0 0h80v80H0z"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  strokeOpacity="0.4"
                />
                {/* Linhas diagonais se cruzando de canto a canto */}
                <path
                  d="M0 0l80 80M80 0L0 80"
                  fill="none"
                  stroke="#7B6253"
                  strokeWidth="0.6"
                  strokeOpacity="0.5"
                />
                {/* Losango geométrico central sobreposto */}
                <path
                  d="M40 0l40 40-40 40-40-40z"
                  fill="none"
                  stroke="#7B6253"
                  strokeWidth="0.8"
                  strokeOpacity="0.7"
                />
                {/* Segundo losango interno menor para dar efeito de profundidade */}
                <path
                  d="M40 14l26 26-26 26-26-26z"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  strokeOpacity="0.5"
                />
                {/* Marcadores de nós elegantes nos vértices */}
                <circle cx="40" cy="40" r="2" fill="#7B6253" fillOpacity="0.8" />
                <circle cx="0" cy="0" r="1.5" fill="#D4AF37" fillOpacity="0.7" />
                <circle cx="80" cy="0" r="1.5" fill="#D4AF37" fillOpacity="0.7" />
                <circle cx="0" cy="80" r="1.5" fill="#D4AF37" fillOpacity="0.7" />
                <circle cx="80" cy="80" r="1.5" fill="#D4AF37" fillOpacity="0.7" />
                <circle cx="40" cy="0" r="1.2" fill="#7B6253" fillOpacity="0.7" />
                <circle cx="40" cy="80" r="1.2" fill="#7B6253" fillOpacity="0.7" />
                <circle cx="0" cy="40" r="1.2" fill="#7B6253" fillOpacity="0.7" />
                <circle cx="80" cy="40" r="1.2" fill="#7B6253" fillOpacity="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sonaly-mobile-geom-pattern)" />
          </svg>

          {/* 2. Linhas Dinâmicas Vetoriais Maiores se Sobrepondo e Passando pelo Fundo */}
          <svg
            className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="streamLine1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7B6253" stopOpacity="0.1" />
                <stop offset="40%" stopColor="#7B6253" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7B6253" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="streamLine2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#7B6253" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Linha mestra diagonal que passa cortando de ponta a ponta */}
            <line x1="-50" y1="120" x2="450" y2="620" stroke="url(#streamLine1)" strokeWidth="1.5" />
            <line x1="-30" y1="100" x2="470" y2="600" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="6 4" strokeOpacity="0.5" />

            {/* Linha que cruza em ângulo oposto, sobrepondo a primeira */}
            <line x1="450" y1="150" x2="-50" y2="650" stroke="url(#streamLine2)" strokeWidth="1.5" />
            <line x1="470" y1="170" x2="-30" y2="670" stroke="#7B6253" strokeWidth="0.75" strokeDasharray="4 4" strokeOpacity="0.5" />

            {/* Linha de passagem horizontal suave no terço inferior */}
            <line x1="-20" y1="460" x2="420" y2="460" stroke="url(#streamLine1)" strokeWidth="1" strokeOpacity="0.3" />

            {/* Losangos grandes elegantes nos eixos centrais */}
            <rect
              x="200"
              y="180"
              width="100"
              height="100"
              transform="translate(-50, -50) rotate(45 200 180)"
              fill="none"
              stroke="#7B6253"
              strokeWidth="0.75"
              strokeOpacity="0.3"
            />
            <rect
              x="200"
              y="600"
              width="80"
              height="80"
              transform="translate(-40, -40) rotate(45 200 600)"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.75"
              strokeOpacity="0.25"
            />
          </svg>

          {/* 3. Gradiente Suave de Iluminação Central em Tom Dourado / Café */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 right-0 w-64 h-64 bg-[#7B6253]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Cabeçalho Mobile com a Logo em destaque (o dobro do tamanho) */}
        <div className="relative z-10 flex flex-col items-center text-center pt-5 pb-2">
          <div className="relative w-[92vw] max-w-[380px] h-36 sm:h-40 mb-3">
            <Image
              src="/logo_semfundo_escritabranca_paramodoescuro.png"
              alt={OFFICE_INFO.name}
              fill
              priority
              className="object-contain object-center drop-shadow-xs"
              sizes="(max-width: 768px) 380px, 320px"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4AF37]/50 bg-[#F7F4F0]/90 backdrop-blur-xs text-[0.6875rem] font-heading text-[#7B6253] font-bold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{LAWYER_PROFILE.name} • Advocacia Especializada</span>
          </div>
        </div>

        {/* Lista de Botões Rápidos */}
        <div className="relative z-10 w-full max-w-sm mx-auto space-y-2.5 my-auto py-2">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            const isInternal = item.href.startsWith("/");
            const buttonClasses = `w-full py-2.5 px-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 border backdrop-blur-xs ${
              item.highlight
                ? "bg-[#7B6253] text-white border-[#7B6253] shadow-sm hover:bg-[#665043]"
                : "bg-white/95 text-[#1A1A1A] border-[#7B6253]/25 shadow-2xs hover:border-[#7B6253]"
            }`;

            const content = (
              <>
                <div className="flex items-center gap-3 text-left">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-white/20 text-white" : "bg-[#F7F4F0] text-[#7B6253]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-heading text-xs font-bold block leading-tight">
                      {item.title}
                    </span>
                    <span
                      className={`font-body text-[0.5625rem] block leading-tight ${
                        item.highlight ? "text-white/85" : "text-gray-500"
                      }`}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
                    item.highlight ? "text-white/85" : "text-[#7B6253]"
                  }`}
                />
              </>
            );

            return isInternal ? (
              <Link key={item.id} href={item.href} className={buttonClasses}>
                {content}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                {content}
              </a>
            );
          })}
        </div>

        {/* Rodapé Mobile */}
        <div className="relative z-10 text-center space-y-1.5 pt-3 border-t border-gray-100">
          <div className="w-full max-w-xs mx-auto py-1 px-2 rounded-lg bg-[#F7F4F0]/80 backdrop-blur-xs border border-[#7B6253]/25">
            <span className="font-body text-[0.625rem] text-gray-700 block truncate">
              Penal • Processo Penal • Família • Sucessões • Trabalhista
            </span>
          </div>
          <p className="font-body text-[0.625rem] text-gray-500">
            © {new Date().getFullYear()} {OFFICE_INFO.name} • Curitiba/PR
          </p>
        </div>
      </div>
    </main>
  );
}