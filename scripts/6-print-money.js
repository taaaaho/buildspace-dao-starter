import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // This is the address of our ERC-20 contract printed out in the step before.
    const token = await sdk.getContract("0x3ad052dC3e48b3bbb9E61a971f49495d9Ba40328", "token");
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1_000_000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "$FOOD in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();