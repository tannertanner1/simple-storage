<br>

```bash
cd && git clone https://github.com/tannertanner1/simple-storage.git
cd simple-storage && code .
npm i
```

<br>
<br>

```bash
mkdir <dir> && cd <dir> && code .
npm init -y
```

<!-- ```bash
# Create a new repository: https://github.com/new
git init
git add .
git commit -m ""
git branch -m main
git remote add origin https://github.com/<user>/<dir>.git
git push -u origin main
``` -->

```bash
npm i ethers@5.7.2 dotenv@16.0.3 -S
touch README.md .env.example .env .gitignore
```

```bash
npm i hardhat@2.12.5 @nomicfoundation/hardhat-toolbox@2.0.0 -D
npx hardhat # Create an empty hardhat.config.js

mkdir contracts && touch contracts/SimpleStorage.sol
npx hardhat compile # Compiled 1 Solidity file successfully

mkdir test && touch test/SimpleStorage.js
npx hardhat test # 2 passing

mkdir scripts && touch scripts/deploy.js
npx hardhat run scripts/deploy.js --network sepolia
```

```bash
touch index.html index.js index.css
```

<!-- ```bash
# git add
# git commit -m ""
# git push

ga && gc "" && gp
``` -->

<br>