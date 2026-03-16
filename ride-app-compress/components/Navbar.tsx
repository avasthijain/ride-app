"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@/components/ThemeProvider"

const links = [
  { href: "/", label: "Book" },
  { href: "/rides", label: "Rides" },
  { href: "/history", label: "History" },
  { href: "/profile", label: "Profile" },
  { href: "/payment", label: "Payment" },
]

export default function Navbar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-30 w-full border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-600 text-xs font-semibold text-white shadow-sm">
              RA
            </div>
            <div className="hidden sm:flex sm:flex-col sm:leading-tight">
              <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                RideApp
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                Mobility
              </span>
            </div>
          </Link>

          {/* Laptop/desktop nav */}
          <div className="hidden items-center justify-center gap-1 text-xs font-medium sm:flex">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "rounded-full px-3 py-1.5 transition",
                    active
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                      : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center justify-end gap-2">
          <Link
            href="/login"
            className="hidden rounded-full px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10 sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="hidden rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 sm:inline-flex"
          >
            Sign up
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 items-center justify-center rounded-full border border-zinc-200 bg-white px-3 text-xs font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-white/5"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 text-xs font-medium sm:hidden">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "whitespace-nowrap rounded-full px-3 py-2 transition",
                  active
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-white/70 text-zinc-700 ring-1 ring-black/5 hover:bg-zinc-50 dark:bg-white/5 dark:text-zinc-200 dark:ring-white/10",
                ].join(" ")}
              >
                {l.label}
              </Link>
            )
          })}
          <Link
            href="/login"
            className="whitespace-nowrap rounded-full px-3 py-2 text-zinc-700 ring-1 ring-black/5 hover:bg-zinc-50 dark:bg-white/5 dark:text-zinc-200 dark:ring-white/10"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="whitespace-nowrap rounded-full bg-emerald-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-emerald-500"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  )
}