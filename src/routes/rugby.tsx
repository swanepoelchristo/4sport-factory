import { createFileRoute } from "@tanstack/react-router";
import { Bus, Users, Shield, Phone, MapPin, Bell, Eye, ShieldCheck, ClipboardCheck, Calendar, MessageSquare, Trophy } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/sport-rugby.jpg";

export const Route = createFileRoute("/rugby")({
  head: () => ({
    meta: [
      { title: "4SPORT for Rugby — Eyes on every away game, every player" },
      { name: "description", content: "Coordinate away games, transport, parent communication and player safety — without the Saturday-morning chaos." },
      { property: "og:title", content: "4SPORT for Rugby" },
      { property: "og:description", content: "Trackability, safety and visibility for school and club rugby." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Rugby",
        eyebrow: "4SPORT for Rugby",
        title: "Eyes on every away game.",
        subtitle:
          "Coordinate transport, communicate with parents, track squads and keep every player safe — from kick-off to final whistle, home or away.",
        primaryCta: "Book a rugby demo",
        secondaryCta: "How it works",
        watermark,
        focusLine: "Every away game, every bus, every player — accounted for. Coaches focus on rugby, not admin.",
        video: {
          heading: "See the rugby flow in action",
          description: "A short walkthrough will show how rugby programs coordinate fixtures, transport and squad communication.",
        },
        pillars: [
          { icon: Eye, title: "Live squad visibility", body: "See who's travelling, who's playing and who's missing — in real time." },
          { icon: ShieldCheck, title: "Player safety", body: "Medical info, consent and emergency contacts travel with the squad." },
          { icon: ClipboardCheck, title: "Trip accountability", body: "Transport, accommodation and return times — tracked end-to-end." },
        ],
        pains: [
          { icon: Bus, title: "Away game chaos", body: "Buses, parents, players and kit — coordinated in one place." },
          { icon: Phone, title: "Parent phone calls", body: "Replace 40 WhatsApps with one clear team feed." },
          { icon: Shield, title: "Player safety gaps", body: "Medical, consent and emergency contacts at the coach's fingertips." },
          { icon: Users, title: "Squad confusion", body: "Who's playing, who's travelling, who's injured — never in doubt." },
          { icon: MapPin, title: "Where's the bus?", body: "Live transport and venue updates — no more lost convoys." },
          { icon: Bell, title: "Last-minute changes", body: "Weather call-offs and venue swaps reach everyone, instantly." },
        ],
        steps: [
          { title: "Set the fixture", body: "Lock the match, the venue, the squad and the transport in one flow." },
          { title: "Broadcast the plan", body: "Players, parents and staff get one source of truth." },
          { title: "Track the day", body: "Live status from departure to return — eyes on the game." },
        ],
        features: [
          { icon: Calendar, title: "Fixture command", body: "Every rugby match, training and tour in one calendar." },
          { icon: Bus, title: "Transport tracking", body: "Bus lists, pickup points and ETAs visible to coaches and guardians." },
          { icon: MessageSquare, title: "Team broadcasts", body: "One message to the squad — players, parents and managers." },
          { icon: Shield, title: "Medical & consent", body: "Documents tied to the player, travelling with the squad." },
          { icon: Users, title: "Squad selection", body: "Build, lock and share match-day squads in seconds." },
          { icon: Trophy, title: "Results & visibility", body: "Match outcomes and player stats logged for the season." },
        ],
      }}
    />
  ),
});
