import localFont from "next/font/local";
import "./globals.css";

const arizonaMixBold = localFont({
    src: "./fonts/af/otf/ABCArizonaMix-Bold.otf",
    variable: "--font-arizona-mix-bold",
    weight: "700",
});

const humanist = localFont({
    src: "./fonts/Humanist521BT.ttf",
    variable: "--font-humanist",
    weight: "400",
});

export const metadata = {
  title: "Ctrl Alt",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${arizonaMixBold.variable} ${humanist.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
