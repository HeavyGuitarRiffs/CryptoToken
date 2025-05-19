import React from 'react'

const ReferralStats = () => {
  const referrals = 50 // This could come from API or blockchain query

  return (
    <div className="referral-stats">
      <p>Total Referrals: {referrals}</p>
      <p>Referral Rewards: 10</p>
    </div>
  )
}

export default ReferralStats
