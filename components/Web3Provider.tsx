// ✅ Updated Web3Provider.tsx — no unused vars
'use client'

import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { publicClient } = configureChains([mainnet], [publicProvider()])

const config = createConfig({
  autoConnect: true,
  publicClient,
})

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>
}
