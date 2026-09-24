import { useState } from "react";
import { ArrowUpRight, Check, Copy, Gamepad2, Instagram, Mail, MessageCircle, Shield, Sparkles, Swords, Users } from "lucide-react";

const serverIp = "play.darksmp.net";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(serverIp);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const subscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    localStorage.setItem("dark-smp-newsletter-email", email.trim());
    setSubscribed(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080709] text-[#f4f0ea] selection:bg-[#a855f7] selection:text-white">
      <div className="grain" aria-hidden="true" />
      <div className="hero-glow hero-glow-purple" aria-hidden="true" />
      <div className="hero-glow hero-glow-amber" aria-hidden="true" />

      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-3" aria-label="Dark SMP ana sayfa">
          <span className="brand-mark"><Swords size={19} strokeWidth={2.2} /></span>
          <span className="font-display text-lg font-bold tracking-[0.12em]">DARK<span className="text-[#b96bff]">SMP</span></span>
        </a>
        <div className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45 sm:flex">
          <a href="#dunya" className="transition hover:text-white">Dünya</a>
          <a href="#topluluk" className="transition hover:text-white">Topluluk</a>
          <a href="#durum" className="transition hover:text-white">Durum</a>
          <a href="#bulten" className="transition hover:text-white">Bülten</a>
        </div>
        <button onClick={copyIp} className="ip-pill" type="button">
          <span className="status-dot" />
          <span className="hidden sm:inline">{serverIp}</span>
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:pb-28 lg:pt-0">
        <div className="hero-art" aria-hidden="true" />
        <div className="max-w-3xl">
          <div className="reveal mb-7 inline-flex items-center gap-2 rounded-full border border-[#b96bff]/25 bg-[#b96bff]/[0.07] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9a8ff]">
            <Sparkles size={13} /> Yeni bir dünya doğuyor
          </div>
          <h1 className="reveal reveal-delay-1 font-display text-[clamp(4.7rem,12vw,9.8rem)] font-black uppercase leading-[.82] tracking-[-.075em] text-white">
            Karanlığa<br /><span className="text-gradient">Hazır Ol.</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-lg text-base leading-7 text-white/55 sm:text-lg">
            Sınırların olmadığı, ittifakların kırılgan ve her gecenin yeni bir hikâye olduğu survival deneyimi.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="#durum" className="primary-cta">
              <span>Yakında Açılıyor</span><ArrowUpRight size={17} />
            </a>
            <button onClick={copyIp} className="secondary-cta" type="button">
              {copied ? <Check size={16} /> : <Copy size={16} />} IP adresini kopyala
            </button>
          </div>
        </div>

        <div className="relative hidden min-h-[460px] lg:block" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="floating-rune rune-one">✦</div>
          <div className="floating-rune rune-two">+</div>
          <div className="hero-emblem"><Swords size={74} strokeWidth={1.1} /></div>
          <div className="vertical-label">EST. 2026 / DARK SMP</div>
        </div>
      </section>

      <section id="dunya" className="relative z-10 border-t border-white/[0.08] bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-24">
          <div>
            <p className="eyebrow">01 / Sunucu Manifestosu</p>
            <h2 className="mt-4 max-w-md font-display text-4xl font-bold uppercase leading-none tracking-[-.04em] sm:text-5xl">Sadece güçlüler<br /><span className="text-[#b96bff]">hatırlar.</span></h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Feature icon={<Swords />} title="Acımasız PvP" text="Güvenin bedeli var. Her karşılaşma gerçek bir seçim." />
            <Feature icon={<Users />} title="Canlı Evren" text="Kendi hikâyeni yaz, topluluğun bir parçası ol." />
            <Feature icon={<Shield />} title="Adil Oyun" text="Temiz ekonomi, dengeli mekanikler, sıfır pay-to-win." />
          </div>
        </div>
      </section>

      <section id="durum" className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="status-card flex flex-col justify-between gap-8 p-7 sm:p-10 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow text-[#d9a8ff]">02 / Sistem Durumu</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-[-.04em] sm:text-5xl">Kapılar mühürlü.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/50">Hazırlıklar son hız devam ediyor. Açılış tarihi ve özel beta duyuruları için topluluğa katıl.</p>
          </div>
          <div className="min-w-[210px] border-l border-white/10 pl-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#b9ffcf]"><span className="status-dot status-dot-green" /> Sistem çevrimdışı</div>
            <div className="mt-5 font-mono text-3xl tracking-[.15em] text-white/90">TBA</div>
            <div className="mt-2 text-[10px] uppercase tracking-[.2em] text-white/35">Açılış tarihi</div>
          </div>
        </div>
      </section>

      <section id="bulten" className="relative z-10 border-t border-white/[0.08] bg-[#0d0b10]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-14 lg:flex-row lg:items-center lg:px-10 lg:py-18">
          <div className="flex items-start gap-4">
            <div className="feature-icon mt-1"><Mail size={22} strokeWidth={1.5} /></div>
            <div>
              <p className="eyebrow text-[#d9a8ff]">03 / İlk haberdar sen ol</p>
              <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-[-.03em] sm:text-3xl">Karanlık çöktüğünde haberin olsun.</h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-white/45">Açılış, beta daveti ve önemli sunucu güncellemelerini e-posta kutuna bırakalım.</p>
            </div>
          </div>
          <form onSubmit={subscribe} className="newsletter-form" noValidate>
            <label className="sr-only" htmlFor="newsletter-email">E-posta adresin</label>
            <input id="newsletter-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="senin@emailin.com" required aria-describedby="newsletter-note" />
            <button type="submit" className="primary-cta">{subscribed ? <><Check size={16} /> Kaydın alındı</> : <>Beni haberdar et <ArrowUpRight size={16} /></>}</button>
          </form>
        </div>
        <p id="newsletter-note" className="mx-auto max-w-7xl px-6 pb-8 text-[10px] uppercase tracking-[.14em] text-white/25 lg:px-10">Spam yok. Sadece önemli duyurular.</p>
      </section>

      <footer id="topluluk" className="relative z-10 border-t border-white/[0.08] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-xs text-white/35 sm:flex-row sm:items-center">
          <span className="font-display font-bold uppercase tracking-[0.2em] text-white/70">Dark SMP © 2026</span>
          <div className="flex items-center gap-5"><span>Topluluğa katıl</span><a href="#top" aria-label="Discord" className="social-link"><MessageCircle size={15} /></a><a href="#top" aria-label="Instagram" className="social-link"><Instagram size={15} /></a><a href="#top" aria-label="Sunucu" className="social-link"><Gamepad2 size={15} /></a></div>
        </div>
      </footer>
    </main>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <article className="feature-card"><div className="feature-icon">{icon}</div><h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide">{title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{text}</p></article>;
}
