# Clash99

Clash99 is an early-stage web app and smart-contract prototype. The home screen currently offers **Signal Sprint**, a five-trial reflex practice game with no wagers, wallet connection, or prizes. Reaction times are not saved.

## Project status

- The active home screen is a local practice experience; it does not place bets or connect to a public chain.
- The configured contract network is local Hardhat (`31337`). No public deployment is configured for the app.
- Other game components, simulated feeds, and contracts are experiments, not production services. Their results are not live data or independently verified outcomes.
- Do not use the project with real funds.

## Development

Requirements: Node.js 20 or later and npm.

```bash
npm install
npm run frontend:dev
```

The app runs at `http://localhost:3000`.

Useful checks:

```bash
npm run frontend:build
npm run contracts:test
```

## Repository layout

- `frontend/` - Next.js app, Signal Sprint, and contract client code.
- `contracts/` - Solidity contracts, Hardhat configuration, and tests.
- `infrastructure/` - experimental integration code.

The project is a prototype, not a production betting service. A future public deployment would require, at minimum, a verified deployment, reliable outcome resolution, security review, and jurisdiction-specific legal review.
