"use client"

import { useEffect, useState } from "react"
import { useToast } from "@/components/ToastProvider"

type Profile = {
  name: string
  email: string
  phone: string
}

const STORAGE_KEY = "rideapp-profile"

export default function ProfilePage() {
  const { showToast } = useToast()
  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    phone: "",
  })

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setProfile(JSON.parse(stored))
    }
  }, [])

  function set<K extends keyof Profile>(key: K, value: string) {
    setProfile((p) => ({ ...p, [key]: value }))
  }

  function onSave(event: React.FormEvent) {
    event.preventDefault()
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
    showToast("Profile updated.", "success")
  }

  return (
    <main className="min-h-[calc(100vh-64px)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-3xl bg-white/80 p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5 dark:bg-zinc-950/60 dark:ring-white/10">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Profile
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Manage your profile details (stored locally for now).
        </p>

        <form onSubmit={onSave} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
              Name
            </label>
            <input
              value={profile.name}
              onChange={(e) => set("name", e.target.value)}
              className="mt-1 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
              Email
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => set("email", e.target.value)}
              className="mt-1 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
              Phone
            </label>
            <input
              value={profile.phone}
              onChange={(e) => set("phone", e.target.value)}
              className="mt-1 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50"
              placeholder="+91..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
          >
            Save changes
          </button>
        </form>
      </div>
    </main>
  )
}