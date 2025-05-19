// lib/rewards.ts

type Reward = {
    id: number
    title: string
    reward: string
    status: "claimed" | "unclaimed"
    userAddress: string
  }
  
  /**
   * Mock function to fetch user rewards.
   * Replace with a call to your backend or smart contract.
   */
  export async function getUserRewards(address: string): Promise<Reward[]> {
    // Placeholder: return static or fake data
    return [
      {
        id: 1,
        title: "Referral Milestone: 5 Friends",
        reward: "50 $LOK",
        status: "claimed",
        userAddress: address,
      },
      {
        id: 2,
        title: "Early Adopter Badge",
        reward: "NFT Badge",
        status: "unclaimed",
        userAddress: address,
      },
    ]
  }
  
  /**
   * Example utility: check if reward is claimable
   */
  export function isRewardClaimable(reward: Reward): boolean {
    return reward.status === "unclaimed"
  }
  