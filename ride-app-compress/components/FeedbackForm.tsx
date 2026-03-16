    "use client"

import { useState } from "react"
import{ useToast } from "@/components/ToastProvider"

export default function FeedbackForm() {

  const [rating, setRating] = useState<number>(0)
  const [comment, setComment] = useState<string>("")
  const {showToast}= useToast()

  function submitFeedback() {
    showToast("Feedback submitted successfully ", "success")
    setRating(0)
    setComment("")
  }

  return (
    <div className="mt-6 rounded-2xl border p-4 shadow-sm bg-white dark:bg-zinc-900">

      <h3 className="text-sm font-semibold mb-3">
        Rate your ride
      </h3>

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border rounded-lg p-2 w-full text-sm"
      >
        <option value={0}>Select rating</option>
        <option value={1}>⭐</option>
        <option value={2}>⭐⭐</option>
        <option value={3}>⭐⭐⭐</option>
        <option value={4}>⭐⭐⭐⭐</option>
        <option value={5}>⭐⭐⭐⭐⭐</option>
      </select>

      <textarea
        placeholder="Write your feedback..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border rounded-lg p-2 w-full mt-3 text-sm"
      />

      <button
        onClick={submitFeedback}
        className="mt-3 w-full rounded-lg bg-emerald-600 text-white py-2 text-sm hover:bg-emerald-700"
      >
        Submit Feedback
      </button>

    </div>
  )
}