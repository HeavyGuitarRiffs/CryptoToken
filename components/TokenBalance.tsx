import React from 'react'

const TokenBalance = () => {
  const tokenBalance = 1200 // Placeholder value. Fetch actual balance from smart contract.

  return (
    <div className="token-balance">
      <p>Your Lokalty Token Balance: {tokenBalance} LOKT</p>
      <button onClick={() => { /* Implement claim reward functionality */ }}>
        Claim Rewards
      </button>
    </div>
  )
}

export default TokenBalance
