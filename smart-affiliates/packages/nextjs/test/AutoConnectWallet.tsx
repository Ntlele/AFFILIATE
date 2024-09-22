"use client";

import { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const AutoConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;

        useEffect(() => {
          if (!connected) {
            openConnectModal();
          }
        }, [connected, openConnectModal]);

        return null;
      }}
    </ConnectButton.Custom>
  );
};
