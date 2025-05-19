import React from 'react'
import { useAccount, useDisconnect } from 'wagmi'

const WalletStatus = () => {
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <div className="wallet-status">
      {isConnected ? (
        <div>
          <p>Connected Wallet Address: {address}</p>
          <button onClick={() => disconnect()}>Disconnect Wallet</button>
        </div>
      ) : (
        <p>Not connected</p>
      )}
    </div>
  )
}

export default WalletStatus
