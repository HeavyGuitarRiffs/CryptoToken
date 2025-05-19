// app/referral/page.tsx
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ReferralCard } from "@/components/ReferralCard"
import { Copy } from "lucide-react"

interface ReferralCardProps {
  name: string
  reward: string
  date: string
  status: "earned" | "pending"
  referralLink: string
}

export default function ReferralPage() {
  const [referrals, setReferrals] = useState<ReferralCardProps[]>([])
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)

  const referralLink = "https://yourapp.com/referral?code=justinX"

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Simulate API fetch
  useEffect(() => {
    setLoading(true)

    // Simulated delay and data
    const fetchData = async () => {
      await new Promise((res) => setTimeout(res, 1000)) // simulate delay
      const mockData: ReferralCardProps[] = [
        {
          name: "Alex Wallet",
          reward: "$25",
          date: "2025-04-22",
          status: "earned",
          referralLink: "https://example.com/referral?code=alex123"
        },
        {
          name: "Jordan.eth",
          reward: "$0",
          date: "2025-04-24",
          status: "pending",
          referralLink: "https://example.com/referral?code=jordan456"
        }
      ]
      setReferrals(mockData)
      setLoading(false)
    }

    fetchData()
  }, [])

  const totalEarned = referrals
    .filter(r => r.status === "earned")
    .reduce((sum, r) => sum + parseFloat(r.reward.replace("$", "")), 0)

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-3xl font-bold text-neon-green">Your Referral Dashboard</h1>

      {/* Referral link section */}
      <div className="bg-gray-900 p-4 rounded-lg shadow-neon flex items-center space-x-4">
        <Input
          readOnly
          value={referralLink}
          className="bg-gray-800 text-white border-none shadow-inner focus-visible:ring-0"
        />
        <Button onClick={handleCopy} variant="ghost" className="text-neon-blue">
          <Copy className="w-4 h-4" />
          {copied && <span className="ml-2 text-sm text-neon-green">Copied!</span>}
        </Button>
      </div>

      {/* Stats */}
      <div className="flex gap-4">
        <div className="flex-1 bg-gray-900 p-4 rounded-md shadow-md text-center">
          <h2 className="text-neon-pink text-xl font-semibold">{referrals.length} Referrals</h2>
          <p className="text-gray-400 text-sm">Total Joined</p>
        </div>
        <div className="flex-1 bg-gray-900 p-4 rounded-md shadow-md text-center">
          <h2 className="text-neon-green text-xl font-semibold">${totalEarned}</h2>
          <p className="text-gray-400 text-sm">Total Earned</p>
        </div>
      </div>

      {/* Referral cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {loading ? (
          <p className="text-gray-400">Loading referrals...</p>
        ) : (
          referrals.map((ref, i) => <ReferralCard key={i} {...ref} />)
        )}
      </div>
    </div>
  )
}
