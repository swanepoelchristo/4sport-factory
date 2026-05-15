export type ContactKind = "demo" | "sales" | "support";

const RECIPIENTS: Record<ContactKind, string> = {
  demo: "admin@4sport.co.za",
  sales: "sales@4sport.co.za",
  support: "support@4sport.co.za",
};

function template(kind: ContactKind, persona: string) {
  switch (kind) {
    case "demo":
      return {
        subject: `4SPORT demo request - ${persona}`,
        body: `Hi 4SPORT team,

I would like to book a demo for the 4SPORT ${persona} flow.

Name:
School / club:
Role:
Contact number:
Best time to contact me:

Thank you.`,
      };
    case "sales":
      return {
        subject: `4SPORT sales enquiry - ${persona}`,
        body: `Hi 4SPORT sales team,

I would like more information about 4SPORT for ${persona}.

Name:
School / club:
Role:
Contact number:
What I need help with:

Thank you.`,
      };
    case "support":
      return {
        subject: `4SPORT support request - ${persona}`,
        body: `Hi 4SPORT support team,

I need help with the 4SPORT ${persona} flow.

Name:
Email used to register:
Role:
Issue / question:
Contact number:

Thank you.`,
      };
  }
}

export function buildMailto(kind: ContactKind, persona: string) {
  const { subject, body } = template(kind, persona);
  const params = new URLSearchParams({ subject, body }).toString().replace(/\+/g, "%20");
  return `mailto:${RECIPIENTS[kind]}?${params}`;
}

export function ctaKind(label: string): ContactKind {
  const l = label.toLowerCase();
  if (/(demo|schedule)/.test(l)) return "demo";
  if (/(support|help|talk)/.test(l)) return "support";
  return "sales";
}
