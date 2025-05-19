// app/wagmi-provider.tsx
'use client';

import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { createPublicClient, http } from 'viem'; // Use 'createPublicClient' and 'http' from 'viem'
import { ReactNode } from 'react';

// Create the public client using viem
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http('https://mainnet.infura.io/v3/YOUR_INFURA_KEY'), // Replace with your Infura project ID or other RPC URL
});

const config = createConfig({
  autoConnect: true,
  publicClient, // Pass the publicClient to the config
});

type WagmiProviderProps = {
  children: ReactNode;
};

export default function WagmiProvider({ children }: WagmiProviderProps) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
