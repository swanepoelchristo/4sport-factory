import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Users, Plane, MessageSquare, MapPin, Bell, Eye, ShieldCheck, ClipboardCheck, Shield, Activity, Trophy } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/sport-cricket.jpg";

export const Route = createFileRoute("/cricket")({
  head: () => ({
    meta: [
      { title: "4SPORT for Cricket — Scheduling, squads and tours without the admin" },
      { name: "description", content: "Manage complex cricket fixtures, squad rotations and tour logistics with full visibility." },
      { property: "og:title", content: "4SPORT for Cricket" },
      { property: "og:description", content: "Trackability and coordination for school and club cricket." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Cricket",
        eyebrow: "4SPORT for Cricket",
        title: "From nets to national tours.",
        subtitle:
          "Complex fixtures, squad rotations, travel and parent updates — handled in one clean platform built for the cricket season.",
        primaryCta: "Book a cricket demo",
        secondaryCta: "How it works",
        watermark,
        focusLine: "Every fixture, every squad, every tour — tracked. Coaches focus on cricket, not spreadsheets.",
        video: {
          heading: "See the cricket flow in action",
          description: "A short walkthrough will show how cricket programs handle scheduling, squad coordination and travel.",
        },
        pillars: [
          { icon: Eye, title: "Fixture visibility", body: "Two-day games, T20s, festivals — everyone sees the right format and time." },
          { icon: ShieldCheck, title: "Tour-ready safety", body: "Medical, consent and emergency contacts travel with every squad." },
          { icon: ClipboardCheck, title: "Squad accountability", body: "Selections, rotations and player loads tracked across the season." },
        ],
        pains: [
          { icon: Calendar, title: "Scheduling complexity", body: "Multiple formats, age groups and venues — coordinated in one calendar." },
          { icon: Users, title: "Squad rotation chaos", body: "Selections and rest days managed without endless email threads." },
          { icon: Plane, title: "Tour planning", body: "Travel, accommodation and itineraries in one shared brief." },
          { icon: MessageSquare, title: "Parent comms", body: "Replace forwarded fixture lists with one live source of truth." },
          { icon: MapPin, title: "Venue confusion", body: "Home, away and festival grounds — always crystal clear." },
          { icon: Bell, title: "Rain delays", body: "Reschedules and call-offs reach the whole squad instantly." },
        ],
        steps: [
          { title: "Plan the season", body: "Formats, fixtures and tours laid out across age groups." },
          { title: "Coordinate selection", body: "Squads, captains and travel parties locked in one flow." },
          { title: "Track the season", body: "Results, performance and attendance logged automatically." },
        ],
        features: [
          { icon: Calendar, title: "Multi-format planner", body: "T20, one-day and longer formats in one calendar." },
          { icon: Users, title: "Squad selection", body: "Build XIs, rotations and travel parties in seconds." },
          { icon: Plane, title: "Tour logistics", body: "Itineraries, accommodation and transport shared with the right people." },
          { icon: MessageSquare, title: "Cricket broadcasts", body: "One clear channel for the squad, families and staff." },
          { icon: Shield, title: "Medical & consent", body: "Stored once, attached to every fixture and tour." },
          { icon: Activity, title: "Performance tracking", body: "Runs, wickets and attendance across the season." },
          { icon: Trophy, title: "Results & history", body: "Season stats and milestones logged automatically." },
        ],
      }}
    />
  ),
});
