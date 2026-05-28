import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, Users, MessageSquare, Calendar, BarChart3, Bell, Target, Zap, Eye, ShieldCheck, ClipboardCheck } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/persona-coaches.jpg";

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title: "4SPORT for Coaches — Spend more time coaching, less on admin" },
      { name: "description", content: "Plan sessions, manage squads and message players in seconds. 4SPORT gives coaches a clean toolkit for the whole season." },
      { property: "og:title", content: "4SPORT for Coaches" },
      { property: "og:description", content: "Sessions, squads, comms and stats — without the spreadsheets." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Coaches",
        eyebrow: "4SPORT for Coaches",
        title: "More time on the pitch. Less on the laptop.",
        subtitle:
          "Plan training, pick squads, message players and track performance — all from a single, fast app made for the way coaches actually work.",
        primaryCta: "Get started as a coach",
        secondaryCta: "See coach features",
        watermark,
        focusLine: "Squads, fixtures, comms and notes — all tracked for you. So coaches can focus on coaching, not admin.",
        video: {
          heading: "See the coach flow in action",
          description: "A short walkthrough will show how coaches build squads, manage fixtures, send updates, and track match-day work.",
        },
        pillars: [
          { icon: Eye, title: "Visibility across your squad", body: "Availability, attendance and development — visible at a glance, not buried in messages." },
          { icon: ShieldCheck, title: "Safe communication", body: "Reach players and parents through verified channels, not personal phone numbers." },
          { icon: ClipboardCheck, title: "Everything tracked", body: "Session plans, notes and squad decisions logged automatically for the season." },
        ],
        pains: [
          { icon: MessageSquare, title: "Lost in group chats", body: "Updates buried in noise. No one knows the latest plan." },
          { icon: ClipboardList, title: "Manual squad lists", body: "Copy-pasting names every week instead of coaching." },
          { icon: Calendar, title: "Schedule confusion", body: "Players showing up at the wrong venue, wrong time." },
          { icon: BarChart3, title: "No visibility", body: "Hard to see who's developing and who needs attention." },
          { icon: Bell, title: "Late changes", body: "Last-minute fixture changes you find out about too late." },
        ],
        steps: [
          { title: "Pick your squads", body: "Players linked from the school. Update rosters in seconds." },
          { title: "Plan your week", body: "Sessions, fixtures and travel laid out clearly for everyone." },
          { title: "Coach the game", body: "Live attendance, performance notes and post-match updates from your phone." },
        ],
        features: [
          { icon: ClipboardList, title: "Session planner", body: "Drag-and-drop training plans you can reuse week to week." },
          { icon: Users, title: "Squad selector", body: "Pick teams in seconds with availability built in." },
          { icon: MessageSquare, title: "Direct comms", body: "Message a player, a parent, or the whole squad instantly." },
          { icon: Target, title: "Player tracking", body: "Notes, ratings and development tags per player." },
          { icon: Calendar, title: "Smart calendar", body: "Your full week — fixtures, training, travel — at a glance." },
          { icon: Zap, title: "Mobile-first", body: "Built for the sideline, not the office desk." },
        ],
      }}
    />
  ),
});
