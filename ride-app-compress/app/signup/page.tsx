"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useToast } from "@/components/ToastProvider"

export default function SignupPage() {
  const [email, setEmail] = useState("eve.holt@reqres.in")
  const [password, setPassword] = useState("pistol")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { showToast } = useToast()

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      if (!res.ok) throw new Error("Signup failed")
      showToast("Account created (dummy API).", "success")
      router.push("/login")
    } catch {
      showToast("Sign up failed. Try again.", "error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-[calc(100vh-64px)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-3xl bg-white/80 p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5 dark:bg-zinc-950/60 dark:ring-white/10">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Sign up
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Demo sign up via external dummy API.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create account"}
          </button>

          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Tip: these prefilled values work on `reqres.in`.
          </p>
        </form>
      </div>
    </main>
  )
}