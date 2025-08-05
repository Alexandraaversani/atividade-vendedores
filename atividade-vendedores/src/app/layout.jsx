import localFont from "next/font/local";
import "../app/globals.css";
import Header from "../components/Header/Header";
import { productsData } from "../data/products";

const cormorantGaramond = localFont({
  src: [
    {
      path: "../../public/fonts/CormorantGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CormorantGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: "Loja de Eletrônicos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={cormorantGaramond.variable}>
      <body className={cormorantGaramond.className}>
        <Header
          title="🛒 Loja de Eletrônicos"
          subtitle="Os melhores produtos com os melhores preços!"
          totalProducts={productsData.length}
        />
        {children}
      </body>
    </html>
  );
}
