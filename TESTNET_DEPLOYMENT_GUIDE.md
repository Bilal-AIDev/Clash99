# 🌐 Clash99 Testnet Deployment & Faucet Guide

This guide walks you through deploying the Clash99 smart contracts to live Ethereum Layer-2 testnets (**Arbitrum Sepolia** or **Base Sepolia**) and testing with free testnet tokens.

---

## 1. Get Free Testnet Gas (Faucets)

To deploy and test on testnets, you need free testnet ETH (which has zero real financial value).

### Arbitrum Sepolia Faucets:
1. **Chainlink Faucet:** [faucets.chain.link](https://faucets.chain.link/) (Free Sepolia ETH & LINK)
2. **QuickNode Faucet:** [faucet.quicknode.com/arbitrum/sepolia](https://faucet.quicknode.com/arbitrum/sepolia)
3. **Alchemy Sepolia Faucet:** [sepoliafaucet.com](https://sepoliafaucet.com/)

### Base Sepolia Faucets:
1. **Coinbase Developer Faucet:** [faucet.quicknode.com/base/sepolia](https://faucet.quicknode.com/base/sepolia)
2. **Superchain Faucet:** [app.optimism.io/faucet](https://app.optimism.io/faucet)

---

## 2. Set Up Your Environment Variables

Create a `.env` file in `contracts/` (already ignored by `.gitignore` to prevent any secret leaks):

```env
# Your private key (from a burner development wallet, NOT your main funds wallet)
PRIVATE_KEY=0x_YOUR_BURNER_PRIVATE_KEY_HERE

# Optional custom RPCs (defaults to public endpoints)
ARBITRUM_SEPOLIA_RPC=https://sepolia-rollup.arbitrum.io/rpc
BASE_SEPOLIA_RPC=https://sepolia.base.org

# Air-gapped address to receive the 5% platform fee sweeps
STEALTH_COLD_WALLET=0x_YOUR_COLD_WALLET_ADDRESS_HERE
```

---

## 3. Deploy Contracts to Testnet

Run the deployment script specifying the target network:

### For Arbitrum Sepolia:
```bash
npm --prefix contracts run deploy -- --network arbitrumSepolia
```

### For Base Sepolia:
```bash
npm --prefix contracts run deploy -- --network baseSepolia
```

The script will:
1. Deploy `StealthTreasury.sol`.
2. Deploy `P2P1v1Escrow.sol` (linked to the treasury).
3. Deploy `ParimutuelPool.sol` (linked to the treasury).
4. Automatically update `frontend/lib/contracts/deployments.json` with the new on-chain addresses.

---

## 4. Test the Live On-Chain App

1. Run the frontend:
   ```bash
   npm run frontend:dev
   ```
2. Open [http://localhost:3000](http://localhost:3000).
3. Toggle to **Real USDT Mode**.
4. Connect MetaMask / Rabby / TrustWallet switched to **Arbitrum Sepolia** or **Base Sepolia**.
5. Create a CoinFlip duel or place a cricket bet.
6. Verify the transaction on [Sepolia Arbiscan](https://sepolia.arbiscan.io/)!
