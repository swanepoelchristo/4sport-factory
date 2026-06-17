import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [{ title: "Terms and Conditions — 4SPORT" }],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl font-bold text-foreground">
        Terms and Conditions
      </h1>

      <div className="mt-8 space-y-6 text-muted-foreground leading-7">
        <p>
          These Terms and Conditions apply to the use of the 4SPORT website,
          platform, dashboards, and related services.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Account security</h2>
        <p>
          Users must keep passwords, OTPs, access codes, verification codes, and
          login details private. These may not be shared with any other person.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">
          Screen sharing and remote access
        </h2>
        <p>
          Users may not share their screen, record platform screens, give remote
          access to their device, or allow unauthorised people to view 4SPORT
          information unless clearly approved by an official 4SPORT team member
          for support purposes.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Data protection</h2>
        <p>
          4SPORT works with athlete, guardian, coach, school, club, event,
          consent, and communication information. We use reasonable safeguards,
          including secure cloud database infrastructure, to protect this
          information.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Acceptable use</h2>
        <p>
          Users may not misuse the platform, attempt unauthorised access,
          distribute confidential information, upload harmful content, interfere
          with the service, or use 4SPORT for unlawful purposes.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Payments</h2>
        <p>
          Where paid services are offered, payments must be made through the
          approved payment channels provided by 4SPORT.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p>
          For support, privacy, security, or account questions, contact
          support@4sport.co.za.
        </p>
      </div>
    </main>
  );
}
