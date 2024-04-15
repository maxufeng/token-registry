const ChainId = {
  Ethereum: 1,
  Sepolia: 11155111,
  Polygon: 137,
  PolygonAmoy: 80002,
  XDC: 50,
  XDCApothem: 51,
  HederaMainnet: 295,
  HederaTestnet: 296,
  Stability: 101010,
  StabilityTestnet: 20180427,
};

export const contractAddress = {
  TitleEscrowFactory: {
    [ChainId.Ethereum]: "0xA38CC56c9291B9C1f52F862dd92326d352e710b8",
    [ChainId.Sepolia]: "0x5aA71Cc9559bC5e54E9504a81496d9F8454721F5",
    [ChainId.Polygon]: "0x5B5F8d94782be18E22420f3276D5ef5a1bc65C53",
    [ChainId.PolygonAmoy]: "0x812A0E71c61A42C8d3d449BdfF51834f85686C73",
    [ChainId.XDC]: "0x50BfCc1b699fD2308B978B7a6A26e3C3Bbad16DC",
    [ChainId.XDCApothem]: "0xce28778bE6cF32ef3Ccbc09910258DF592F3b6F1",
    [ChainId.HederaTestnet]: "0x5B5F8d94782be18E22420f3276D5ef5a1bc65C53",
    [ChainId.HederaMainnet]: "0x335ae7ef2a70952d3f7cd4b76f5597067f61157e",
    [ChainId.Stability]: "0x5B5F8d94782be18E22420f3276D5ef5a1bc65C53",
    [ChainId.StabilityTestnet]: "0xd334a95bbA0b666981fD067A5Edd505aFB6cFa1d",
  },
  Deployer: {
    [ChainId.Ethereum]: "0x92470d0Fc33Cbf2f04B39696733806a15eD7eef3",
    [ChainId.Sepolia]: "0x9eBC30E7506E6Ce36eAc5507FCF0121BaF7AeA57",
    [ChainId.Polygon]: "0x92470d0Fc33Cbf2f04B39696733806a15eD7eef3",
    [ChainId.StabilityTestnet]: "0xc9A4F6b4f7afAeC816f2CFB715bB92384Fa46BCa",
    [ChainId.Stability]: "0x163A63415d1bf6DeE66B0624e2313fB9127a599b",
  },
  TokenImplementation: {
    [ChainId.Ethereum]: "0xd3F09dD800525Ecf7e452C3c167C7c716632d016",
    [ChainId.Sepolia]: "0xC78BA1a49663Ef8b920F36B036E91Ab40D8F26D6",
    [ChainId.Polygon]: "0xd3F09dD800525Ecf7e452C3c167C7c716632d016",
    [ChainId.PolygonAmoy]: "0xbA351CF5EC041EF661699ab5cfF605850b6Dcd91",
    [ChainId.StabilityTestnet]: "0x6cDc8cD1d9c3f28DC59F5021401687E98bd18740",
    [ChainId.Stability]: "0xc9A4F6b4f7afAeC816f2CFB715bB92384Fa46BCa",
  },
};
