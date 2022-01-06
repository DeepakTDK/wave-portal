
const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");//compile sc
    const waveContract = await waveContractFactory.deploy();//deploy sc
    await waveContract.deployed();
    console.log("Deployed to address:", waveContract.address);
};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch(error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();