"use client"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { useToast } from "@/components/ToastProvider"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
)

export default function PaymentPage() {
  const { showToast } = useToast()

  const [method, setMethod] = useState("card")

  async function onPay() {
    const stripe = await stripePromise

    if (!stripe) {
      showToast("Stripe not configured. Add public key.", "error")
      return
    }

    showToast(`Payment successful using ${method}`, "success")
  }

  return (
    <main className="min-h-[calc(100vh-64px)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-3xl bg-white/80 p-6 shadow-lg dark:bg-zinc-950/60">

        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Ride Payment
        </h1>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Choose a payment method
        </p>

        {/* Payment Methods */}

        <div className="mt-6 flex flex-col gap-3">

          <label className="flex items-center gap-3 border p-3 rounded-xl cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={method === "card"}
              onChange={() => setMethod("card")}
            />
            Credit / Debit Card
          </label>

          <label className="flex items-center gap-3 border p-3 rounded-xl cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={method === "upi"}
              onChange={() => setMethod("upi")}
            />
            UPI
          </label>

          <label className="flex items-center gap-3 border p-3 rounded-xl cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="wallet"
              checked={method === "wallet"}
              onChange={() => setMethod("wallet")}
            />
            Wallet
          </label>

        </div>

        {/* Pay Button */}

        <button
          onClick={onPay}
          className="mt-6 w-full h-11 rounded-2xl bg-emerald-600 text-white font-semibold hover:bg-emerald-500"
        >
          Pay Now
        </button>

      </div>
    </main>
  )
}