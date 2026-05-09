import { FadeIn } from "./FadeIn";
import { ArrowUpRight, Bot, Code2, Sparkles } from "lucide-react";

export const AIShowcase = () => {
  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.25}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Why Anthropic
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#D4A574]/10 via-background to-[#D4A574]/5 border border-[#D4A574]/20 mb-4">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#D4A574]/20 flex items-center justify-center shrink-0">
              <Bot className="text-[#D4A574]" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Active Claude User & Builder</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I use Claude daily for work and personal projects. From building MCP servers
                to automating workflows with Claude Code — I'm not just passionate about AI,
                I'm shipping with it.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://career-snapshot.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-[#D4A574] hover:shadow-lg transition-all duration-300"
            >
              <Code2 size={20} className="text-[#D4A574] shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">This Portfolio</p>
                <p className="text-xs text-muted-foreground">Built with Claude Code</p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-[#D4A574] transition-colors" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-[#D4A574] hover:shadow-lg transition-all duration-300"
            >
              <Sparkles size={20} className="text-[#D4A574] shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">MCP Career Advisor</p>
                <p className="text-xs text-muted-foreground">Custom MCP server for job search</p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-[#D4A574] transition-colors" />
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="p-5 sm:p-6 rounded-xl bg-card border border-border">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="text-foreground font-medium">My bet on Anthropic:</span>{" "}
            After 5 years selling B2B SaaS data products, I see how enterprise buyers
            evaluate AI tools. They need trust, not just capability. Anthropic's focus
            on safety and interpretability isn't just ethical — it's the winning GTM strategy
            for regulated industries and cautious enterprises. I want to help Korean & APAC
            enterprises adopt Claude safely.
          </p>
        </div>
      </FadeIn>
    </section>
  );
};
