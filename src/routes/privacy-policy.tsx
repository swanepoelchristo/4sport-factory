import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{ title: "Privacy Policy — 4SPORT" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl font-bold text-foreground">
        Privacy Policy
      </h1>

      <div className="mt-8 space-y-6 text-muted-foreground leading-7">
        <p>
          4SPORT respects your privacy. We collect and process information only
          to provide, improve, protect, and support our sports administration
          services.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">
          Information we may process
        </h2>
        <p>
          This may include account details, contact information, athlete
          information, guardian information, school or club information, team and
          event details, consent records, support messages, and payment-related
          records where applicable.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">
          How we use information
        </h2>
        <p>
          We use information to operate the platform, manage sports
          participation, support users, process payments, improve services,
          communicate important updates, and meet legal or administrative
          requirements.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">
          Protection of information
        </h2>
        <p>
          4SPORT uses reasonable technical and organisational safeguards to
          protect information against unauthorised access, loss, misuse,
          alteration, or disclosure. Our database infrastructure is hosted using
          secure cloud services, including Supabase, with access controls and
          security measures in place.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">
          Sharing of information
        </h2>
        <p>
          We do not sell personal information. Information may be shared only
          where needed to provide the service, process payments, support users,
          comply with the law, or work with approved service providers.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">
          Children and athlete information
        </h2>
        <p>
          Because 4SPORT may process information relating to minor athletes,
          authorised users must treat this information with extra care and use it
          only for proper sporting, school, club, guardian, safety, or
          administrative purposes.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">User security</h2>
        <p>
          Users must keep passwords, OTPs, access codes, and account details
          private. Users may not share screens, allow remote access, or show
          private platform information to unauthorised people unless 4SPORT has
          clearly authorised it for support purposes.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p>
          For privacy questions or data protection requests, contact
          support@4sport.co.za.
        </p>
      </div>
    </main>
  );
}
