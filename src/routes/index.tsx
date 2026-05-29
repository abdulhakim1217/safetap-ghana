import { createFileRoute } from "@tanstack/react-router";
import heroStudent from "@/assets/hero-student.jpg";
import tapCloseup from "@/assets/tap-closeup.jpg";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SafeTap Ghana — Touchless Water for Climate-Resilient Sanitation" },
      {
        name: "description",
        content:
          "Low-cost, touchless smart water dispensing for schools and public facilities across Northern Ghana. Safer hands, healthier children, resilient communities.",
      },
      { property: "og:title", content: "SafeTap Ghana — Touchless Water for Climate-Resilient Sanitation" },
      {
        property: "og:description",
        content:
          "Low-cost, touchless smart water dispensing for schools and public facilities across Northern Ghana.",
      },
      { property: "og:image", content: heroStudent },
      { name: "twitter:image", content: heroStudent },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..900&family=Outfit:wght@300..700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-sand text-ink font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-8 md:px-12 border-b border-ink/5">
        <a href="#top" className="font-display text-2xl font-black tracking-tight text-clay">
          SafeTap.
        </a>
        <div className="hidden md:flex gap-12 text-sm font-medium uppercase tracking-widest">
          <a href="#mission" className="hover:text-clay transition-colors">The Mission</a>
          <a href="#tech" className="hover:text-clay transition-colors">Our Tech</a>
          <a href="#impact" className="hover:text-clay transition-colors">Impact</a>
        </div>
        <a
          href="#support"
          className="px-6 py-2.5 bg-ink text-sand text-xs font-bold uppercase tracking-widest hover:bg-clay transition-all"
        >
          Support Us
        </a>
      </nav>

      <main id="top">
        {/* Hero */}
        <header className="relative px-6 md:px-12 pt-16 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 animate-fade-up">
              <span className="inline-block mb-6 px-3 py-1 border border-ink/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-clay">
                Sanitation for All · Northern Ghana
              </span>
              <h1 className="font-display text-6xl md:text-8xl lg:text-[110px] leading-[0.9] font-black tracking-tighter italic mb-8">
                Dignity in <br />
                <span className="text-clay">every drop.</span>
              </h1>
              <p className="max-w-md text-xl leading-relaxed text-ink/70">
                Bringing touchless, smart water infrastructure to schools and public sanitation facilities across
                Northern Ghana. Reducing disease, preserving water, and restoring health.
              </p>
            </div>
            <div className="lg:col-span-5">
              <img
                src={heroStudent}
                alt="A student smiling beside a SafeTap touchless water dispenser in a Ghanaian schoolyard"
                width={1088}
                height={1344}
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl rotate-2"
              />
            </div>
          </div>
        </header>

        {/* The Tech / Story */}
        <section id="tech" className="bg-ink text-sand py-24 px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <h2 className="font-display text-4xl md:text-5xl italic font-bold leading-tight">
                  &ldquo;Water is a right, but safety is a choice we must build together.&rdquo;
                </h2>
                <div className="space-y-8">
                  <Feature
                    number="01"
                    title="Zero-Touch Protocol"
                    body="Infrared sensors paired with an Arduino-controlled valve dispense water only when hands are detected — stopping the transmission of pathogens where it starts."
                  />
                  <Feature
                    number="02"
                    title="Climate-Conscious Flow"
                    body="Calibrated dispense volumes conserve water during drought periods, while sealed reservoirs stay safe through the floods that contaminate open taps."
                  />
                  <Feature
                    number="03"
                    title="Built for the Field"
                    body="Low-cost, repairable hardware engineered for schools, community toilets, and rural health centers — designed to be maintained by local technicians."
                  />
                </div>
              </div>
              <div className="relative">
                <img
                  src={tapCloseup}
                  alt="Touchless tap dispensing clean water into a child's cupped hands"
                  width={1216}
                  height={800}
                  loading="lazy"
                  className="w-full aspect-video object-cover rounded-sm mb-8"
                />
                <div className="grid grid-cols-2 gap-8">
                  <Stat value="45%" label="Reduction in hand-borne illness" accent="text-clay" />
                  <Stat value="12k+" label="Students served daily" accent="text-savanna" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Human Story */}
        <section id="mission" className="py-32 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-7xl font-black mb-12 tracking-tight">
              Built by the North,{" "}
              <span className="italic text-clay">for the North.</span>
            </h2>
            <p className="text-2xl leading-relaxed font-light mb-16 text-ink/80">
              SafeTap is designed and maintained by local engineers in Tamale. Every installation is built around the
              children, teachers, and families who depend on it — protecting health, dignity, and school attendance in
              communities facing cholera, diarrhea, and typhoid.
            </p>
            <img
              src={community}
              alt="Community gathered around engineers presenting the SafeTap design in a Northern Ghana village"
              width={1920}
              height={832}
              loading="lazy"
              className="w-full aspect-[21/9] object-cover rounded-sm mb-16"
            />
            <div id="impact" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
              <ImpactCard value="24" label="Communities served across Northern Ghana" />
              <ImpactCard value="400k L" label="Clean water dispensed annually" />
              <ImpactCard value="42" label="Schools and health centers equipped" />
            </div>
            <div id="support" className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@safetap.gh"
                className="px-10 py-5 bg-clay text-sand font-bold uppercase tracking-widest text-sm hover:bg-ink transition-colors shadow-xl"
              >
                Partner With Us
              </a>
              <a
                href="#mission"
                className="px-10 py-5 border-2 border-ink text-ink font-bold uppercase tracking-widest text-sm hover:bg-ink hover:text-sand transition-all"
              >
                Read Our 2026 Report
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display text-xl font-bold italic tracking-tight">SafeTap Ghana.</div>
        <p className="text-xs text-ink/40 font-medium uppercase tracking-[0.2em]">
          © 2026 SafeTap Systems · Tamale, Northern Region
        </p>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-clay transition-colors">Instagram</a>
          <a href="#" className="hover:text-clay transition-colors">LinkedIn</a>
          <a href="mailto:hello@safetap.gh" className="hover:text-clay transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}

function Feature({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="flex gap-6 items-start">
      <span className="font-display text-4xl text-savanna shrink-0">{number}</span>
      <div>
        <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{title}</h3>
        <p className="text-sand/60 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function Stat({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div className="p-8 bg-sand/5 border border-white/10">
      <div className={`text-4xl font-display font-bold mb-2 ${accent}`}>{value}</div>
      <p className="text-xs uppercase tracking-widest text-sand/50 font-bold">{label}</p>
    </div>
  );
}

function ImpactCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-8 border border-ink/10 bg-sand">
      <div className="font-display text-5xl font-black text-clay mb-3">{value}</div>
      <p className="text-sm uppercase tracking-widest text-ink/60 font-bold">{label}</p>
    </div>
  );
}
