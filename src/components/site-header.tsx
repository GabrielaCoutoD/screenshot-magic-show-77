import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para empresas", href: "#para-empresas" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md py-3"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-display text-2xl tracking-[0.28em] text-primary">RAIZ</span>
          <span className="mt-1 text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground">
            Corporate Offsites
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-foreground/75 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden rounded-full bg-primary px-6 py-3 text-xs font-medium tracking-[0.12em] uppercase text-primary-foreground shadow-soft transition-all hover:bg-primary-soft sm:inline-flex"
          >
            Planeje sua experiência
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2.5 text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-sm text-foreground/80 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-primary px-6 py-3.5 text-center text-xs font-medium tracking-[0.12em] uppercase text-primary-foreground"
            >
              Planeje sua experiência
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
