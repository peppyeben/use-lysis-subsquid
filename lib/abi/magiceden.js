"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = exports.functions = exports.events = void 0;
const p = __importStar(require("@subsquid/evm-codec"));
const evm_abi_1 = require("@subsquid/evm-abi");
exports.events = {
    AcceptOfferERC1155: (0, evm_abi_1.event)("0x6f4c56c4b9a9d2479f963d802b19d17b02293ce1225461ac0cb846c482ee3c3e", "AcceptOfferERC1155(address,address,address,address,address,uint256,uint256,uint256)", { "seller": (0, evm_abi_1.indexed)(p.address), "buyer": (0, evm_abi_1.indexed)(p.address), "tokenAddress": (0, evm_abi_1.indexed)(p.address), "beneficiary": p.address, "paymentCoin": p.address, "tokenId": p.uint256, "amount": p.uint256, "salePrice": p.uint256 }),
    AcceptOfferERC721: (0, evm_abi_1.event)("0x8b87c0b049fe52718fe6ff466b514c5a93c405fb0de8fbd761a23483f9f9e198", "AcceptOfferERC721(address,address,address,address,address,uint256,uint256)", { "seller": (0, evm_abi_1.indexed)(p.address), "buyer": (0, evm_abi_1.indexed)(p.address), "tokenAddress": (0, evm_abi_1.indexed)(p.address), "beneficiary": p.address, "paymentCoin": p.address, "tokenId": p.uint256, "salePrice": p.uint256 }),
    BannedAccountAddedForCollection: (0, evm_abi_1.event)("0xf46e1c40f2a6333765b4c7487d9c4bf60e83908611b41b15903e6a506e4ee63b", "BannedAccountAddedForCollection(address,address)", { "tokenAddress": (0, evm_abi_1.indexed)(p.address), "account": (0, evm_abi_1.indexed)(p.address) }),
    BannedAccountRemovedForCollection: (0, evm_abi_1.event)("0xc9f167828587c3dee35aac91efcb05ed56a669e13fded989727888b812c24389", "BannedAccountRemovedForCollection(address,address)", { "tokenAddress": (0, evm_abi_1.indexed)(p.address), "account": (0, evm_abi_1.indexed)(p.address) }),
    BuyListingERC1155: (0, evm_abi_1.event)("0x1217006325a98bdcc6afc9c44965bb66ac7460a44dc57c2ac47622561d25c45a", "BuyListingERC1155(address,address,address,address,address,uint256,uint256,uint256)", { "buyer": (0, evm_abi_1.indexed)(p.address), "seller": (0, evm_abi_1.indexed)(p.address), "tokenAddress": (0, evm_abi_1.indexed)(p.address), "beneficiary": p.address, "paymentCoin": p.address, "tokenId": p.uint256, "amount": p.uint256, "salePrice": p.uint256 }),
    BuyListingERC721: (0, evm_abi_1.event)("0xffb29e9cf48456d56b6d414855b66a7ec060ce2054dcb124a1876310e1b7355c", "BuyListingERC721(address,address,address,address,address,uint256,uint256)", { "buyer": (0, evm_abi_1.indexed)(p.address), "seller": (0, evm_abi_1.indexed)(p.address), "tokenAddress": (0, evm_abi_1.indexed)(p.address), "beneficiary": p.address, "paymentCoin": p.address, "tokenId": p.uint256, "salePrice": p.uint256 }),
    CreatedPaymentMethodWhitelist: (0, evm_abi_1.event)("0x56f762dca0ade902d8ba2510acde4d509e51d041e7ffaf54ea830637d3564752", "CreatedPaymentMethodWhitelist(uint32,address,string)", { "paymentMethodWhitelistId": (0, evm_abi_1.indexed)(p.uint32), "whitelistOwner": (0, evm_abi_1.indexed)(p.address), "whitelistName": p.string }),
    DestroyedCosigner: (0, evm_abi_1.event)("0xf809b9de3c11bc0ac4d82fc02790c5b919f552f133f6c60e913dc767417da02e", "DestroyedCosigner(address)", { "cosigner": (0, evm_abi_1.indexed)(p.address) }),
    EIP712DomainChanged: (0, evm_abi_1.event)("0x0a6387c9ea3628b88a633bb4f3b151770f70085117a15f9bf3787cda53f13d31", "EIP712DomainChanged()", {}),
    MasterNonceInvalidated: (0, evm_abi_1.event)("0x9614574d6542397172c19ba2bf4588434feeb977576e92b7b59b38242ab59609", "MasterNonceInvalidated(address,uint256)", { "account": (0, evm_abi_1.indexed)(p.address), "nonce": p.uint256 }),
    NonceInvalidated: (0, evm_abi_1.event)("0xf3003920635c7d35c4f314eaeeed4b4c653ccb36608a86d57df761d460eab09d", "NonceInvalidated(uint256,address,bool)", { "nonce": (0, evm_abi_1.indexed)(p.uint256), "account": (0, evm_abi_1.indexed)(p.address), "wasCancellation": p.bool }),
    OrderDigestInvalidated: (0, evm_abi_1.event)("0xc63c82396a1b7865295ff481988a98493c2c3cc29066c229b8001c6f5dd647a9", "OrderDigestInvalidated(bytes32,address,bool)", { "orderDigest": (0, evm_abi_1.indexed)(p.bytes32), "account": (0, evm_abi_1.indexed)(p.address), "wasCancellation": p.bool }),
    PaymentMethodAddedToWhitelist: (0, evm_abi_1.event)("0xab066026be9f5f930c1018a7e9eeddf7921b9026531b1b9935a66eb62d163fe8", "PaymentMethodAddedToWhitelist(uint32,address)", { "paymentMethodWhitelistId": (0, evm_abi_1.indexed)(p.uint32), "paymentMethod": (0, evm_abi_1.indexed)(p.address) }),
    PaymentMethodRemovedFromWhitelist: (0, evm_abi_1.event)("0xf156bd3efe5d358c94cc34b12810b94f524f03ef4e7f71158e22b6775ef75ba3", "PaymentMethodRemovedFromWhitelist(uint32,address)", { "paymentMethodWhitelistId": (0, evm_abi_1.indexed)(p.uint32), "paymentMethod": (0, evm_abi_1.indexed)(p.address) }),
    ReassignedPaymentMethodWhitelistOwnership: (0, evm_abi_1.event)("0x51dfcd1cce7b066cb6b6c54dead5b9201cbb434bcfa6f7ee9acf7a3ef1c7b07d", "ReassignedPaymentMethodWhitelistOwnership(uint32,address)", { "id": (0, evm_abi_1.indexed)(p.uint32), "newOwner": (0, evm_abi_1.indexed)(p.address) }),
    TrustedChannelAddedForCollection: (0, evm_abi_1.event)("0x5ad5afe7f91207e8a3eba0274c5fb0599a0cc2b72709ec47fa5e157ae8375ba5", "TrustedChannelAddedForCollection(address,address)", { "tokenAddress": (0, evm_abi_1.indexed)(p.address), "channel": (0, evm_abi_1.indexed)(p.address) }),
    TrustedChannelRemovedForCollection: (0, evm_abi_1.event)("0x0382d3027908b0aa4d45d9765995d6c2915b38ec25c4d1ae2f5bd8dce74a5b16", "TrustedChannelRemovedForCollection(address,address)", { "tokenAddress": (0, evm_abi_1.indexed)(p.address), "channel": (0, evm_abi_1.indexed)(p.address) }),
    UpdatedCollectionLevelPricingBoundaries: (0, evm_abi_1.event)("0xdd61e240b8302b21ad48e3bec0f6e9538c9e4cfffdfde6d604963069d7e23c34", "UpdatedCollectionLevelPricingBoundaries(address,uint256,uint256)", { "tokenAddress": (0, evm_abi_1.indexed)(p.address), "floorPrice": p.uint256, "ceilingPrice": p.uint256 }),
    UpdatedCollectionPaymentSettings: (0, evm_abi_1.event)("0xe6a4f8022c953d2d77979a9c33363936fafc1dcadec52ae9af45b6d3f17973d3", "UpdatedCollectionPaymentSettings(address,uint8,uint32,address,uint16,address,uint16,address,bool,bool)", { "tokenAddress": (0, evm_abi_1.indexed)(p.address), "paymentSettings": p.uint8, "paymentMethodWhitelistId": (0, evm_abi_1.indexed)(p.uint32), "constrainedPricingPaymentMethod": (0, evm_abi_1.indexed)(p.address), "royaltyBackfillNumerator": p.uint16, "royaltyBackfillReceiver": p.address, "royaltyBountyNumerator": p.uint16, "exclusiveBountyReceiver": p.address, "blockTradesFromUntrustedChannels": p.bool, "blockBannedAccounts": p.bool }),
    UpdatedTokenLevelPricingBoundaries: (0, evm_abi_1.event)("0x38d88037c7f872f6e5d89332cdae804370cd604776bfcabf8da1f2e11945e271", "UpdatedTokenLevelPricingBoundaries(address,uint256,uint256,uint256)", { "tokenAddress": (0, evm_abi_1.indexed)(p.address), "tokenId": (0, evm_abi_1.indexed)(p.uint256), "floorPrice": p.uint256, "ceilingPrice": p.uint256 }),
};
exports.functions = {
    acceptOffer: (0, evm_abi_1.fun)("0x08fdd68e", "acceptOffer(bytes)", { "data": p.bytes }),
    addBannedAccountForCollection: (0, evm_abi_1.fun)("0x007f266f", "addBannedAccountForCollection(bytes)", { "data": p.bytes }),
    addTrustedChannelForCollection: (0, evm_abi_1.fun)("0xeb86707b", "addTrustedChannelForCollection(bytes)", { "data": p.bytes }),
    bulkAcceptOffers: (0, evm_abi_1.fun)("0x88d64fe8", "bulkAcceptOffers(bytes)", { "data": p.bytes }),
    bulkBuyListings: (0, evm_abi_1.fun)("0x863eb2d2", "bulkBuyListings(bytes)", { "data": p.bytes }),
    buyListing: (0, evm_abi_1.fun)("0xc32dacae", "buyListing(bytes)", { "data": p.bytes }),
    collectionBountySettings: (0, evm_abi_1.viewFun)("0x4c22daf9", "collectionBountySettings(address)", { "tokenAddress": p.address }, { "royaltyBountyNumerator": p.uint16, "exclusiveBountyReceiver": p.address }),
    collectionPaymentSettings: (0, evm_abi_1.viewFun)("0xc0be2688", "collectionPaymentSettings(address)", { "tokenAddress": p.address }, p.struct({ "paymentSettings": p.uint8, "paymentMethodWhitelistId": p.uint32, "constrainedPricingPaymentMethod": p.address, "royaltyBackfillNumerator": p.uint16, "royaltyBountyNumerator": p.uint16, "isRoyaltyBountyExclusive": p.bool, "blockTradesFromUntrustedChannels": p.bool, "blockBannedAccounts": p.bool })),
    collectionRoyaltyBackfillSettings: (0, evm_abi_1.viewFun)("0x2c64ee2f", "collectionRoyaltyBackfillSettings(address)", { "tokenAddress": p.address }, { "royaltyBackfillNumerator": p.uint16, "royaltyBackfillReceiver": p.address }),
    createPaymentMethodWhitelist: (0, evm_abi_1.fun)("0x6ed56ba8", "createPaymentMethodWhitelist(bytes)", { "data": p.bytes }, p.uint32),
    destroyCosigner: (0, evm_abi_1.fun)("0xf8689bf4", "destroyCosigner(bytes)", { "data": p.bytes }),
    eip712Domain: (0, evm_abi_1.viewFun)("0x84b0196e", "eip712Domain()", {}, { "fields": p.bytes1, "name": p.string, "version": p.string, "chainId": p.uint256, "verifyingContract": p.address, "salt": p.bytes32, "extensions": p.array(p.uint256) }),
    getBannedAccounts: (0, evm_abi_1.viewFun)("0x983a1e1a", "getBannedAccounts(address)", { "tokenAddress": p.address }, p.array(p.address)),
    getCeilingPrice: (0, evm_abi_1.viewFun)("0x26ed4aa1", "getCeilingPrice(address,uint256)", { "tokenAddress": p.address, "tokenId": p.uint256 }, p.uint256),
    getDefaultPaymentMethods: (0, evm_abi_1.viewFun)("0x65c50a8b", "getDefaultPaymentMethods()", {}, p.array(p.address)),
    getDomainSeparator: (0, evm_abi_1.viewFun)("0xed24911d", "getDomainSeparator()", {}, p.bytes32),
    getFloorPrice: (0, evm_abi_1.viewFun)("0x7996eef0", "getFloorPrice(address,uint256)", { "tokenAddress": p.address, "tokenId": p.uint256 }, p.uint256),
    getTrustedChannels: (0, evm_abi_1.viewFun)("0x9b95711f", "getTrustedChannels(address)", { "tokenAddress": p.address }, p.array(p.address)),
    getWhitelistedPaymentMethods: (0, evm_abi_1.viewFun)("0xa797a263", "getWhitelistedPaymentMethods(uint32)", { "paymentMethodWhitelistId": p.uint32 }, p.array(p.address)),
    isDefaultPaymentMethod: (0, evm_abi_1.viewFun)("0xfa6a8da1", "isDefaultPaymentMethod(address)", { "paymentMethod": p.address }, p.bool),
    isNonceUsed: (0, evm_abi_1.viewFun)("0xcab7e8eb", "isNonceUsed(address,uint256)", { "account": p.address, "nonce": p.uint256 }, p.bool),
    isPaymentMethodWhitelisted: (0, evm_abi_1.viewFun)("0xf7d09689", "isPaymentMethodWhitelisted(uint32,address)", { "paymentMethodWhitelistId": p.uint32, "paymentMethod": p.address }, p.bool),
    lastPaymentMethodWhitelistId: (0, evm_abi_1.viewFun)("0xb01f89ef", "lastPaymentMethodWhitelistId()", {}, p.uint32),
    masterNonces: (0, evm_abi_1.viewFun)("0x45253c53", "masterNonces(address)", { "account": p.address }, p.uint256),
    paymentMethodWhitelistOwners: (0, evm_abi_1.viewFun)("0x0557e27e", "paymentMethodWhitelistOwners(uint32)", { "paymentMethodWhitelistId": p.uint32 }, p.address),
    reassignOwnershipOfPaymentMethodWhitelist: (0, evm_abi_1.fun)("0x9ba5520a", "reassignOwnershipOfPaymentMethodWhitelist(bytes)", { "data": p.bytes }),
    remainingFillableQuantity: (0, evm_abi_1.viewFun)("0xd3005213", "remainingFillableQuantity(address,bytes32)", { "account": p.address, "orderDigest": p.bytes32 }, p.struct({ "state": p.uint8, "remainingFillableQuantity": p.uint248 })),
    removeBannedAccountForCollection: (0, evm_abi_1.fun)("0x1f376cfb", "removeBannedAccountForCollection(bytes)", { "data": p.bytes }),
    removeTrustedChannelForCollection: (0, evm_abi_1.fun)("0xff9872c6", "removeTrustedChannelForCollection(bytes)", { "data": p.bytes }),
    renounceOwnershipOfPaymentMethodWhitelist: (0, evm_abi_1.fun)("0x747ddac5", "renounceOwnershipOfPaymentMethodWhitelist(bytes)", { "data": p.bytes }),
    revokeMasterNonce: (0, evm_abi_1.fun)("0x226d4adb", "revokeMasterNonce()", {}),
    revokeOrderDigest: (0, evm_abi_1.fun)("0x38ae410a", "revokeOrderDigest(bytes)", { "data": p.bytes }),
    revokeSingleNonce: (0, evm_abi_1.fun)("0xc031f43a", "revokeSingleNonce(bytes)", { "data": p.bytes }),
    setCollectionPaymentSettings: (0, evm_abi_1.fun)("0x86817d7d", "setCollectionPaymentSettings(bytes)", { "data": p.bytes }),
    setCollectionPricingBounds: (0, evm_abi_1.fun)("0x9d7d1f9e", "setCollectionPricingBounds(bytes)", { "data": p.bytes }),
    setTokenPricingBounds: (0, evm_abi_1.fun)("0x18d5fb30", "setTokenPricingBounds(bytes)", { "data": p.bytes }),
    sweepCollection: (0, evm_abi_1.fun)("0x96c3ae25", "sweepCollection(bytes)", { "data": p.bytes }),
    unwhitelistPaymentMethod: (0, evm_abi_1.fun)("0x4dec1723", "unwhitelistPaymentMethod(bytes)", { "data": p.bytes }),
    whitelistPaymentMethod: (0, evm_abi_1.fun)("0x95e138ac", "whitelistPaymentMethod(bytes)", { "data": p.bytes }),
};
class Contract extends evm_abi_1.ContractBase {
    collectionBountySettings(tokenAddress) {
        return this.eth_call(exports.functions.collectionBountySettings, { tokenAddress });
    }
    collectionPaymentSettings(tokenAddress) {
        return this.eth_call(exports.functions.collectionPaymentSettings, { tokenAddress });
    }
    collectionRoyaltyBackfillSettings(tokenAddress) {
        return this.eth_call(exports.functions.collectionRoyaltyBackfillSettings, { tokenAddress });
    }
    eip712Domain() {
        return this.eth_call(exports.functions.eip712Domain, {});
    }
    getBannedAccounts(tokenAddress) {
        return this.eth_call(exports.functions.getBannedAccounts, { tokenAddress });
    }
    getCeilingPrice(tokenAddress, tokenId) {
        return this.eth_call(exports.functions.getCeilingPrice, { tokenAddress, tokenId });
    }
    getDefaultPaymentMethods() {
        return this.eth_call(exports.functions.getDefaultPaymentMethods, {});
    }
    getDomainSeparator() {
        return this.eth_call(exports.functions.getDomainSeparator, {});
    }
    getFloorPrice(tokenAddress, tokenId) {
        return this.eth_call(exports.functions.getFloorPrice, { tokenAddress, tokenId });
    }
    getTrustedChannels(tokenAddress) {
        return this.eth_call(exports.functions.getTrustedChannels, { tokenAddress });
    }
    getWhitelistedPaymentMethods(paymentMethodWhitelistId) {
        return this.eth_call(exports.functions.getWhitelistedPaymentMethods, { paymentMethodWhitelistId });
    }
    isDefaultPaymentMethod(paymentMethod) {
        return this.eth_call(exports.functions.isDefaultPaymentMethod, { paymentMethod });
    }
    isNonceUsed(account, nonce) {
        return this.eth_call(exports.functions.isNonceUsed, { account, nonce });
    }
    isPaymentMethodWhitelisted(paymentMethodWhitelistId, paymentMethod) {
        return this.eth_call(exports.functions.isPaymentMethodWhitelisted, { paymentMethodWhitelistId, paymentMethod });
    }
    lastPaymentMethodWhitelistId() {
        return this.eth_call(exports.functions.lastPaymentMethodWhitelistId, {});
    }
    masterNonces(account) {
        return this.eth_call(exports.functions.masterNonces, { account });
    }
    paymentMethodWhitelistOwners(paymentMethodWhitelistId) {
        return this.eth_call(exports.functions.paymentMethodWhitelistOwners, { paymentMethodWhitelistId });
    }
    remainingFillableQuantity(account, orderDigest) {
        return this.eth_call(exports.functions.remainingFillableQuantity, { account, orderDigest });
    }
}
exports.Contract = Contract;
