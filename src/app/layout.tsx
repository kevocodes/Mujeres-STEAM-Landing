import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components/ui";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cumbre STEM",
  description:
    "La Cumbre del Empoderamiento de las Niñas en STEM es un evento anual que se celebra en conmemoración al Día Internacional de la Niña, que se observa el 11 de octubre. \nEste evento tiene como objetivo crear un espacio dinámico y participativo donde se reúnan organismos, organizaciones y destacados investigadores nacionales e internacionales para abordar cuestiones cruciales relacionadas con el fomento de las niñas en las disciplinas STEM (Ciencia, Tecnología, Ingeniería y Matemáticas)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
