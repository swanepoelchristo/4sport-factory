import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SALES_HUB_BASE_URL = import.meta.env.VITE_SALES_HUB_URL || "https://sales.4sport.co.za";

function inferOrgType(persona: string) {
  const value = persona.toLowerCase();
  if (value.includes("school")) return "School";
  if (value.includes("club")) return "Club";
  if (value.includes("academy")) return "Academy";
  return "Other";
}

export function MarketingEnquiryForm({ persona }: { persona: string }) {
  const [orgName, setOrgName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError("");

    try {
      const params = new URLSearchParams(window.location.search);
      const response = await fetch(`${SALES_HUB_BASE_URL}/api/marketing-lead`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          org_name: orgName,
          org_type: inferOrgType(persona),
          contact_person: contactPerson,
          email,
          phone,
          message,
          contact_role: persona,
          utm_source: params.get("utm_source") || "website",
          utm_medium: params.get("utm_medium") || "organic",
          utm_campaign: params.get("utm_campaign") || "",
          utm_content: params.get("utm_content") || "",
          landing_path: window.location.pathname,
        }),
      });

      if (!response.ok) {
        throw new Error("Enquiry submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("We couldn't send your enquiry right now. Please try again or use the contact details below.");
    } finally {
      setBusy(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl glass p-8 text-left max-w-2xl mx-auto">
        <div className="flex items-center gap-3 text-brand">
          <CheckCircle2 className="h-6 w-6" />
          <h3 className="text-xl font-semibold text-foreground">Enquiry received</h3>
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Thanks. Your details have been sent to the 4SPORT team and a real person can follow up with you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mx-auto grid max-w-3xl gap-4 rounded-2xl glass p-6 text-left sm:grid-cols-2 sm:p-8">
      <label className="block sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Organisation</span>
        <input
          required
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          className="mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition focus:border-brand"
          placeholder={persona.toLowerCase().includes("school") ? "School name" : "Organisation name"}
        />
      </label>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your name</span>
        <input
          required
          value={contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
          className="mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition focus:border-brand"
          placeholder="Name and surname"
          autoComplete="name"
        />
      </label>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</span>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition focus:border-brand"
          placeholder="+27..."
          autoComplete="tel"
        />
      </label>

      <label className="block sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</span>
        <input
          type="email"
          required={!phone.trim()}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition focus:border-brand"
          placeholder="you@example.com"
          autoComplete="email"
        />
      </label>

      <label className="block sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What would you like to see?</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 min-h-28 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition focus:border-brand"
          placeholder="Tell us what you want to solve or what you would like us to show in the demo."
        />
      </label>

      {error && <p className="text-sm text-destructive sm:col-span-2">{error}</p>}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={busy}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-glow transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
        >
          {busy ? "Sending…" : "Send enquiry"}
          {!busy && <ArrowRight className="h-4 w-4" />}
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          Your details are used only to respond to this 4SPORT enquiry.
        </p>
      </div>
    </form>
  );
}
