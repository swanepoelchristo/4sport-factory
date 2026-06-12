import { createFileRoute } from "@tanstack/react-router";
import {
  Bus,
  Users,
  Shield,
  Phone,
  MapPin,
  Bell,
  Eye,
  ShieldCheck,
  ClipboardCheck,
  Calendar,
  MessageSquare,
  Trophy,
} from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/sport-soccer.png";

export const Route = createFileRoute("/soccer")({
  head: () => ({
    meta: [
      { title: "4SPORT for Soccer — Eyes on every fixture, every team" },
      {
        name: "description",
        content:
          "Coordinate soccer fixtures, squads, transport, guardian updates and player safety — without match-day chaos.",
      },
      { property: "og:title", content: "4SPORT for Soccer" },
      {
        property: "og:description",
        content: "Trackability, safety and visibility for school and club soccer.",
      },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Soccer",
        eyebrow: "4SPORT for Soccer",
        title: "Eyes on every fixture.",
        subtitle:
          "Coordinate squads, venues, transport and guardian communication — so coaches can focus on football, not admin.",
        primaryCta: "Book a soccer demo",
        secondaryCta: "How it works",
        watermark,
        focusLine:
          "Every fixture, every player, every venue — accounted for. Coaches focus on soccer, not admin.",
        video: {
          heading: "See the soccer flow in action",
          description:
            "A short walkthrough will show how soccer programs coordinate fixtures, squads, travel and communication.",
        },
        pillars: [
          {
            icon: Eye,
            title: "Fixture visibility",
            body: "See teams, venues, kick-off times and changes in one place.",
          },
          {
            icon: ShieldCheck,
            title: "Player safety",
            body: "Keep medical info, guardian details and consent visible when it matters.",
          },
          {
            icon: ClipboardCheck,
            title: "Match-day accountability",
            body: "Track squads, transport and communication from selection to final whistle.",
          },
        ],
        pains: [
          {
            icon: Calendar,
            title: "Fixture confusion",
            body: "Kick-off times, venues and changes stay visible to everyone.",
          },
          {
            icon: Users,
            title: "Squad uncertainty",
            body: "Know who is selected, available, injured or missing.",
          },
          {
            icon: Phone,
            title: "Guardian communication",
            body: "Replace scattered WhatsApps with clear match-day updates.",
          },
          {
            icon: Bus,
            title: "Transport coordination",
            body: "Track departure times, pickup points and return plans.",
          },
          {
            icon: MapPin,
            title: "Venue visibility",
            body: "Make sure everyone knows where to go and when to be there.",
          },
          {
            icon: Bell,
            title: "Last-minute changes",
            body: "Weather, venue and time changes reach the right people fast.",
          },
        ],
        steps: [
          {
            title: "Set the fixture",
            body: "Lock the match, venue, squad and transport plan in one flow.",
          },
          {
            title: "Share the plan",
            body: "Coaches, players and guardians get one source of truth.",
          },
          {
            title: "Track match day",
            body: "Keep visibility from arrival to final whistle.",
          },
        ],
        features: [
          {
            icon: Calendar,
            title: "Fixture calendar",
            body: "Training, matches and tournaments in one clean schedule.",
          },
          {
            icon: Users,
            title: "Squad management",
            body: "Build and share match-day squads without spreadsheet chaos.",
          },
          {
            icon: MessageSquare,
            title: "Team communication",
            body: "Send clear updates to players, guardians and staff.",
          },
          {
            icon: Shield,
            title: "Medical & consent",
            body: "Player safety information stays tied to the squad.",
          },
          {
            icon: Bus,
            title: "Transport planning",
            body: "Manage travel details, pickup points and return times.",
          },
          {
            icon: Trophy,
            title: "Results visibility",
            body: "Log match outcomes and season progress.",
          },
        ],
      }}
    />
  ),
});
