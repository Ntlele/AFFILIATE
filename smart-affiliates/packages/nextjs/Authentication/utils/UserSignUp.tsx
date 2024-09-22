import { ethers } from "ethers";

export const registerUser = async (
  name: string,
  username: string,
  email: string,
  password: string,
): Promise<ethers.TransactionResponse> => {
  if (!window.ethereum) {
    throw new Error("Please install MetaMask");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const contractAddress = "YOUR_SMART_CONTRACT_ADDRESS";
  const contractABI = "YOUR_SMART_CONTRACT_ABI";
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const tx = await contract.registerUser(name, username, email, ethers.hashMessage(password));

  await tx.wait();

  return tx;
};
