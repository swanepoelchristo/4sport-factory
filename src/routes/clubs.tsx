import { createFileRoute } from "@tanstack/react-router";
import { Users, Calendar, Trophy, Shield, BarChart3, MessageSquare, Eye, DollarSign } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/persona-clubs.jpg";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [
      { title: "4SPORT for Clubs — Run your club like a pro program" },
      { name: "description", content: "Coordinate teams, fixtures, officials and members. 4SPORT brings your whole club onto one connected platform." },
      { property: "og:title", content: "4SPORT for Clubs" },
      { property: "og:description", content: "Eyes on the game. Visibility, safety and coordination for your whole club." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Clubs",
        eyebrow: "4SPORT for Clubs",
        title: "Your whole club. One connected platform.",
        subtitle:
          "Stop running your club on WhatsApp, spreadsheets and memory. 4SPORT gives clubs real visibility across teams, fixtures, officials, members and finances — so committees can focus on sport, not admin.",
        primaryCta: "Talk to sales about clubs",
        secondaryCta: "See how clubs use 4SPORT",
        watermark,
        focusLine:
          "Eyes on every team, every fixture, every official. Club leadership focuses on the sport, not on chasing updates.",
        video: {
          heading: "See the club flow in action",
          description: "A short walkthrough will show how clubs coordinate teams, fixtures, officials and member communication in one place.",
        },
        pains: [
          { icon: MessageSquare, title: "Comms chaos", body: "A dozen group chats per team. Nothing in one place. Nothing trackable." },
          { icon: Calendar, title: "Fixture clashes", body: "Teams double-booked, venues missed, officials unconfirmed." },
          { icon: Users, title: "Member drift", body: "No clear view of who is active, who's paid, who's playing." },
          { icon: Shield, title: "Safety gaps", body: "Consents, medical info and accredited officials scattered across files." },
          { icon: BarChart3, title: "No real visibility", body: "Committees can't see what's actually happening across the club week to week." },
          { icon: DollarSign, title: "Admin overhead", body: "Volunteers burning out on coordination instead of running great sport." },
        ],
        steps: [
          { title: "Set up your club", body: "Add teams, coaches, venues and your season calendar in one go." },
          { title: "Coordinate the week", body: "Fixtures, training, officials and member comms flow through one platform." },
          { title: "See the whole picture", body: "Live visibility across every team, every fixture, every member." },
        ],
        pillars: [
          { icon: Eye, title: "Full visibility", body: "One dashboard view of every team, every fixture and every official across your club." },
          { icon: Shield, title: "Safety by default", body: "Accredited officials, verified roles and member info kept properly — not in random chats." },
          { icon: BarChart3, title: "Accountability", body: "Tracked communication, tracked attendance, tracked officiating — the whole club is visible." },
        ],
        features: [
          { icon: Users, title: "Member & team registry", body: "One source of truth for every athlete, coach and team across your club." },
          { icon: Calendar, title: "Club-wide calendar", body: "Every fixture and training across every team on one timeline." },
          { icon: Shield, title: "Officials pool", body: "Match certified umpires to fixtures automatically — no last-minute scrambles." },
          { icon: MessageSquare, title: "Targeted comms", body: "Message a team, an age group, or the whole club without group-chat noise." },
          { icon: Trophy, title: "Season tracking", body: "Results, participation and progress across every team in your club." },
          { icon: BarChart3, title: "Committee reporting", body: "Live overviews for committee meetings — no more end-of-season scramble." },
        ],
      }}
    />
  ),
});
