// components/LeaderboardCard.tsx
'use client'

import { Card, CardTitle } from '@/components/ui/card'

export interface LeaderboardCardProps {
  rank: number
  address: string
  referrals: number
  isCurrentUser?: boolean
}

export function LeaderboardCard({
  rank,
  address,
  referrals,
  isCurrentUser = false,
}: LeaderboardCardProps) {
  const borderColor =
    rank === 1
      ? 'border-yellow-400'
      : rank === 2
      ? 'border-gray-400'
      : rank === 3
      ? 'border-orange-400'
      : 'border-slate-800'

  const bgColor = isCurrentUser
    ? 'bg-gradient-to-br from-purple-900 to-indigo-900'
    : 'bg-slate-900'

  return (
    <Card className={`p-4 shadow-lg rounded-lg border ${borderColor} ${bgColor}`}>
      <CardTitle className="text-xl font-semibold">#{rank}</CardTitle>
      <p className="mt-2 text-sm">Address: {address}</p>
      <p className="text-md font-bold mt-1">Referrals: {referrals}</p>
    </Card>
  )
}
