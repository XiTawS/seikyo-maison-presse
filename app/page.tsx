"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useCMS } from "@/components/cms/CMSProvider";
import EditableText from "@/components/cms/EditableText";
import EditableImage from "@/components/cms/EditableImage";
import EditableButton from "@/components/cms/EditableButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Pen, BookOpen, Newspaper, Gamepad2, PenTool, Camera, Gift, Printer, Package, CreditCard, Stamp, IdCard } from "lucide-react";

/* ─── Fade ─── */
function Fade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   HERO — Style journal / éditorial
   Grande typo centrée sur fond papier, pas d'image
   ═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-[var(--color-bg-paper)] relative overflow-hidden">
      {/* Lignes de journal subtiles */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, var(--color-text) 0px, var(--color-text) 1px, transparent 1px, transparent 28px)",
      }} />

      <div className="relative text-center px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[var(--color-red)]" />
            <EditableText contentKey="home.hero.label" defaultValue="Saint-Donat-sur-l'Herbasse" tag="p"
              className="text-[var(--color-red)] text-xs tracking-[0.4em] uppercase" />
            <div className="h-px w-12 bg-[var(--color-red)]" />
          </div>

          <EditableText contentKey="home.hero.title" defaultValue="La Maison de la Presse" tag="h1"
            className="font-display text-6xl md:text-8xl lg:text-9xl text-[var(--color-text)] leading-[0.9] mb-4" />

          <div className="h-px w-40 bg-[var(--color-text)]/20 mx-auto mb-4" />

          <EditableText contentKey="home.hero.subtitle"
            defaultValue="Librairie — Papeterie — Presse — Jeux — Photos"
            tag="p" className="text-[var(--color-text-muted)] text-sm md:text-base tracking-[0.15em] uppercase mb-8" />

          <EditableButton contentKeyText="home.hero.cta.text" contentKeyUrl="home.hero.cta.url"
            defaultText="Entrez" defaultUrl="#rayons"
            className="border-2 border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white px-10 py-3 text-xs tracking-[0.25em] uppercase transition-all duration-500" />
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   RAYONS — Grille asymétrique magazine
   Pas de cards identiques : une grande + petites
   ═══════════════════════════════════════════════ */
function Rayons() {
  return (
    <section id="rayons" className="py-16 md:py-20 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Fade className="mb-12">
          <EditableText contentKey="home.rayons.label" defaultValue="Nos rayons" tag="p"
            className="text-[var(--color-red)] text-xs tracking-[0.4em] uppercase mb-2" />
          <EditableText contentKey="home.rayons.title" defaultValue="Tout un monde à explorer" tag="h2"
            className="font-display text-3xl md:text-5xl text-[var(--color-text)]" />
        </Fade>

        {/* Grille asymétrique : grande image + 3 petits à droite */}
        <div className="grid md:grid-cols-12 gap-4 mb-4">
          <Fade className="md:col-span-7 relative group overflow-hidden">
            <EditableImage contentKey="home.rayons.librairie.img"
              defaultSrc="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900&q=80"
              alt="Librairie" width={900} height={600}
              className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <BookOpen className="w-5 h-5 text-white/70 mb-2" />
              <h3 className="font-display text-2xl text-white">Librairie</h3>
              <p className="text-white/60 text-sm mt-1">Romans, BD, jeunesse, beaux-livres</p>
            </div>
          </Fade>

          <div className="md:col-span-5 grid gap-4">
            <Fade delay={0.05} className="relative group overflow-hidden">
              <EditableImage contentKey="home.rayons.presse.img"
                defaultSrc="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&q=80"
                alt="Presse" width={600} height={280}
                className="w-full aspect-[2/1] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <Newspaper className="w-4 h-4 text-white/70 mb-1" />
                <h3 className="font-display text-lg text-white">Presse</h3>
              </div>
            </Fade>
            <Fade delay={0.1} className="relative group overflow-hidden">
              <EditableImage contentKey="home.rayons.papeterie.img"
                defaultSrc="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80"
                alt="Papeterie" width={600} height={280}
                className="w-full aspect-[2/1] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <PenTool className="w-4 h-4 text-white/70 mb-1" />
                <h3 className="font-display text-lg text-white">Papeterie</h3>
              </div>
            </Fade>
          </div>
        </div>

        {/* Ligne basse : 3 égales */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Gamepad2, key: "jeux", label: "Jeux", desc: "Jeux de société, puzzles",
              img: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80" },
            { icon: Camera, key: "photos", label: "Photos", desc: "Photos d'identité, tirages, impressions",
              img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80" },
            { icon: Gift, key: "cadeaux", label: "Services & cadeaux", desc: "Mondial Relay, FDJ, idées cadeaux",
              img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80" },
          ].map((item, i) => (
            <Fade key={item.key} delay={i * 0.05} className="relative group overflow-hidden">
              <EditableImage contentKey={`home.rayons.${item.key}.img`}
                defaultSrc={item.img} alt={item.label} width={600} height={400}
                className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <item.icon className="w-4 h-4 text-white/70 mb-1" />
                <h3 className="font-display text-lg text-white">{item.label}</h3>
                <p className="text-white/50 text-xs">{item.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CITATION — Bande typographique
   ═══════════════════════════════════════════════ */
function Citation() {
  return (
    <section className="py-14 bg-[var(--color-ink)]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <Fade>
          <EditableText contentKey="home.citation.text"
            defaultValue="Un livre, un jeu, un journal — chaque visite est une découverte."
            tag="blockquote"
            className="font-display italic text-2xl md:text-3xl text-white/90 leading-relaxed" />
          <div className="h-px w-16 bg-[var(--color-red)] mx-auto mt-6" />
        </Fade>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   À PROPOS — Texte + image décalée
   Layout inverse : texte à droite, image à gauche
   ═══════════════════════════════════════════════ */
function About() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-bg-paper)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-8 items-center">
        <Fade delay={0.1} className="md:col-span-6 md:order-2">
          <EditableImage contentKey="home.about.image"
            defaultSrc="https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=800&q=80"
            alt="Intérieur librairie" width={600} height={700}
            className="w-full aspect-[5/6] object-cover" />
        </Fade>
        <Fade className="md:col-span-6 md:order-1">
          <EditableText contentKey="home.about.label" defaultValue="Notre histoire" tag="p"
            className="text-[var(--color-red)] text-xs tracking-[0.4em] uppercase mb-3" />
          <EditableText contentKey="home.about.title" defaultValue="Bien plus qu'une librairie" tag="h2"
            className="font-display text-3xl md:text-4xl text-[var(--color-text)] leading-[1.1] mb-6" />
          <EditableText contentKey="home.about.text"
            defaultValue="Au 22 avenue Georges Bert, La Maison de la Presse est le rendez-vous culturel de Saint-Donat-sur-l'Herbasse depuis des années. Librairie, papeterie, presse quotidienne, service photo, jeux de société — Eric et son équipe vous accueillent dans un espace chaleureux où chacun trouve son bonheur. Commandes de livres sur demande, listes scolaires à la rentrée, conseils personnalisés toute l'année."
            tag="p" className="text-[var(--color-text-muted)] leading-relaxed mb-6" />
          <EditableButton contentKeyText="home.about.cta.text" contentKeyUrl="home.about.cta.url"
            defaultText="Nous contacter" defaultUrl="#contact"
            className="border border-[var(--color-ink)]/30 text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-500" />
        </Fade>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SERVICES — Prestations détaillées
   ═══════════════════════════════════════════════ */
function Services() {
  const prestations = [
    { icon: IdCard, title: "Photos d'identité", desc: "Passeport, carte nationale, permis de conduire, tout document officiel" },
    { icon: Printer, title: "Impressions & copies", desc: "Photocopies N&B et couleur, impressions USB/internet, plastification, reliures" },
    { icon: Package, title: "Mondial Relay", desc: "Point relais colis — envoi et réception de vos colis" },
    { icon: CreditCard, title: "FDJ & recharges", desc: "Jeux Française des Jeux, recharges téléphoniques, coupons internet" },
    { icon: Stamp, title: "Timbres & fax", desc: "Timbres-poste, envoi de fax, services postaux" },
    { icon: PenTool, title: "CV & cartes de visite", desc: "Réalisation de CV personnalisés, cartes de visite sur mesure" },
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--color-bg-ink)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Fade className="text-center mb-12">
          <EditableText contentKey="home.services.label" defaultValue="Nos services" tag="p"
            className="text-[var(--color-gold)] text-xs tracking-[0.4em] uppercase mb-2" />
          <EditableText contentKey="home.services.title" defaultValue="Bien plus qu'une librairie" tag="h2"
            className="font-display text-3xl md:text-5xl text-white" />
        </Fade>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {prestations.map((p, i) => (
            <Fade key={p.title} delay={i * 0.05}>
              <div className="text-center">
                <p.icon className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-3" />
                <h3 className="text-white font-medium text-sm mb-1">{p.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   COUPS DE COEUR — 3 livres/jeux mis en avant
   ═══════════════════════════════════════════════ */
function CoupsDeCoeur() {
  const items = [
    { key: "coup1", title: "Nouveautés littéraires", desc: "Découvrez nos dernières sélections romans et BD, renouvelées chaque semaine.",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80" },
    { key: "coup2", title: "Jeux de société", desc: "Grüll, Catan, Azul... Les incontournables et les pépites méconnues.",
      img: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80" },
    { key: "coup3", title: "Rentrée scolaire", desc: "Toutes les fournitures pour bien démarrer. Listes disponibles en boutique.",
      img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80" },
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Fade className="text-center mb-12">
          <EditableText contentKey="home.coups.label" defaultValue="Sélection" tag="p"
            className="text-[var(--color-red)] text-xs tracking-[0.4em] uppercase mb-2" />
          <EditableText contentKey="home.coups.title" defaultValue="Nos coups de coeur" tag="h2"
            className="font-display text-3xl md:text-5xl text-[var(--color-text)]" />
        </Fade>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Fade key={item.key} delay={i * 0.08}>
              <EditableImage contentKey={`home.coups.${item.key}.img`}
                defaultSrc={item.img} alt={item.title} width={600} height={400}
                className="w-full aspect-[3/2] object-cover mb-4" />
              <div className="h-px w-8 bg-[var(--color-red)] mb-3" />
              <EditableText contentKey={`home.coups.${item.key}.title`} defaultValue={item.title} tag="h3"
                className="font-display text-xl text-[var(--color-text)] mb-2" />
              <EditableText contentKey={`home.coups.${item.key}.desc`} defaultValue={item.desc} tag="p"
                className="text-[var(--color-text-muted)] text-sm leading-relaxed" />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CONTACT — centré, style carte de visite
   ═══════════════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-[var(--color-bg-paper)]">
      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
        <Fade>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[var(--color-red)]" />
            <EditableText contentKey="home.contact.label" defaultValue="Rendez-vous" tag="p"
              className="text-[var(--color-red)] text-xs tracking-[0.4em] uppercase" />
            <div className="h-px w-12 bg-[var(--color-red)]" />
          </div>

          <EditableText contentKey="home.contact.title" defaultValue="La Maison de la Presse" tag="h2"
            className="font-display text-3xl md:text-5xl text-[var(--color-text)] mb-8" />

          <div className="grid grid-cols-2 gap-6 mb-8 max-w-md mx-auto text-left">
            <div>
              <MapPin className="w-4 h-4 text-[var(--color-ink)]/40 mb-2" />
              <EditableText contentKey="home.contact.address" defaultValue="22 avenue Georges Bert, 26260 Saint-Donat-sur-l'Herbasse"
                tag="p" className="text-[var(--color-text-muted)] text-sm leading-relaxed" />
            </div>
            <div>
              <Clock className="w-4 h-4 text-[var(--color-ink)]/40 mb-2" />
              <EditableText contentKey="home.contact.hours" defaultValue="Du lundi au samedi"
                tag="p" className="text-[var(--color-text-muted)] text-sm" />
            </div>
            <div>
              <Phone className="w-4 h-4 text-[var(--color-ink)]/40 mb-2" />
              <EditableText contentKey="home.contact.phone" defaultValue="04 75 45 03 80"
                tag="p" className="text-[var(--color-text-muted)] text-sm" />
            </div>
            <div>
              <Mail className="w-4 h-4 text-[var(--color-ink)]/40 mb-2" />
              <EditableText contentKey="home.contact.email" defaultValue="eric.lombard15@wanadoo.fr"
                tag="p" className="text-[var(--color-text-muted)] text-sm" />
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.2!2d4.9847!3d45.1231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLa+Maison+de+la+Presse!5e0!3m2!1sfr!2sfr"
            className="w-full h-[280px] border-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

          <div className="mt-10">
            <EditableButton contentKeyText="home.contact.cta.text" contentKeyUrl="home.contact.cta.url"
              defaultText="Appeler" defaultUrl="tel:0475450380"
              className="border-2 border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white px-10 py-3 text-xs tracking-[0.25em] uppercase transition-all duration-500" />
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─── MAIN ─── */
export default function Home() {
  const { loaded } = useCMS();

  if (!loaded) {
    return (
      <div className="fixed inset-0 bg-[var(--color-bg-paper)] z-[99999] flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <h1 className="font-display text-4xl text-[var(--color-text)] mb-4">La Maison de la Presse</h1>
          <div className="w-8 h-8 border border-[var(--color-red)] border-t-transparent rounded-full animate-spin mx-auto" />
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Rayons />
      <Citation />
      <About />
      <Services />
      <CoupsDeCoeur />
      <Contact />
      <Footer />
    </main>
  );
}