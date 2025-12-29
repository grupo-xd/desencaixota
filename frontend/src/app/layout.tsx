import "./globals.css";

export const metadata = {
  title: "Desencaixota",
  description: "Aplicação de gerenciamento de estoque e entregas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
