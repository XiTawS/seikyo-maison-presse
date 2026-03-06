import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/cms/SessionProvider";
import CMSProvider from "@/components/cms/CMSProvider";
import AdminBar from "@/components/cms/AdminBar";

export const metadata: Metadata = {
  title: "La Maison de la Presse — Saint-Donat-sur-l'Herbasse",
  description: "Librairie, papeterie, presse, jeux et photos à Saint-Donat-sur-l'Herbasse. Votre espace culture et loisirs au coeur de la Drôme.",
  keywords: "librairie, presse, papeterie, jeux, photos, Saint-Donat-sur-l'Herbasse, Maison de la Presse, Drôme",
  openGraph: {
    title: "La Maison de la Presse — Culture et loisirs à Saint-Donat",
    description: "Librairie, papeterie, presse, jeux et photos. Saint-Donat-sur-l'Herbasse.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BookStore",
          name: "La Maison de la Presse",
          address: { "@type": "PostalAddress", streetAddress: "22 avenue Georges Bert", addressLocality: "Saint-Donat-sur-l'Herbasse", postalCode: "26260", addressCountry: "FR" },
          telephone: "+33475450380",
          email: "eric.lombard15@wanadoo.fr",
          url: "https://maison-presse.vercel.app",
          sameAs: ["https://www.facebook.com/people/La-Maison-de-la-Presse/100095558231756/"],
        })}} />
      </head>
      <body className="antialiased">
        <SessionProvider>
          <CMSProvider>
            {children}
            <AdminBar />
          </CMSProvider>
        </SessionProvider>
      </body>
    </html>
  );
}