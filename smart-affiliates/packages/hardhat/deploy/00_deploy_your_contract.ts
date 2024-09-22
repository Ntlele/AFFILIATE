import { HardhatRuntimeEnvironment } from "hardhat/types";

module.exports = async ({ getNamedAccounts, deployments }: HardhatRuntimeEnvironment) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const userManagement = await deploy("UserManagement", {
    from: deployer,
    log: true,
  });

  const paymentHandler = await deploy("PaymentHandler", {
    from: deployer,
    log: true,
  });

  const affiliateContract = await deploy("AffiliateContract", {
    from: deployer,
    log: true,
  });

  log("UserManagement deployed at:", userManagement.address);
  log("PaymentHandler deployed at:", paymentHandler.address);
  log("AffiliateContract deployed at:", affiliateContract.address);
};
