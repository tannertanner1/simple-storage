const address = "0x27Ec9D8393dA02C937934167353047e45a298eEC";
const abi = [
  {
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "x",
        "type": "uint256"
      }
    ],
    "name": "set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "value",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(address, abi, provider.getSigner());

const connect = document.getElementById("connect");
connect.onclick = async () => {
  if (!window.ethereum || !window.ethereum.isMetaMask) return alert("metamask is not installed");
  try {
    await ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById("account").innerHTML = `account: ${ethereum.selectedAddress}`;
  } catch(error) { alert("error connecting to metamask"); }
};

ethereum.on("chainChanged", () => window.location.reload());
const network = async () => (await provider.getNetwork()).chainId === 11155111 || alert("connect to sepolia network");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const setValue = async (value) => {
  try {
    if (!(await network())) return;

    const Value = document.getElementById("value");
    const input = document.getElementById("input");
    Value.innerHTML = "value: ...";

    const tx = await contract.set(value);
    await tx.wait();

    let newValue;
    do {
      newValue = await getValue();
      Value.innerHTML = `value: ${newValue}`;
      input.value = "";
      await sleep(1000);
    } while (newValue !== value); 
    Value.innerHTML = `value: ${newValue}`;
  } catch (error) { alert("error while setting state"); }
};

const setButton = document.getElementById("set-button");
setButton.onclick = async () => {
  const valueSet = document.getElementById("input").value;
  if (!valueSet) return alert("set value");
  await setValue(valueSet);
};

const getValue = async() => {
  try {
    if (!(await network())) return;
    const value = await contract.get();
    return value;
  } catch(error) { alert("error while getting state"); }
};

const getButton = document.getElementById("get-button");
getButton.onclick = async() => {
  try {
    const value = await getValue();
    if (value !== undefined) document.getElementById("value").innerHTML = `value: ${value}`;
    // document.getElementById("value").innerHTML = value !== undefined ? `value: ${value}` : "";
  } catch(error) { alert("error while getting state"); }
};