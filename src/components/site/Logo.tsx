import logoMark from "@/assets/4sport-logo-mark.png";
import logoCard from "@/assets/4sport-logo.png";

type LogoProps = {
  className?: string;
  /** "mark" = transparent for dark backgrounds (nav/footer). "card" = full white official lockup for hero. */
  variant?: "mark" | "card";
};

export function Logo({ className = "", variant = "mark" }: LogoProps) {
  const src = variant === "card" ? logoCard : logoMark;
  return (
    <img
      src={src}
      alt="4SPORT — eyes on the game"
      width={790}
      height={415}
      className={className}
      draggable={false}
    />
  );
}
