import { Inter } from "next/font/google";
import "../Styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peak Plots",
  description: "Buy Sell Rent!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
