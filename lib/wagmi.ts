// lib/wagmi.ts
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';

export const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(), // from wagmi@1, uses viem under the hood
  },
});
