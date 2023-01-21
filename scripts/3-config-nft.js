import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xcDdf1cf64fb363eAc42734925e8F139272bCF4B9", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Puppy Puppy",
        description: "This NFT will give you access to PuppyDAO!",
        image: readFileSync("scripts/assets/puppy-nft.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();