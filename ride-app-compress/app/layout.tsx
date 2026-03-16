import "./globals.css"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/ThemeProvider"
import { ToastProvider } from "@/components/ToastProvider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=  "bg-white text-black dark:bg-black dark:text-white">
        <ThemeProvider>
          <ToastProvider>
            <div className="min-h-screen">
              <Navbar />
              {children}
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}