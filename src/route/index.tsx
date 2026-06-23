import { createFileRoute } from "@tanstack/react-router";
import { Bot, Sparkles, Shield, Zap, MessageSquare, Music, Plus, Github } from "lucide-react";

// ============================================================
// 🔧 CUSTOMIZE YOUR BOT — change these values:
// ============================================================
// 1. BOT_NAME      — the bot's display name
// 2. BOT_TAGLINE   — short pitch under the name
// 3. BOT_AVATAR    — URL to your bot's avatar image (e.g. Discord CDN URL)
// 4. INVITE_URL    — your Discord OAuth2 invite link
// 5. SUPPORT_URL   — your support server invite
// 6. <title> + <meta description> in Route.head() below
// 7. The footer copyright at the bottom of this file
// ============================================================
const BOT_NAME = "Your_bot";
const BOT_TAGLINE = "The all-in-one Discord companion built for modern communities.";
const BOT_AVATAR = "https://cdn.discordapp.com/embed/avatars/0.png"; // replace with your bot's avatar URL
const INVITE_URL = "#"; // replace with your OAuth2 invite link
const SUPPORT_URL = "#"; // replace with your support server invite

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${BOT_NAME} — Discord Bot` },
      { name: "description", content: `${BOT_NAME} is ${BOT_TAGLINE}` },
      { property: "og:title", content: `${BOT_NAME} — Discord Bot` },
      { property: "og:description", content: BOT_TAGLINE },
      { property: "og:image", content: BOT_AVATAR },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)]">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold">{BOT_NAME}</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#commands" className="hover:text-foreground">Commands</a>
          <a href={SUPPORT_URL} className="hover:text-foreground">Support</a>
        </nav>
        <a href={INVITE_URL} className="btn-hero btn-hero-hover text-sm">
          <Plus className="h-4 w-4" /> Add to Discord
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:items-center md:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Now serving 10,000+ servers
          </div>
          <h1 className="text-5xl font-bold leading-[1.05] md:text-6xl">
            Meet{" "}
            <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              {BOT_NAME}
            </span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">{BOT_TAGLINE}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={INVITE_URL} className="btn-hero btn-hero-hover">
              <Plus className="h-5 w-5" /> Invite {BOT_NAME}
            </a>
            <a href={SUPPORT_URL} className="btn-ghost-pill">
              <Github className="h-5 w-5" /> Join Support
            </a>
          </div>
        </div>

        {/* Avatar showcase */}
        <div className="relative mx-auto">
          <div className="absolute inset-0 -z-10 rounded-full bg-[var(--gradient-primary)] blur-3xl opacity-40" />
          <div className="animate-float rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <img
              src={BOT_AVATAR}
              alt={`${BOT_NAME} avatar`}
              className="h-56 w-56 rounded-full border-4 border-primary object-cover shadow-[var(--shadow-glow)] md:h-64 md:w-64"
            />
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_10px_currentColor]" />
                <span className="text-sm text-muted-foreground">Online</span>
              </div>
              <p className="mt-2 font-display text-xl font-semibold">{BOT_NAME}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-center text-4xl font-bold">Everything your server needs</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Powerful, fast and easy to use. Configure once, enjoy forever.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Shield, title: "Moderation", desc: "Auto-mod, anti-spam, warns, mutes and detailed audit logs." },
            { icon: Music, title: "Music & Fun", desc: "High-quality music playback, games, memes and trivia." },
            { icon: Zap, title: "Lightning Fast", desc: "Sub-50ms response times on a globally distributed network." },
            { icon: MessageSquare, title: "Custom Commands", desc: "Build slash commands without writing a single line of code." },
            { icon: Sparkles, title: "AI Powered", desc: "Smart replies, translations, and image generation built in." },
            { icon: Bot, title: "24/7 Uptime", desc: "Always online with redundant infrastructure and live status." },
          ].map((f) => (
            <div key={f.title} className="feature-card">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-secondary">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commands */}
      <section id="commands" className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="text-center text-4xl font-bold">Popular commands</h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          {[
            { cmd: "/help", desc: "Show every command and category" },
            { cmd: "/play <song>", desc: "Play music in your voice channel" },
            { cmd: "/ban @user", desc: "Ban a user from the server" },
            { cmd: "/ask <question>", desc: "Ask the AI assistant anything" },
          ].map((row, i) => (
            <div
              key={row.cmd}
              className={`flex items-center justify-between px-6 py-4 ${i !== 0 ? "border-t border-border" : ""}`}
            >
              <code className="font-mono text-primary">{row.cmd}</code>
              <span className="text-sm text-muted-foreground">{row.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <div className="rounded-3xl border border-border bg-card p-12 shadow-[var(--shadow-card)]">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to level up your server?</h2>
          <p className="mt-3 text-muted-foreground">Add {BOT_NAME} in seconds. No setup required.</p>
          <a href={INVITE_URL} className="btn-hero btn-hero-hover mt-8">
            <Plus className="h-5 w-5" /> Add {BOT_NAME} to Discord
          </a>
        </div>
      </section>

      {/* Footer — 🔧 edit copyright here */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {BOT_NAME}. Not affiliated with Discord Inc.
      </footer>
    </div>
  );
}
