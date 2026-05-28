import { createFileRoute } from "@tanstack/react-router";
import { Users, Calendar, MessageSquare, MapPin, Bell, Eye, ShieldCheck, ClipboardCheck, Shield, Trophy, Activity, Phone } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/sport-netball.jpg";

export const Route = createFileRoute("/netball")({
  head: () => ({
    meta: [
      { title: "4SPORT for Netball — Fixtures, teams and guardian communication" },
      { name: "description", content: "Coordinate netball fixtures, team selections and guardian communication in one clean platform." },
      { property: "og:title", content: "4SPORT for Netball" },
      { property: "og:description", content: "Coordination and visibility for school and club netball." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Netball",
        eyebrow: "4SPORT for Netball",
        title: "Every team. Every fixture. Every guardian — informed.",
        subtitle:
          "From U10 to first team — fixtures, squads, umpires and parent updates coordinated with no chase-ups required.",
        primaryCta: "Book a netball demo",
        secondaryCta: "How it works",
        watermark,
        focusLine: "Every fixture, every team, every guardian — connected. Coaches focus on netball, not WhatsApps.",
        video: {
          heading: "See the netball flow in action",
          description: "A short walkthrough will show how netball programs coordinate teams, fixtures and guardian communication.",
        },
        pillars: [
          { icon: Eye, title: "Team visibility", body: "Squads, fixtures and results visible across every age group." },
          { icon: ShieldCheck, title: "Guardian-safe", body: "Consent, medical and pickup info attached to every fixture." },
          { icon: ClipboardCheck, title: "Tracked attendance", body: "Training and match attendance logged across the season." },
        ],
        pains: [
          { icon: Phone, title: "Guardian phone calls", body: "Replace scattered calls with one clear netball feed." },
          { icon: Users, title: "Team coordination", body: "Squads, captains and rotations communicated cleanly." },
          { icon: Calendar, title: "Fixture management", body: "Home, away and league fixtures synced for everyone." },
          { icon: MessageSquare, title: "Comm clarity", body: "One channel for the squad, captains and families." },
          { icon: MapPin, title: "Venue confusion", body: "Courts, away venues and call times always crystal clear." },
          { icon: Bell, title: "Last-minute changes", body: "Reschedules and umpire updates reach everyone instantly." },
        ],
        steps: [
          { title: "Build the season", body: "Fixtures, training and squads laid out across age groups." },
          { title: "Coordinate the team", body: "Players, captains, umpires and parents kept in sync." },
          { title: "Track the season", body: "Attendance, results and progression logged automatically." },
        ],
        features: [
          { icon: Calendar, title: "Fixture planner", body: "League, friendly and tournament fixtures in one view." },
          { icon: Users, title: "Team management", body: "U10 to first team — squads, captains and rotations." },
          { icon: MessageSquare, title: "Netball broadcasts", body: "One clean channel for the squad and families." },
          { icon: Shield, title: "Documents & consent", body: "Stored once, attached to every fixture." },
          { icon: Activity, title: "Attendance & performance", body: "Training and match attendance logged automatically." },
          { icon: Trophy, title: "Results & standings", body: "League positions and match outcomes visible to all." },
        ],
      }}
    />
  ),
});
