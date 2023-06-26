
1. **alchemy**: connect to blockchain
2. **hardhat**: deploy smart contract
3. **ethers**: call smart contract
4. __metamask__: connect to wallet
5. __fleek__: host static website

<br>

```bash
cd && git clone https://github.com/tannertanner1/simple-storage.git
cd simple-storage # && code .
npm i
```

##### or

```bash
# Create a new repository: https://github.com/new

mkdir <dir> && cd <dir> # && code .
npm init -y

git init
git remote add origin https://github.com/<user>/<dir>.git
git add . && git commit -m "" && git push -u origin main
```

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
touch index.html # index.js index.css
git add . && git commit -m "" && git push # ga && gc "" && gp

# Add New Site: https://app.fleek.co
```

<br>

###### dependencies

- [ethers@5.7.2](https://docs.ethers.org/v5)
  - [dotenv@16.0.3](https://www.dotenv.org/docs/languages/nodejs)
- [hardhat@2.12.5](https://hardhat.org/hardhat-runner/docs/getting-started#overview)
  - [@nomicfoundation/hardhat-toolbox@2.0.0](https://www.npmjs.com/package/@nomicfoundation/hardhat-toolbox/v/2.0.0)
    - [mocha](https://mochajs.org/#assertions)
    - [chai](https://www.chaijs.com/api/bdd)

###### extensions
+ [liveserver @ritwickdey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  + [markdown-preview-enhanced @shd101wyy](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
  + [code-runner @formulahendry](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
    + [hardhat-solidity @nomicfoundation](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity)
    + [vscode-solidity-language @tintinweb](https://marketplace.visualstudio.com/items?itemName=tintinweb.vscode-solidity-language)
  

###### references
> https://www.alchemy.com
https://docs.openzeppelin.com/learn/deploying-and-interacting
https://hardhat.org/tutorial/testing-contracts
https://docs.metamask.io/guide/rpc-api.html
https://docs.fleek.co/hosting/site-deployment/#site-deployment