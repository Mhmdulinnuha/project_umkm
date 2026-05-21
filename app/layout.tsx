import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/public/css/style.css";
import "@/public/css/responsive.css";

import Providers from "./providers";
import BootstrapClient from "./BootstrapClient";

export const metadata = {
  title: "Feane",
  description: "Restaurant Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="sub_page">
        <BootstrapClient />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}