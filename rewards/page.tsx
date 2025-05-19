// app/rewards/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { getUserRewards, isRewardClaimable, Reward } from '@/lib/rewards';


const RewardsPage = () => {
  const [rewards, setRewards] = useState<Reward[]>([]);

  useEffect(() => {
    const fetchRewards = async () => {
      const data = await getUserRewards();
      setRewards(data);
    };

    fetchRewards();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your Rewards</h1>
      <ul className="space-y-4">
        {rewards.map((reward) => (
          <li
            key={reward.id}
            className={`p-4 border rounded-lg ${
              reward.status === 'claimed' ? 'bg-gray-100' : 'bg-green-100'
            }`}
          >
            <h2 className="text-xl font-semibold">{reward.title}</h2>
            <p className="text-lg">Reward: {reward.reward}</p>
            <p className={`font-bold ${reward.status === 'claimed' ? 'text-gray-600' : 'text-green-600'}`}>
              {isRewardClaimable(reward) ? 'Unclaimed' : 'Claimed'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsPage;
