// app/leaderboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { LeaderboardCard } from '@/components/LeaderboardCard'

interface LeaderboardEntry {
  address: string
  referrals: number
}

// Mock current user's wallet (for demo purposes)
const currentUserAddress = '0xJustin123'

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchLeaderboard = async () => {
      await new Promise(res => setTimeout(res, 1000)) // Simulated delay
      const mockData: LeaderboardEntry[] = [
        { address: '0xAlpha1', referrals: 12 },
        { address: '0xBravo2', referrals: 9 },
        { address: '0xCharlie3', referrals: 6 },
        { address: '0xJustin123', referrals: 5 },
        { address: '0xDelta4', referrals: 3 },
      ]
      // Sort by referrals descending
      const sorted = mockData.sort((a, b) => b.referrals - a.referrals)
      setLeaderboard(sorted)
      setLoading(false)
    }

    fetchLeaderboard()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-3xl font-bold text-neon-green">🏆 Leaderboard</h1>

      {loading ? (
        <p className="text-gray-400">Loading leaderboard...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {leaderboard.map((entry, index) => (
            <LeaderboardCard
              key={entry.address}
              rank={index + 1}
              address={entry.address}
              referrals={entry.referrals}
              isCurrentUser={entry.address === currentUserAddress}
            />
          ))}
        </div>
      )}
    </div>
  )
}
