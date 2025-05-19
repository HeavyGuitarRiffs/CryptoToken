// components/WalletConnect.tsx
"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function WalletConnect() {
  return (
    <div className="text-white">
      <ConnectButton
        accountStatus="address"
        showBalance={false}
        chainStatus="icon"
      />
    </div>
  )
}
