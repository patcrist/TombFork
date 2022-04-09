const Tomb = artifacts.require("Tomb");
const TShare = artifacts.require("TShare");
const TBond = artifacts.require("TBond");
const DummyToken = artifacts.require("DummyToken");
const DummyToken1 = artifacts.require("DummyToken1");
const DummyToken2 = artifacts.require("DummyToken2");
const DummyToken3 = artifacts.require("DummyToken3");
const TombGenesisRewardPool = artifacts.require("TombGenesisRewardPool");
const TShareRewardPool = artifacts.require("TShareRewardPool");
const {ethers} = require('ethers');

module.exports = async function (deployer, network, accounts) {

    const deplAddr = accounts[0];
    const acc1 = "0xfF6B66D2c6fd3a84C9A501b9a2CA75183F6C876b";


   const tomb = await deployer.deploy(Tomb, 0, acc1);
   const tombI = await Tomb.deployed();
   const tshare = await deployer.deploy(TShare, acc1, acc1);
   const tshareI = await TShare.deployed();
   const tbond = await deployer.deploy(TBond);
   const bondI = await TBond.deployed();


   const dummy = await deployer.deploy(DummyToken);
   const dummyI = await DummyToken.deployed();

   const dummy1 = await deployer.deploy(DummyToken1);
   const dummy1I = await DummyToken1.deployed();

   const dummy2 = await deployer.deploy(DummyToken2);
   const dummy2I = await DummyToken2.deployed();

   const dummy3 = await deployer.deploy(DummyToken3);
   const dummy3I = await DummyToken3.deployed();
   

   const genPool = await deployer.deploy(TombGenesisRewardPool, tombI.address, dummyI.address);
   const genPoolI = await TombGenesisRewardPool.deployed();
   const tsharePool = await deployer.deploy(TShareRewardPool, tshareI.address);
   const tsharePoolI = await TShareRewardPool.deployed();

   const RPC = "https://speedy-nodes-nyc.moralis.io/60437e1e806cf3cde2ffa6ba/bsc/testnet";
    const blockNumber = 80; // number of the block you want to get timestamp of
    const provider = new ethers.providers.JsonRpcProvider(RPC)

    const timestamp = (await provider.getBlock(blockNumber)).timestamp;

    await genPoolI.add(1000, dummy.address, true, timestamp+350);
    await genPoolI.add(6000, dummy1.address, true, timestamp+350);
    await genPoolI.add(2500, dummy2.address, true, timestamp+350);
    await genPoolI.add(1500, dummy3.address, true, timestamp+350);

   
};
