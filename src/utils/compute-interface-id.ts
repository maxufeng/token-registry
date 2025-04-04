import { ethers as packedEthers } from "ethers";

const ethers = { ...packedEthers };

if (ethers.version.includes("/5")) {
  (ethers as any).id = (ethers as any).utils.id;
}

export const computeInterfaceId = (functionSignatures: string[] = []) => {
  const INTERFACE_ID_LENGTH = 4;

  const interfaceIdBuffer = functionSignatures
    .map((signature) => (ethers as any).id(signature))
    .map(
      (h) => Buffer.from(h.substring(2), "hex").slice(0, 4) // bytes4()
    )
    .reduce((memo, bytes) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < INTERFACE_ID_LENGTH; i++) {
        // eslint-disable-next-line no-param-reassign,operator-assignment,no-bitwise
        memo[i] = memo[i] ^ bytes[i]; // xor
      }
      return memo;
    }, Buffer.alloc(INTERFACE_ID_LENGTH));

  return `0x${interfaceIdBuffer.toString("hex")}`;
};
