import { createFileRoute } from "@tanstack/react-router";
import { Activity, Users, Calendar, MessageSquare, MapPin, Bell, Eye, ShieldCheck, ClipboardCheck, Shield, Trophy, Clock } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/sport-athletics.jpg";

export const Route = createFileRoute("/athletics")({
  head: () => ({
    meta: [
      { title: "4SPORT for Athletics — Event coordination and athlete visibility" },
      { name: "description", content: "Coordinate athletics meets, track athlete entries and communicate clearly with families." },
      { property: "og:title", content: "4SPORT for Athletics" },
      { property: "og:description", content: "Clarity and visibility for school and club athletics." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Athletics",
        eyebrow: "4SPORT for Athletics",
        title: "Every athlete. Every event. Tracked.",
        subtitle:
          "From inter-house to provincial meets — entries, heats, results and family updates coordinated without the clipboard chaos.",
        primaryCta: "Book an athletics demo",
        secondaryCta: "How it works",
        watermark,
        focusLine: "Every entry, every heat, every result — visible. Coaches and parents focus on the athlete, not the admin.",
        video: {
          heading: "See the athletics flow in action",
          description: "A short walkthrough will show how athletics meets handle entries, communication and results.",
        },
        pillars: [
          { icon: Eye, title: "Athlete visibility", body: "Events, heats and results visible to coaches, athletes and parents." },
          { icon: ShieldCheck, title: "Safe at the meet", body: "Medical info and consent attached to every athlete profile." },
          { icon: ClipboardCheck, title: "Tracked progression", body: "Personal bests and event history logged across the season." },
        ],
        pains: [
          { icon: Activity, title: "Entry confusion", body: "Who's running what, in which age group — never in doubt." },
          { icon: Calendar, title: "Event coordination", body: "Track and field schedules synced for athletes, coaches and parents." },
          { icon: MessageSquare, title: "Comm clarity", body: "One channel for call-times, heats and result updates." },
          { icon: Users, title: "Squad selection", body: "Provincial and inter-school squads picked and shared cleanly." },
          { icon: MapPin, title: "Venue clarity", body: "Stadiums, call rooms and warm-up areas, clearly communicated." },
          { icon: Bell, title: "Schedule shifts", body: "Heat moves and timetable changes reach everyone instantly." },
        ],
        steps: [
          { title: "Open the meet", body: "Set events, age groups and entry windows in one flow." },
          { title: "Coordinate the day", body: "Call times, heats and result updates broadcast to the right people." },
          { title: "Track the season", body: "Personal bests, event history and progression logged automatically." },
        ],
        features: [
          { icon: Calendar, title: "Meet planner", body: "Schedule events, heats and call times in one view." },
          { icon: Users, title: "Athlete entries", body: "Manage individual and team entries by age group." },
          { icon: Activity, title: "Performance log", body: "Personal bests and progression tracked across the season." },
          { icon: MessageSquare, title: "Athletics broadcasts", body: "Clear call-times, heat lists and result updates." },
          { icon: Shield, title: "Medical & consent", body: "Stored once, attached to every meet entry." },
          { icon: Trophy, title: "Results & visibility", body: "Results published cleanly to athletes and families." },
        ],
      }}
    />
  ),
});
