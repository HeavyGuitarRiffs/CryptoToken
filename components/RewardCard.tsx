// components/RewardCard.tsx
'use client'

import { Reward, isRewardClaimable } from '@/lib/rewards'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface RewardCardProps {
  reward: Reward
  onClaim?: (id: number) => void
}

export function RewardCard({ reward, onClaim }: RewardCardProps) {
  const canClaim = isRewardClaimable(reward)

  return (
    <Card className="p-4 bg-gray-900 text-white rounded-lg border border-gray-700 shadow-md">
      <h3 className="text-lg font-semibold">{reward.title}</h3>
      <p className="text-sm text-gray-400 mt-1">{reward.reward}</p>
      <div className="mt-3">
        {canClaim ? (
          <Button
            className="bg-neon-green text-black hover:bg-green-400"
            onClick={() => onClaim?.(reward.id)}
          >
            Claim
          </Button>
        ) : (
          <span className="text-gray-500 text-sm italic">Already claimed</span>
        )}
      </div>
    </Card>
  )
}
