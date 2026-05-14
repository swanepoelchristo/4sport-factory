import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Calendar, Users, BarChart3, Bell, MapPin, Heart, Zap } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/persona-athletes.jpg";

export const Route = createFileRoute("/athletes")({
  head: () => ({
    meta: [
      { title: "4SPORT for Athletes — Your team, your fixtures, your stats" },
      { name: "description", content: "Know when you play, where to be, who you're playing with — and how you're tracking." },
      { property: "og:title", content: "4SPORT for Athletes" },
      { property: "og:description", content: "Everything for your sport, in your pocket." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Athletes",
        eyebrow: "4SPORT for Athletes",
        title: "Your sport. Your team. Your phone.",
        subtitle:
          "Fixtures, training, results and team chat — all in one app. No more screenshots, group chats or chasing your coach for details.",
        primaryCta: "Join 4SPORT",
        secondaryCta: "See athlete features",
        watermark,
        pains: [
          { icon: Calendar, title: "Where am I playing?", body: "No more digging through messages to find your next match." },
          { icon: Bell, title: "Surprise changes", body: "Get notified the moment a fixture, time or venue changes." },
          { icon: Users, title: "Disconnected team", body: "Stay tight with your squad in one shared space." },
          { icon: BarChart3, title: "No personal record", body: "See your participation, stats and history across seasons." },
          { icon: Heart, title: "Wellness ignored", body: "Track availability and load — easily, without it being weird." },
        ],
        steps: [
          { title: "Join your team", body: "Get added by your coach or school — no friction." },
          { title: "Sync your schedule", body: "Fixtures and training drop into your calendar automatically." },
          { title: "Show up and play", body: "Tap into match updates, results and team comms in real time." },
        ],
        features: [
          { icon: Trophy, title: "Match center", body: "Next match, last result, season stats — all on one screen." },
          { icon: Calendar, title: "Personal calendar", body: "Training and games sync to your phone calendar." },
          { icon: MapPin, title: "Venue & travel info", body: "Maps, kickoff times, what to bring — handled." },
          { icon: Users, title: "Team chat", body: "Talk to teammates and coach without group-chat chaos." },
          { icon: Bell, title: "Smart notifications", body: "Only the alerts that matter to you." },
          { icon: Zap, title: "Built mobile-first", body: "Fast, clean and made for athletes, not admins." },
        ],
      }}
    />
  ),
});
