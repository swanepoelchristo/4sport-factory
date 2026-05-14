import { PlayCircle, Upload, Video } from "lucide-react";

export type PersonaVideo = {
  videoUrl?: string;
  videoTitle?: string;
  videoDescription?: string;
};

type Props = {
  persona: string;
  heading?: string;
  description?: string;
  video?: PersonaVideo;
};

export function PersonaVideoSection({ persona, heading, description, video }: Props) {
  const resolvedHeading = heading ?? `See the ${persona.toLowerCase()} flow in action`;
  const resolvedDescription =
    description ??
    `A short walkthrough will show how ${persona.toLowerCase()} use 4SPORT day to day.`;
  const hasVideo = Boolean(video?.videoUrl);

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl mb-10">
        <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">
          Watch it work
        </p>
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
          {resolvedHeading}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {resolvedDescription}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-surface shadow-card">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
        <div className="relative aspect-video w-full">
          {hasVideo ? (
            <video
              src={video!.videoUrl}
              controls
              className="h-full w-full object-cover"
              poster={undefined}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6">
              <div className="h-20 w-20 rounded-2xl bg-brand/15 text-brand flex items-center justify-center ring-1 ring-brand/30 shadow-glow">
                <PlayCircle className="h-10 w-10" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">
                  No demo video added yet.
                </p>
                <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                  This space is reserved for the official {persona.toLowerCase()} walkthrough.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-border/60 px-6 py-5 bg-background/40 backdrop-blur">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Video className="h-4 w-4 text-brand" />
            Video link/upload placeholder — ready for final media.
          </div>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-semibold text-foreground/80 cursor-not-allowed opacity-80"
            aria-disabled
          >
            <Upload className="h-4 w-4" />
            Add demo video
          </button>
        </div>
      </div>
    </section>
  );
}
