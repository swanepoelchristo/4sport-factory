import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Users, BarChart3, Shield, Bell, FileSpreadsheet, Zap } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/watermark-school.jpg";

export const Route = createFileRoute("/schools")({
  head: () => ({
    meta: [
      { title: "4SPORT for Schools — Run every fixture from one place" },
      { name: "description", content: "Manage fixtures, venues, teams, officials and reporting across your entire school sport program." },
      { property: "og:title", content: "4SPORT for Schools" },
      { property: "og:description", content: "One command center for every team, every fixture, every season." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Schools",
        eyebrow: "4SPORT for Schools",
        title: "Run every fixture, every team, every season — in one place.",
        subtitle:
          "Stop juggling spreadsheets, group chats and printed schedules. 4SPORT gives sports directors a real command center for the whole program.",
        primaryCta: "Book a school demo",
        secondaryCta: "See how it works",
        watermark,
        pains: [
          { icon: Calendar, title: "Fixtures everywhere", body: "One calendar across sports, age groups and venues. No more clashes." },
          { icon: MapPin, title: "Venue chaos", body: "Bookings, capacity and travel logistics handled in a few taps." },
          { icon: Users, title: "Team rosters drift", body: "Squads, coaches and guardians stay in sync as the season changes." },
          { icon: Shield, title: "Officiating gaps", body: "Match umpires automatically — no last-minute scramble on game day." },
          { icon: FileSpreadsheet, title: "Reporting pain", body: "End-of-season reports without copy-pasting across sheets." },
          { icon: Bell, title: "Comms overload", body: "Targeted updates for the right team, parents, and coaches only." },
        ],
        steps: [
          { title: "Set up your program", body: "Import teams, sports, venues and the season calendar in one go." },
          { title: "Schedule and assign", body: "Auto-generate fixtures, lock venues, assign officials and coaches." },
          { title: "Run game day", body: "Live status, comms and results flowing back into the platform automatically." },
        ],
        features: [
          { icon: Calendar, title: "Master fixture calendar", body: "Every match, training and venue booking on one timeline." },
          { icon: MapPin, title: "Venue management", body: "Slot allocation, capacity, and travel built-in." },
          { icon: Users, title: "Team & squad control", body: "Coaches and rosters managed centrally with role-based access." },
          { icon: BarChart3, title: "Live reporting", body: "Participation, results and operations dashboards out of the box." },
          { icon: Shield, title: "Automatic officiating", body: "Match umpires from your accredited pool with one click." },
          { icon: Zap, title: "Instant comms", body: "Push updates to the right team, parents or coaches in seconds." },
        ],
      }}
    />
  ),
});
