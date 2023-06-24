const Name = "SimpleStorage";

async function main() {
  const Contract = await ethers.getContractFactory(Name); // gets contract to deploy
  console.log(`deploying ${Name}...`);

  const contract = await Contract.deploy(); // initiates new contract and waits for deployment to resolve
  await contract.deployed();

  console.log(`${Name} deployed to:`, contract.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });