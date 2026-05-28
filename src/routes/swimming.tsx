import { createFileRoute } from "@tanstack/react-router";
import { Waves, Users, Calendar, MessageSquare, MapPin, Bell, Eye, ShieldCheck, ClipboardCheck, Shield, Trophy, Activity, Bus, Clock } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/sport-swimming.jpg";

export const Route = createFileRoute("/swimming")({
  head: () => ({
    meta: [
      { title: "4SPORT for Swimming — Galas, entries and guardian coordination" },
      { name: "description", content: "Run school galas, coordinate entries and keep guardians informed — with full event-day visibility." },
      { property: "og:title", content: "4SPORT for Swimming" },
      { property: "og:description", content: "Event-day clarity for school and club swimming." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Swimming",
        eyebrow: "4SPORT for Swimming",
        title: "Gala day, without the chaos.",
        subtitle:
          "Entries, heats, transport, timing and guardian updates — coordinated in one place from training pool to provincial gala.",
        primaryCta: "Book a swimming demo",
        secondaryCta: "How it works",
        watermark,
        focusLine: "Every swimmer, every heat, every gala — tracked. Coaches and guardians focus on the swim, not the spreadsheet.",
        video: {
          heading: "See the swimming flow in action",
          description: "A short walkthrough will show how swimming programs handle galas, entries, transport and guardian updates.",
        },
        pillars: [
          { icon: Eye, title: "Event-day visibility", body: "Heats, lanes and call times visible to swimmers, coaches and guardians." },
          { icon: ShieldCheck, title: "Safe at the pool", body: "Medical, consent and emergency contacts attached to every swimmer." },
          { icon: ClipboardCheck, title: "Tracked times", body: "Personal bests and event history logged across the season." },
        ],
        pains: [
          { icon: Waves, title: "Gala organization", body: "Heats, lanes and call times — coordinated in one clear flow." },
          { icon: Clock, title: "Event timing visibility", body: "Real-time event progress so swimmers and parents are never lost." },
          { icon: Users, title: "Athlete tracking", body: "Who's swimming what, in which event — always crystal clear." },
          { icon: MessageSquare, title: "Guardian coordination", body: "One channel for entries, call-times and result updates." },
          { icon: Bus, title: "Transport & safety", body: "Travel parties, pickup points and ETAs visible to families." },
          { icon: Bell, title: "Last-minute heat changes", body: "Lane swaps and timetable shifts reach everyone instantly." },
        ],
        steps: [
          { title: "Open the gala", body: "Set events, age groups and entries in one flow." },
          { title: "Coordinate the day", body: "Heats, call times and transport broadcast to the right people." },
          { title: "Track the season", body: "Personal bests, attendance and progression logged automatically." },
        ],
        features: [
          { icon: Calendar, title: "Gala planner", body: "Schedule events, heats and call times in one view." },
          { icon: Users, title: "Swimmer entries", body: "Manage individual and relay entries across age groups." },
          { icon: Activity, title: "Times & progression", body: "Personal bests and event history tracked across the season." },
          { icon: MessageSquare, title: "Swimming broadcasts", body: "Clear call-times, heat lists and result updates." },
          { icon: Bus, title: "Transport coordination", body: "Travel parties and pickup points visible to families." },
          { icon: Shield, title: "Medical & consent", body: "Stored once, attached to every gala entry." },
          { icon: Trophy, title: "Results & visibility", body: "Heat results published cleanly to swimmers and families." },
        ],
      }}
    />
  ),
});
