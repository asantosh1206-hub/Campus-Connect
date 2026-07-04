import "./globals.css";

export const metadata = {
  title: "Campus Connect AI",
  description: "AI-powered campus placement operations platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
