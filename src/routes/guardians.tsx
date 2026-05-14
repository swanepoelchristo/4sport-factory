import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Bell, Heart, MessageSquare, Trophy, Shield, Users } from "lucide-react";
import { PersonaPage } from "@/components/site/PersonaPage";
import watermark from "@/assets/persona-guardians.jpg";

export const Route = createFileRoute("/guardians")({
  head: () => ({
    meta: [
      { title: "4SPORT for Guardians — Always know what's on" },
      { name: "description", content: "Fixtures, venues, results and updates for your child's sport — without chasing the coach or the school." },
      { property: "og:title", content: "4SPORT for Guardians" },
      { property: "og:description", content: "Stay connected to your child's sport, calmly." },
      { property: "og:image", content: watermark },
    ],
  }),
  component: () => (
    <PersonaPage
      config={{
        persona: "Guardians",
        eyebrow: "4SPORT for Guardians",
        title: "Know what's on. Where it is. How it ended.",
        subtitle:
          "Without chasing teachers, coaches or group chats. 4SPORT keeps families calmly informed about every fixture, every change, every result.",
        primaryCta: "Connect to your child's team",
        secondaryCta: "What guardians get",
        watermark,
        video: {
          heading: "See the guardian flow in action",
          description: "A short walkthrough will show how guardians follow fixtures, updates, travel details, and child-related information.",
        },
        pains: [
          { icon: Bell, title: "Late notifications", body: "Last-minute changes you only hear about from another parent." },
          { icon: Calendar, title: "Where, when, what?", body: "No more digging through emails to find Saturday's kickoff." },
          { icon: MessageSquare, title: "Group chat overload", body: "Important updates buried in dozens of messages." },
          { icon: MapPin, title: "Travel logistics", body: "Maps, drop-off times, return times — clearly laid out." },
          { icon: Heart, title: "Missed milestones", body: "Match results and your child's moments, recorded." },
        ],
        steps: [
          { title: "Link to your child", body: "Get connected through their school or coach in one tap." },
          { title: "See the schedule", body: "Fixtures, training and venues sync straight to your calendar." },
          { title: "Stay in the loop", body: "Receive only the updates that matter — no group-chat noise." },
        ],
        features: [
          { icon: Calendar, title: "Family calendar", body: "Every child's fixtures and training in one shared view." },
          { icon: MapPin, title: "Venue details", body: "Maps, kickoff times and what to bring — always handy." },
          { icon: Bell, title: "Smart updates", body: "Only the changes that affect your family." },
          { icon: Trophy, title: "Match results", body: "Scores, milestones and a record of the season." },
          { icon: Users, title: "Direct line to coach", body: "Message the coach or school without group-chat noise." },
          { icon: Shield, title: "Safe by default", body: "Verified roles. Your child's info stays protected." },
        ],
      }}
    />
  ),
});
