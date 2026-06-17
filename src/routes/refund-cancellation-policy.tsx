import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund-cancellation-policy")({
  head: () => ({
    meta: [{ title: "Refund and Cancellation Policy — 4SPORT" }],
  }),
  component: RefundCancellationPolicyPage,
});

function RefundCancellationPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl font-bold text-foreground">
        Refund and Cancellation Policy
      </h1>

      <div className="mt-8 space-y-6 text-muted-foreground leading-7">
        <h2 className="text-2xl font-semibold text-foreground">
          30-day money-back guarantee
        </h2>
        <p>
          4SPORT offers a 30-day money-back guarantee on eligible first-time
          subscription purchases. If you are not satisfied within 30 days of your
          initial purchase, you may contact us to request a refund.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Refund requests</h2>
        <p>
          Refund requests must be sent to support@4sport.co.za with your account
          details, payment reference, and reason for the request.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Exclusions</h2>
        <p>
          The 30-day guarantee does not apply to custom development work,
          once-off setup fees, consulting services, third-party costs, or
          services already fully delivered outside a standard subscription unless
          agreed in writing by 4SPORT.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Cancellation</h2>
        <p>
          Customers may cancel their subscription at any time. Cancellation stops
          future billing but does not automatically create a refund unless the
          request qualifies under the 30-day money-back guarantee.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Processing time</h2>
        <p>
          Approved refunds will be processed through the original payment method
          where possible. Bank and payment provider processing times may vary.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">
          Account access after cancellation
        </h2>
        <p>
          After cancellation, access to paid features may continue until the end
          of the current paid period unless otherwise agreed. 4SPORT may limit or
          remove access where required for security, non-payment, misuse, or
          legal reasons.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p>
          For refund or cancellation questions, contact support@4sport.co.za.
        </p>
      </div>
    </main>
  );
}
