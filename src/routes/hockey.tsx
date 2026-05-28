import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Users, Calendar, MessageSquare, MapPin, Bell, Eye, ShieldCheck, ClipboardCheck, Clock, Shield, Activity } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/sport-hockey.jpg";

export const Route = createFileRoute("/hockey")({
  head: () => ({
    meta: [
      { title: "4SPORT for Hockey — Tournaments, training and fixtures, coordinated" },
      { name: "description", content: "Run hockey tournaments, training schedules and fixture communication without the admin overhead." },
      { property: "og:title", content: "4SPORT for Hockey" },
      { property: "og:description", content: "Tournament-grade coordination for school and club hockey." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Hockey",
        eyebrow: "4SPORT for Hockey",
        title: "Tournament-grade coordination.",
        subtitle:
          "From weekly training to multi-day tournaments — fixtures, squads, umpires and parent communication, all in one place.",
        primaryCta: "Book a hockey demo",
        secondaryCta: "How it works",
        watermark,
        focusLine: "Every pool game, every umpire, every result — tracked. Hockey programs focus on the game, not the admin around it.",
        video: {
          heading: "See the hockey flow in action",
          description: "A short walkthrough will show how hockey programs coordinate tournaments, training and fixture visibility.",
        },
        pillars: [
          { icon: Eye, title: "Tournament visibility", body: "Pools, fixtures, results and standings — visible to everyone who needs them." },
          { icon: ShieldCheck, title: "Safe & accountable", body: "Player documents, medical and consent travel with the squad." },
          { icon: ClipboardCheck, title: "Training tracked", body: "Attendance, intensity and load logged across the season." },
        ],
        pains: [
          { icon: Trophy, title: "Tournament chaos", body: "Pool stages, fixtures, results and standings, coordinated in one place." },
          { icon: Calendar, title: "Training clashes", body: "No more double-booked astro slots or missed sessions." },
          { icon: MessageSquare, title: "Comm overload", body: "Replace scattered WhatsApps with one clean hockey feed." },
          { icon: Users, title: "Squad uncertainty", body: "Who's in which team, on which day, never in doubt." },
          { icon: MapPin, title: "Venue confusion", body: "Astro, away grounds and tournament venues — always clear." },
          { icon: Bell, title: "Weather call-offs", body: "Cancellations and reschedules reach the whole squad instantly." },
        ],
        steps: [
          { title: "Build the season", body: "Fixtures, training and tournaments laid out in one calendar." },
          { title: "Coordinate the squad", body: "Players, parents, umpires and coaches kept in sync." },
          { title: "Track the results", body: "Match outcomes, attendance and standings — logged automatically." },
        ],
        features: [
          { icon: Calendar, title: "Season planner", body: "Lay out training, fixtures and tournaments in one view." },
          { icon: Trophy, title: "Tournament mode", body: "Pools, standings and live results for festivals and away tours." },
          { icon: Users, title: "Squad management", body: "U14A to 1st team — squads, captains and rotations." },
          { icon: MessageSquare, title: "Hockey broadcasts", body: "One message to the right squad, every time." },
          { icon: Shield, title: "Documents & consent", body: "Stored once, attached to every fixture and tour." },
          { icon: Activity, title: "Performance log", body: "Goals, attendance and progress across the season." },
        ],
      }}
    />
  ),
});
