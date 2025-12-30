import Menu from "@/components/header/menu";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <Menu/>
            <main className="flex-1 wrapper">{children}</main>
        </div>
)}