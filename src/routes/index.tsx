import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  Leaf,
  Mountain,
  Salad,
  Sparkles,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-retreat.jpg";
import natureImage from "@/assets/nature-calm.jpg";
import spaceImage from "@/assets/retreat-space.jpg";
import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RAIZ — Corporate Offsites" },
      {
        name: "description",
        content:
          "A RAIZ cria corporate offsites de saúde e bem-estar: curadoria de destinos, programação sob medida e acompanhamento de resultados.",
      },
      { property: "og:title", content: "RAIZ — Corporate Offsites" },
      {
        property: "og:description",
        content: "Sua equipe merece uma pausa que transforma.",
      },
    ],
  }),
  component: Index,
});

const experiences = [
  {
    icon: Mountain,
    title: "Natureza",
    text: "Destinos que favorecem descanso, presença e reconexão.",
  },
  { icon: Leaf, title: "Bem-estar", text: "Práticas para cuidar do corpo e da mente." },
  {
    icon: HeartHandshake,
    title: "Conexão",
    text: "Atividades que aproximam pessoas e fortalecem relações.",
  },
  {
    icon: Salad,
    title: "Alimentação",
    text: "Experiências gastronômicas equilibradas e cuidadosamente selecionadas.",
  },
  {
    icon: Users,
    title: "Conteúdo",
    text: "Palestras e workshops alinhados aos objetivos da empresa.",
  },
  {
    icon: Sparkles,
    title: "Experiências",
    text: "Momentos memoráveis que continuam depois do retiro.",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Entendemos os objetivos da empresa e o perfil da equipe.",
  },
  {
    number: "02",
    title: "Curadoria",
    text: "Criamos o destino, a programação e as experiências ideais.",
  },
  { number: "03", title: "Experiência", text: "Cuidamos de toda a jornada dos participantes." },
  {
    number: "04",
    title: "Acompanhamento",
    text: "Medimos a percepção dos participantes e os resultados da experiência.",
  },
];

const benefits = [
  { title: "Mais conexão", text: "Fortaleça os relacionamentos entre os integrantes da equipe." },
  { title: "Mais bem-estar", text: "Crie momentos para recuperar energia e reduzir a sobrecarga." },
  {
    title: "Mais engajamento",
    text: "Valorize as pessoas e fortaleça o sentimento de pertencimento.",
  },
  {
    title: "Mais colaboração",
    text: "Crie experiências que aproximam diferentes áreas e perfis.",
  },
  { title: "Mais propósito", text: "Conecte as pessoas aos valores e objetivos da organização." },
  {
    title: "Mais resultados",
    text: "Equipes cuidadas têm melhores condições para construir resultados sustentáveis.",
  },
];

const indicators = [
  { value: "94%", label: "Satisfação média" },
  { value: "87%", label: "Sentiram maior conexão com a equipe" },
  { value: "91%", label: "Recomendariam a experiência" },
];

const included = [
  "Planejamento personalizado",
  "Curadoria de destinos",
  "Programação sob medida",
  "Experiências de bem-estar",
  "Acompanhamento dos participantes",
  "Avaliação pós-experiência",
];

const testimonials = [
  {
    quote:
      "A experiência proporcionou algo que nossa rotina não permitia: tempo para as pessoas se reconectarem.",
    author: "Mariana",
    role: "Diretora de Pessoas",
  },
  {
    quote:
      "Mais do que um evento, foi um momento de cuidado e integração que nossa equipe realmente precisava.",
    author: "Carlos",
    role: "Diretor de Operações",
  },
  {
    quote:
      "A combinação entre bem-estar, natureza e atividades de integração tornou a experiência muito especial.",
    author: "Fernanda",
    role: "Gerente de RH",
  },
];

const footerLinks = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para empresas", href: "#para-empresas" },
  { label: "Contato", href: "#contato" },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
          <img
            src={heroImage}
            alt="Equipe de profissionais em um retiro cercado por natureza"
            width={1920}
            height={1280}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.3011_0.0175_165.86_/_88%)] via-[oklch(0.3011_0.0175_165.86_/_45%)] to-[oklch(0.3011_0.0175_165.86_/_25%)]" />
          <div className="relative mx-auto w-full max-w-7xl px-6 pt-40 pb-20 lg:px-10 lg:pb-28">
            <div className="max-w-3xl animate-rise">
              <span className="eyebrow text-sand">Pessoas bem cuidadas · Equipes conectadas</span>
              <h1 className="mt-6 text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
                Sua equipe merece uma pausa que transforma.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Retiros corporativos de saúde e bem-estar criados para renovar pessoas, fortalecer
                conexões e transformar a experiência no trabalho.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-medium tracking-[0.14em] uppercase text-primary-foreground shadow-lift transition-all hover:bg-primary-soft"
                >
                  Quero criar um retiro para minha equipe
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#experiencia"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/45 px-8 py-4 text-xs font-medium tracking-[0.14em] uppercase text-primary-foreground transition-all hover:bg-primary-foreground/12"
                >
                  Conheça a experiência
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section id="contato" className="scroll-mt-28 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <LeadForm />
          </div>
        </section>

        {/* O PROBLEMA */}
        <section className="px-6 pb-20 lg:px-10 lg:pb-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="eyebrow text-primary-soft">O contexto</span>
              <h2 className="mt-5 text-3xl leading-[1.15] text-primary sm:text-4xl lg:text-[2.75rem]">
                Quando as pessoas estão bem, o trabalho também muda.
              </h2>
              <p className="mt-7 text-base leading-relaxed text-foreground/75">
                Rotinas intensas, excesso de pressão e pouca oportunidade de desconexão podem afetar
                energia, relacionamento e engajamento das equipes.
              </p>
              <div className="mt-8 border-l-2 border-gold pl-6">
                <p className="text-base leading-relaxed text-foreground/80">
                  A RAIZ cria um espaço para desacelerar, respirar, reconectar e cuidar de quem faz
                  sua empresa acontecer.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-soft">
              <img
                src={natureImage}
                alt="Clareira de floresta com neblina ao amanhecer"
                width={1200}
                height={1408}
                loading="lazy"
                className="h-[26rem] w-full object-cover lg:h-[34rem]"
              />
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section id="experiencia" className="scroll-mt-28 bg-secondary/60 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <span className="eyebrow text-primary-soft">Nossa experiência</span>
              <h2 className="mt-5 text-3xl leading-[1.15] text-primary sm:text-4xl lg:text-[2.75rem]">
                Uma experiência pensada para cada equipe.
              </h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {experiences.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="group rounded-xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-7 text-xl text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="scroll-mt-28 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <span className="eyebrow text-primary-soft">Como funciona</span>
              <h2 className="mt-5 text-3xl leading-[1.15] text-primary sm:text-4xl lg:text-[2.75rem]">
                Não é apenas um retiro. É uma experiência completa.
              </h2>
            </div>
            <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((step) => (
                <li key={step.number} className="border-t border-sand pt-7">
                  <span className="font-display text-5xl text-primary lg:text-6xl">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section id="beneficios" className="scroll-mt-28 bg-secondary/60 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <span className="eyebrow text-primary-soft">Benefícios</span>
              <h2 className="mt-5 text-3xl leading-[1.15] text-primary sm:text-4xl lg:text-[2.75rem]">
                Investir em pessoas também é investir no negócio.
              </h2>
            </div>
            <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title}>
                  <span className="block h-px w-10 bg-gold" />
                  <h3 className="mt-5 text-lg text-primary">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DADOS */}
        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="eyebrow text-primary-soft">Resultados</span>
              <h2 className="mt-5 text-3xl leading-[1.15] text-primary sm:text-4xl lg:text-[2.75rem]">
                Bem-estar que também gera dados.
              </h2>
              <p className="mt-7 text-base leading-relaxed text-foreground/75">
                Cada experiência gera informações que ajudam sua empresa a entender o que funciona,
                acompanhar a participação e planejar novas ações de bem-estar.
              </p>
            </div>
            <div className="mt-14 grid divide-sand border-y border-sand sm:grid-cols-3 sm:divide-x">
              {indicators.map((indicator) => (
                <div key={indicator.value} className="px-2 py-10 sm:px-8">
                  <p className="font-display text-5xl text-primary lg:text-6xl">{indicator.value}</p>
                  <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                    {indicator.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Resultados ilustrativos para demonstração da experiência.
            </p>
          </div>
        </section>

        {/* PARA EMPRESAS */}
        <section id="para-empresas" className="scroll-mt-28 px-6 pb-20 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-card shadow-soft">
            <div className="grid lg:grid-cols-2">
              <img
                src={spaceImage}
                alt="Espaço de retiro com arquitetura biofílica integrada à floresta"
                width={1600}
                height={1008}
                loading="lazy"
                className="h-72 w-full object-cover lg:h-full"
              />
              <div className="p-9 sm:p-12 lg:p-16">
                <span className="eyebrow text-primary-soft">Para empresas</span>
                <h2 className="mt-5 text-3xl leading-[1.15] text-primary sm:text-4xl">
                  Sua empresa cuida das pessoas. A RAIZ cuida da experiência.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-foreground/75">
                  Do planejamento ao último momento do retiro, cuidamos dos detalhes para que sua
                  empresa possa se concentrar no que realmente importa: suas pessoas.
                </p>
                <ul className="mt-9 grid gap-3.5 sm:grid-cols-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-medium tracking-[0.14em] uppercase text-primary-foreground shadow-soft transition-all hover:bg-primary-soft"
                >
                  Planeje seu retiro
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="bg-secondary/60 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <span className="eyebrow text-primary-soft">Depoimentos</span>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <figure
                  key={item.author}
                  className="flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-soft"
                >
                  <span className="font-display text-4xl leading-none text-sand">&ldquo;</span>
                  <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-primary">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-7 text-xs tracking-[0.12em] uppercase text-muted-foreground">
                    — {item.author}, {item.role}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Depoimentos fictícios para demonstração do projeto.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-primary px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Leaf className="mx-auto size-6 text-sand" strokeWidth={1.5} />
            <h2 className="mt-7 text-3xl leading-[1.15] text-primary-foreground sm:text-4xl lg:text-[2.75rem]">
              Pronto para criar uma experiência que sua equipe vai lembrar?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80">
              Conte-nos o que sua empresa precisa. A RAIZ cria o caminho.
            </p>
            <a
              href="#contato"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-9 py-4 text-xs font-medium tracking-[0.14em] uppercase text-primary shadow-lift transition-all hover:bg-secondary"
            >
              Quero criar meu retiro
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <span className="font-display text-2xl tracking-[0.28em] text-primary">RAIZ</span>
              <p className="mt-3 text-xs tracking-[0.16em] uppercase text-muted-foreground">
                Corporate Offsites
              </p>
            </div>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="space-y-3 text-sm text-foreground/70">
              <p>
                <a
                  href="mailto:contato@raizbemestar.com.br"
                  className="transition-colors hover:text-primary"
                >
                  contato@raizbemestar.com.br
                </a>
              </p>
              <p>(24) 99999-0000</p>
              <p className="flex gap-5 pt-2">
                <span className="cursor-default">Instagram</span>
                <span className="cursor-default">LinkedIn</span>
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-sand pt-7">
            <p className="text-xs text-muted-foreground">
              © 2026 RAIZ – Retiros Corporativos de Bem-Estar. Projeto demonstrativo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
