import { useState, type FormEvent } from "react";
import { Check, Leaf } from "lucide-react";

/**
 * Estrutura dos campos alinhada a um futuro mapeamento de CRM (ex.: Salesforce Lead).
 * As chaves `crmField` documentam o destino previsto de cada campo.
 */
type FieldConfig = {
  name: string;
  label: string;
  crmField: string;
  type: "text" | "email" | "tel" | "select";
  placeholder?: string;
  options?: string[];
  required?: boolean;
  full?: boolean;
};

const fields: FieldConfig[] = [
  {
    name: "fullName",
    label: "Nome completo",
    crmField: "Name",
    type: "text",
    placeholder: "Como podemos te chamar?",
    required: true,
  },
  {
    name: "company",
    label: "Empresa",
    crmField: "Company",
    type: "text",
    placeholder: "Nome da empresa",
    required: true,
  },
  {
    name: "jobTitle",
    label: "Cargo",
    crmField: "Title",
    type: "text",
    placeholder: "Seu cargo",
    required: true,
  },
  {
    name: "email",
    label: "E-mail corporativo",
    crmField: "Email",
    type: "email",
    placeholder: "nome@empresa.com.br",
    required: true,
  },
  {
    name: "phone",
    label: "Telefone / WhatsApp",
    crmField: "Phone",
    type: "tel",
    placeholder: "(00) 00000-0000",
    required: true,
  },
  {
    name: "participants",
    label: "Número aproximado de participantes",
    crmField: "NumberOfParticipants__c",
    type: "select",
    required: true,
    options: ["Até 20", "21 a 50", "51 a 100", "101 a 300", "Mais de 300"],
  },
  {
    name: "goal",
    label: "Qual é o principal objetivo do retiro?",
    crmField: "RetreatGoal__c",
    type: "select",
    required: true,
    options: [
      "Saúde e bem-estar",
      "Integração da equipe",
      "Redução do estresse",
      "Engajamento",
      "Desenvolvimento de liderança",
      "Reconhecimento",
      "Outro",
    ],
  },
  {
    name: "timing",
    label: "Quando pretende realizar?",
    crmField: "ExpectedTimeframe__c",
    type: "select",
    required: true,
    options: ["Próximos 3 meses", "3 a 6 meses", "6 a 12 meses", "Ainda estou planejando"],
  },
  {
    name: "budget",
    label: "Faixa de investimento",
    crmField: "InvestmentRange__c",
    type: "select",
    required: true,
    options: [
      "Até R$ 20 mil",
      "R$ 20 mil a R$ 50 mil",
      "R$ 50 mil a R$ 100 mil",
      "Acima de R$ 100 mil",
      "Ainda não definido",
    ],
  },
];

const inputClass =
  "w-full rounded-md border border-input bg-card px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-primary-soft focus:ring-2 focus:ring-ring/25";

export function LeadForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};

    for (const field of fields) {
      const value = String(data.get(field.name) ?? "").trim();
      if (field.required && !value) {
        next[field.name] = "Campo obrigatório";
      } else if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        next[field.name] = "Informe um e-mail válido";
      } else if (field.type === "tel" && value && value.replace(/\D/g, "").length < 10) {
        next[field.name] = "Informe um telefone válido";
      }
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Payload pronto para envio futuro a um CRM (ex.: Salesforce).
    const payload = Object.fromEntries(
      fields.map((field) => [field.crmField, String(data.get(field.name) ?? "")]),
    );
    console.info("RAIZ lead (demonstração):", payload);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-card p-10 text-center shadow-soft sm:p-14">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
          <Check className="size-6" />
        </span>
        <h3 className="mt-7 text-2xl text-primary sm:text-3xl">Recebemos suas informações!</h3>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Obrigado por entrar em contato com a RAIZ. Em breve, nossa equipe entrará em contato para
          conversar sobre a experiência ideal para sua equipe.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 text-xs tracking-[0.16em] uppercase text-primary underline decoration-gold decoration-1 underline-offset-8"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-border bg-card p-7 shadow-soft sm:p-10 lg:p-12"
    >
      <span className="inline-flex items-center gap-2 text-primary-soft">
        <Leaf className="size-4" />
        <span className="eyebrow">Contato</span>
      </span>
      <h2 className="mt-5 text-3xl leading-[1.15] text-primary sm:text-4xl">
        Vamos criar uma experiência para sua equipe?
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Conte um pouco sobre sua empresa e seus objetivos. Nossa equipe entrará em contato para
        entender o melhor formato para o seu retiro.
      </p>

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={field.full ? "sm:col-span-2" : undefined}>
            <label
              htmlFor={field.name}
              className="mb-2 block text-xs font-medium tracking-[0.08em] uppercase text-foreground/70"
            >
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                defaultValue=""
                className={inputClass}
                aria-invalid={Boolean(errors[field.name])}
              >
                <option value="" disabled>
                  Selecione
                </option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className={inputClass}
                aria-invalid={Boolean(errors[field.name])}
              />
            )}
            {errors[field.name] && (
              <p className="mt-2 text-xs text-destructive">{errors[field.name]}</p>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="mt-9 w-full rounded-full bg-primary px-8 py-4 text-xs font-medium tracking-[0.16em] uppercase text-primary-foreground shadow-soft transition-all hover:bg-primary-soft sm:w-auto"
      >
        Quero conversar com a RAIZ
      </button>
      <p className="mt-5 text-xs text-muted-foreground">
        Projeto demonstrativo — os dados enviados não são armazenados.
      </p>
    </form>
  );
}
