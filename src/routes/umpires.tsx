import { createFileRoute } from "@tanstack/react-router";
import { Flag, DollarSign, Calendar, MapPin, Star, Bell, Shield, CheckCircle2, Eye, ShieldCheck, ClipboardCheck } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/persona-umpires.jpg";

export const Route = createFileRoute("/umpires")({
  head: () => ({
    meta: [
      { title: "4SPORT for Umpires — Accept matches, get paid, zero admin" },
      { name: "description", content: "Manage your availability, accept matches and get paid — without phone calls, spreadsheets or chase-ups." },
      { property: "og:title", content: "4SPORT for Umpires" },
      { property: "og:description", content: "The cleanest way to officiate school sport." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Umpires",
        eyebrow: "4SPORT for Umpires",
        title: "Officiating, without the admin.",
        subtitle:
          "Set your availability, accept matches that fit, and get paid on time. No phone calls. No spreadsheets. No chase-ups.",
        primaryCta: "Sign up as an umpire",
        secondaryCta: "How it works",
        watermark,
        focusLine: "Every match, every venue, every payment — tracked. Officials focus on the game, not the admin around it.",
        video: {
          heading: "See the umpire flow in action",
          description: "A short walkthrough will show how umpires manage availability, accept matches, and track bookings.",
        },
        pillars: [
          { icon: Eye, title: "Clear match visibility", body: "Every fixture you've accepted — with venue, time and contact — in one feed." },
          { icon: ShieldCheck, title: "Verified & accredited", body: "Your levels and certifications stored once, trusted everywhere you officiate." },
          { icon: ClipboardCheck, title: "Tracked payments", body: "Every match logged, every payment trackable — no chasing schools or clubs." },
        ],
        pains: [
          { icon: Bell, title: "Last-minute calls", body: "No more 9pm phone calls trying to fill a Saturday morning slot." },
          { icon: Calendar, title: "Calendar conflicts", body: "Set when you're available — and only get matches that fit." },
          { icon: DollarSign, title: "Slow payments", body: "Tracked, approved and paid through the platform." },
          { icon: MapPin, title: "Where do I go?", body: "Venue, time and contact for every match — at a glance." },
          { icon: Shield, title: "Lost accreditations", body: "Your levels and certifications stored and verified once." },
        ],
        steps: [
          { title: "Set availability", body: "Tell us when you can officiate. We match you with relevant fixtures." },
          { title: "Accept matches", body: "Tap to confirm. The match is locked in your schedule instantly." },
          { title: "Officiate and get paid", body: "Submit the match. Payment flows automatically." },
        ],
        features: [
          { icon: Calendar, title: "Smart availability", body: "Block dates and accept only the matches that work for you." },
          { icon: Flag, title: "Match feed", body: "All open and accepted matches in one clean feed." },
          { icon: DollarSign, title: "Automated payments", body: "Get paid for every match, on time, every time." },
          { icon: Star, title: "Reputation & ratings", body: "Build a verified profile across every school you serve." },
          { icon: Shield, title: "Accreditation locker", body: "Upload once. Reused everywhere." },
          { icon: CheckCircle2, title: "One-tap confirm", body: "No more long email threads to lock in a fixture." },
        ],
      }}
    />
  ),
});
