import { configureChains, createConfig } from "wagmi";
import { localhost, mainnet, sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia, mainnet, localhost],
  [publicProvider()],
);

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});
