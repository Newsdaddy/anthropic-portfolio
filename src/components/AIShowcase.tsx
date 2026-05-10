import { FadeIn } from "./FadeIn";
import { ArrowRight, Play } from "lucide-react";

export const AIShowcase = () => {
  // TODO: Replace with actual video URL and post link
  const videoUrl = ""; // YouTube embed URL or direct video URL
  const postLink = ""; // Link to the actual post

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.25}>
        <p className="anthropic-label mb-6">How I Use Claude Code for Business Development</p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="anthropic-card">
          {/* Video Section */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-card-foreground/10 mb-6">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; loop; muted; encrypted-media"
                allowFullScreen
                title="Claude Code Demo"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Play size={48} className="text-card-foreground/30 mx-auto mb-2" />
                  <p className="text-sm text-card-foreground/50">Video coming soon</p>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-card-foreground/70 leading-relaxed mb-5">
            I use Claude Code daily for sales workflows — from building MCP servers for job search automation
            to creating this portfolio. Here's a real demo of how I leverage AI for business development.
          </p>

          {/* CTA */}
          {postLink ? (
            <a
              href={postLink}
              target="_blank"
              rel="noopener noreferrer"
              className="anthropic-btn"
            >
              View original post <ArrowRight size={16} />
            </a>
          ) : (
            <a
              href="mailto:byeongjin.jeong05@gmail.com"
              className="anthropic-btn"
            >
              Let's talk <ArrowRight size={16} />
            </a>
          )}
        </div>
      </FadeIn>
    </section>
  );
};
