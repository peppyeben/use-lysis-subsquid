import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    AcceptOfferERC1155: event("0x6f4c56c4b9a9d2479f963d802b19d17b02293ce1225461ac0cb846c482ee3c3e", "AcceptOfferERC1155(address,address,address,address,address,uint256,uint256,uint256)", {"seller": indexed(p.address), "buyer": indexed(p.address), "tokenAddress": indexed(p.address), "beneficiary": p.address, "paymentCoin": p.address, "tokenId": p.uint256, "amount": p.uint256, "salePrice": p.uint256}),
    AcceptOfferERC721: event("0x8b87c0b049fe52718fe6ff466b514c5a93c405fb0de8fbd761a23483f9f9e198", "AcceptOfferERC721(address,address,address,address,address,uint256,uint256)", {"seller": indexed(p.address), "buyer": indexed(p.address), "tokenAddress": indexed(p.address), "beneficiary": p.address, "paymentCoin": p.address, "tokenId": p.uint256, "salePrice": p.uint256}),
    BannedAccountAddedForCollection: event("0xf46e1c40f2a6333765b4c7487d9c4bf60e83908611b41b15903e6a506e4ee63b", "BannedAccountAddedForCollection(address,address)", {"tokenAddress": indexed(p.address), "account": indexed(p.address)}),
    BannedAccountRemovedForCollection: event("0xc9f167828587c3dee35aac91efcb05ed56a669e13fded989727888b812c24389", "BannedAccountRemovedForCollection(address,address)", {"tokenAddress": indexed(p.address), "account": indexed(p.address)}),
    BuyListingERC1155: event("0x1217006325a98bdcc6afc9c44965bb66ac7460a44dc57c2ac47622561d25c45a", "BuyListingERC1155(address,address,address,address,address,uint256,uint256,uint256)", {"buyer": indexed(p.address), "seller": indexed(p.address), "tokenAddress": indexed(p.address), "beneficiary": p.address, "paymentCoin": p.address, "tokenId": p.uint256, "amount": p.uint256, "salePrice": p.uint256}),
    BuyListingERC721: event("0xffb29e9cf48456d56b6d414855b66a7ec060ce2054dcb124a1876310e1b7355c", "BuyListingERC721(address,address,address,address,address,uint256,uint256)", {"buyer": indexed(p.address), "seller": indexed(p.address), "tokenAddress": indexed(p.address), "beneficiary": p.address, "paymentCoin": p.address, "tokenId": p.uint256, "salePrice": p.uint256}),
    CreatedPaymentMethodWhitelist: event("0x56f762dca0ade902d8ba2510acde4d509e51d041e7ffaf54ea830637d3564752", "CreatedPaymentMethodWhitelist(uint32,address,string)", {"paymentMethodWhitelistId": indexed(p.uint32), "whitelistOwner": indexed(p.address), "whitelistName": p.string}),
    DestroyedCosigner: event("0xf809b9de3c11bc0ac4d82fc02790c5b919f552f133f6c60e913dc767417da02e", "DestroyedCosigner(address)", {"cosigner": indexed(p.address)}),
    EIP712DomainChanged: event("0x0a6387c9ea3628b88a633bb4f3b151770f70085117a15f9bf3787cda53f13d31", "EIP712DomainChanged()", {}),
    MasterNonceInvalidated: event("0x9614574d6542397172c19ba2bf4588434feeb977576e92b7b59b38242ab59609", "MasterNonceInvalidated(address,uint256)", {"account": indexed(p.address), "nonce": p.uint256}),
    NonceInvalidated: event("0xf3003920635c7d35c4f314eaeeed4b4c653ccb36608a86d57df761d460eab09d", "NonceInvalidated(uint256,address,bool)", {"nonce": indexed(p.uint256), "account": indexed(p.address), "wasCancellation": p.bool}),
    OrderDigestInvalidated: event("0xc63c82396a1b7865295ff481988a98493c2c3cc29066c229b8001c6f5dd647a9", "OrderDigestInvalidated(bytes32,address,bool)", {"orderDigest": indexed(p.bytes32), "account": indexed(p.address), "wasCancellation": p.bool}),
    PaymentMethodAddedToWhitelist: event("0xab066026be9f5f930c1018a7e9eeddf7921b9026531b1b9935a66eb62d163fe8", "PaymentMethodAddedToWhitelist(uint32,address)", {"paymentMethodWhitelistId": indexed(p.uint32), "paymentMethod": indexed(p.address)}),
    PaymentMethodRemovedFromWhitelist: event("0xf156bd3efe5d358c94cc34b12810b94f524f03ef4e7f71158e22b6775ef75ba3", "PaymentMethodRemovedFromWhitelist(uint32,address)", {"paymentMethodWhitelistId": indexed(p.uint32), "paymentMethod": indexed(p.address)}),
    ReassignedPaymentMethodWhitelistOwnership: event("0x51dfcd1cce7b066cb6b6c54dead5b9201cbb434bcfa6f7ee9acf7a3ef1c7b07d", "ReassignedPaymentMethodWhitelistOwnership(uint32,address)", {"id": indexed(p.uint32), "newOwner": indexed(p.address)}),
    TrustedChannelAddedForCollection: event("0x5ad5afe7f91207e8a3eba0274c5fb0599a0cc2b72709ec47fa5e157ae8375ba5", "TrustedChannelAddedForCollection(address,address)", {"tokenAddress": indexed(p.address), "channel": indexed(p.address)}),
    TrustedChannelRemovedForCollection: event("0x0382d3027908b0aa4d45d9765995d6c2915b38ec25c4d1ae2f5bd8dce74a5b16", "TrustedChannelRemovedForCollection(address,address)", {"tokenAddress": indexed(p.address), "channel": indexed(p.address)}),
    UpdatedCollectionLevelPricingBoundaries: event("0xdd61e240b8302b21ad48e3bec0f6e9538c9e4cfffdfde6d604963069d7e23c34", "UpdatedCollectionLevelPricingBoundaries(address,uint256,uint256)", {"tokenAddress": indexed(p.address), "floorPrice": p.uint256, "ceilingPrice": p.uint256}),
    UpdatedCollectionPaymentSettings: event("0xe6a4f8022c953d2d77979a9c33363936fafc1dcadec52ae9af45b6d3f17973d3", "UpdatedCollectionPaymentSettings(address,uint8,uint32,address,uint16,address,uint16,address,bool,bool)", {"tokenAddress": indexed(p.address), "paymentSettings": p.uint8, "paymentMethodWhitelistId": indexed(p.uint32), "constrainedPricingPaymentMethod": indexed(p.address), "royaltyBackfillNumerator": p.uint16, "royaltyBackfillReceiver": p.address, "royaltyBountyNumerator": p.uint16, "exclusiveBountyReceiver": p.address, "blockTradesFromUntrustedChannels": p.bool, "blockBannedAccounts": p.bool}),
    UpdatedTokenLevelPricingBoundaries: event("0x38d88037c7f872f6e5d89332cdae804370cd604776bfcabf8da1f2e11945e271", "UpdatedTokenLevelPricingBoundaries(address,uint256,uint256,uint256)", {"tokenAddress": indexed(p.address), "tokenId": indexed(p.uint256), "floorPrice": p.uint256, "ceilingPrice": p.uint256}),
}

export const functions = {
    acceptOffer: fun("0x08fdd68e", "acceptOffer(bytes)", {"data": p.bytes}, ),
    addBannedAccountForCollection: fun("0x007f266f", "addBannedAccountForCollection(bytes)", {"data": p.bytes}, ),
    addTrustedChannelForCollection: fun("0xeb86707b", "addTrustedChannelForCollection(bytes)", {"data": p.bytes}, ),
    bulkAcceptOffers: fun("0x88d64fe8", "bulkAcceptOffers(bytes)", {"data": p.bytes}, ),
    bulkBuyListings: fun("0x863eb2d2", "bulkBuyListings(bytes)", {"data": p.bytes}, ),
    buyListing: fun("0xc32dacae", "buyListing(bytes)", {"data": p.bytes}, ),
    collectionBountySettings: viewFun("0x4c22daf9", "collectionBountySettings(address)", {"tokenAddress": p.address}, {"royaltyBountyNumerator": p.uint16, "exclusiveBountyReceiver": p.address}),
    collectionPaymentSettings: viewFun("0xc0be2688", "collectionPaymentSettings(address)", {"tokenAddress": p.address}, p.struct({"paymentSettings": p.uint8, "paymentMethodWhitelistId": p.uint32, "constrainedPricingPaymentMethod": p.address, "royaltyBackfillNumerator": p.uint16, "royaltyBountyNumerator": p.uint16, "isRoyaltyBountyExclusive": p.bool, "blockTradesFromUntrustedChannels": p.bool, "blockBannedAccounts": p.bool})),
    collectionRoyaltyBackfillSettings: viewFun("0x2c64ee2f", "collectionRoyaltyBackfillSettings(address)", {"tokenAddress": p.address}, {"royaltyBackfillNumerator": p.uint16, "royaltyBackfillReceiver": p.address}),
    createPaymentMethodWhitelist: fun("0x6ed56ba8", "createPaymentMethodWhitelist(bytes)", {"data": p.bytes}, p.uint32),
    destroyCosigner: fun("0xf8689bf4", "destroyCosigner(bytes)", {"data": p.bytes}, ),
    eip712Domain: viewFun("0x84b0196e", "eip712Domain()", {}, {"fields": p.bytes1, "name": p.string, "version": p.string, "chainId": p.uint256, "verifyingContract": p.address, "salt": p.bytes32, "extensions": p.array(p.uint256)}),
    getBannedAccounts: viewFun("0x983a1e1a", "getBannedAccounts(address)", {"tokenAddress": p.address}, p.array(p.address)),
    getCeilingPrice: viewFun("0x26ed4aa1", "getCeilingPrice(address,uint256)", {"tokenAddress": p.address, "tokenId": p.uint256}, p.uint256),
    getDefaultPaymentMethods: viewFun("0x65c50a8b", "getDefaultPaymentMethods()", {}, p.array(p.address)),
    getDomainSeparator: viewFun("0xed24911d", "getDomainSeparator()", {}, p.bytes32),
    getFloorPrice: viewFun("0x7996eef0", "getFloorPrice(address,uint256)", {"tokenAddress": p.address, "tokenId": p.uint256}, p.uint256),
    getTrustedChannels: viewFun("0x9b95711f", "getTrustedChannels(address)", {"tokenAddress": p.address}, p.array(p.address)),
    getWhitelistedPaymentMethods: viewFun("0xa797a263", "getWhitelistedPaymentMethods(uint32)", {"paymentMethodWhitelistId": p.uint32}, p.array(p.address)),
    isDefaultPaymentMethod: viewFun("0xfa6a8da1", "isDefaultPaymentMethod(address)", {"paymentMethod": p.address}, p.bool),
    isNonceUsed: viewFun("0xcab7e8eb", "isNonceUsed(address,uint256)", {"account": p.address, "nonce": p.uint256}, p.bool),
    isPaymentMethodWhitelisted: viewFun("0xf7d09689", "isPaymentMethodWhitelisted(uint32,address)", {"paymentMethodWhitelistId": p.uint32, "paymentMethod": p.address}, p.bool),
    lastPaymentMethodWhitelistId: viewFun("0xb01f89ef", "lastPaymentMethodWhitelistId()", {}, p.uint32),
    masterNonces: viewFun("0x45253c53", "masterNonces(address)", {"account": p.address}, p.uint256),
    paymentMethodWhitelistOwners: viewFun("0x0557e27e", "paymentMethodWhitelistOwners(uint32)", {"paymentMethodWhitelistId": p.uint32}, p.address),
    reassignOwnershipOfPaymentMethodWhitelist: fun("0x9ba5520a", "reassignOwnershipOfPaymentMethodWhitelist(bytes)", {"data": p.bytes}, ),
    remainingFillableQuantity: viewFun("0xd3005213", "remainingFillableQuantity(address,bytes32)", {"account": p.address, "orderDigest": p.bytes32}, p.struct({"state": p.uint8, "remainingFillableQuantity": p.uint248})),
    removeBannedAccountForCollection: fun("0x1f376cfb", "removeBannedAccountForCollection(bytes)", {"data": p.bytes}, ),
    removeTrustedChannelForCollection: fun("0xff9872c6", "removeTrustedChannelForCollection(bytes)", {"data": p.bytes}, ),
    renounceOwnershipOfPaymentMethodWhitelist: fun("0x747ddac5", "renounceOwnershipOfPaymentMethodWhitelist(bytes)", {"data": p.bytes}, ),
    revokeMasterNonce: fun("0x226d4adb", "revokeMasterNonce()", {}, ),
    revokeOrderDigest: fun("0x38ae410a", "revokeOrderDigest(bytes)", {"data": p.bytes}, ),
    revokeSingleNonce: fun("0xc031f43a", "revokeSingleNonce(bytes)", {"data": p.bytes}, ),
    setCollectionPaymentSettings: fun("0x86817d7d", "setCollectionPaymentSettings(bytes)", {"data": p.bytes}, ),
    setCollectionPricingBounds: fun("0x9d7d1f9e", "setCollectionPricingBounds(bytes)", {"data": p.bytes}, ),
    setTokenPricingBounds: fun("0x18d5fb30", "setTokenPricingBounds(bytes)", {"data": p.bytes}, ),
    sweepCollection: fun("0x96c3ae25", "sweepCollection(bytes)", {"data": p.bytes}, ),
    unwhitelistPaymentMethod: fun("0x4dec1723", "unwhitelistPaymentMethod(bytes)", {"data": p.bytes}, ),
    whitelistPaymentMethod: fun("0x95e138ac", "whitelistPaymentMethod(bytes)", {"data": p.bytes}, ),
}

export class Contract extends ContractBase {

    collectionBountySettings(tokenAddress: CollectionBountySettingsParams["tokenAddress"]) {
        return this.eth_call(functions.collectionBountySettings, {tokenAddress})
    }

    collectionPaymentSettings(tokenAddress: CollectionPaymentSettingsParams["tokenAddress"]) {
        return this.eth_call(functions.collectionPaymentSettings, {tokenAddress})
    }

    collectionRoyaltyBackfillSettings(tokenAddress: CollectionRoyaltyBackfillSettingsParams["tokenAddress"]) {
        return this.eth_call(functions.collectionRoyaltyBackfillSettings, {tokenAddress})
    }

    eip712Domain() {
        return this.eth_call(functions.eip712Domain, {})
    }

    getBannedAccounts(tokenAddress: GetBannedAccountsParams["tokenAddress"]) {
        return this.eth_call(functions.getBannedAccounts, {tokenAddress})
    }

    getCeilingPrice(tokenAddress: GetCeilingPriceParams["tokenAddress"], tokenId: GetCeilingPriceParams["tokenId"]) {
        return this.eth_call(functions.getCeilingPrice, {tokenAddress, tokenId})
    }

    getDefaultPaymentMethods() {
        return this.eth_call(functions.getDefaultPaymentMethods, {})
    }

    getDomainSeparator() {
        return this.eth_call(functions.getDomainSeparator, {})
    }

    getFloorPrice(tokenAddress: GetFloorPriceParams["tokenAddress"], tokenId: GetFloorPriceParams["tokenId"]) {
        return this.eth_call(functions.getFloorPrice, {tokenAddress, tokenId})
    }

    getTrustedChannels(tokenAddress: GetTrustedChannelsParams["tokenAddress"]) {
        return this.eth_call(functions.getTrustedChannels, {tokenAddress})
    }

    getWhitelistedPaymentMethods(paymentMethodWhitelistId: GetWhitelistedPaymentMethodsParams["paymentMethodWhitelistId"]) {
        return this.eth_call(functions.getWhitelistedPaymentMethods, {paymentMethodWhitelistId})
    }

    isDefaultPaymentMethod(paymentMethod: IsDefaultPaymentMethodParams["paymentMethod"]) {
        return this.eth_call(functions.isDefaultPaymentMethod, {paymentMethod})
    }

    isNonceUsed(account: IsNonceUsedParams["account"], nonce: IsNonceUsedParams["nonce"]) {
        return this.eth_call(functions.isNonceUsed, {account, nonce})
    }

    isPaymentMethodWhitelisted(paymentMethodWhitelistId: IsPaymentMethodWhitelistedParams["paymentMethodWhitelistId"], paymentMethod: IsPaymentMethodWhitelistedParams["paymentMethod"]) {
        return this.eth_call(functions.isPaymentMethodWhitelisted, {paymentMethodWhitelistId, paymentMethod})
    }

    lastPaymentMethodWhitelistId() {
        return this.eth_call(functions.lastPaymentMethodWhitelistId, {})
    }

    masterNonces(account: MasterNoncesParams["account"]) {
        return this.eth_call(functions.masterNonces, {account})
    }

    paymentMethodWhitelistOwners(paymentMethodWhitelistId: PaymentMethodWhitelistOwnersParams["paymentMethodWhitelistId"]) {
        return this.eth_call(functions.paymentMethodWhitelistOwners, {paymentMethodWhitelistId})
    }

    remainingFillableQuantity(account: RemainingFillableQuantityParams["account"], orderDigest: RemainingFillableQuantityParams["orderDigest"]) {
        return this.eth_call(functions.remainingFillableQuantity, {account, orderDigest})
    }
}

/// Event types
export type AcceptOfferERC1155EventArgs = EParams<typeof events.AcceptOfferERC1155>
export type AcceptOfferERC721EventArgs = EParams<typeof events.AcceptOfferERC721>
export type BannedAccountAddedForCollectionEventArgs = EParams<typeof events.BannedAccountAddedForCollection>
export type BannedAccountRemovedForCollectionEventArgs = EParams<typeof events.BannedAccountRemovedForCollection>
export type BuyListingERC1155EventArgs = EParams<typeof events.BuyListingERC1155>
export type BuyListingERC721EventArgs = EParams<typeof events.BuyListingERC721>
export type CreatedPaymentMethodWhitelistEventArgs = EParams<typeof events.CreatedPaymentMethodWhitelist>
export type DestroyedCosignerEventArgs = EParams<typeof events.DestroyedCosigner>
export type EIP712DomainChangedEventArgs = EParams<typeof events.EIP712DomainChanged>
export type MasterNonceInvalidatedEventArgs = EParams<typeof events.MasterNonceInvalidated>
export type NonceInvalidatedEventArgs = EParams<typeof events.NonceInvalidated>
export type OrderDigestInvalidatedEventArgs = EParams<typeof events.OrderDigestInvalidated>
export type PaymentMethodAddedToWhitelistEventArgs = EParams<typeof events.PaymentMethodAddedToWhitelist>
export type PaymentMethodRemovedFromWhitelistEventArgs = EParams<typeof events.PaymentMethodRemovedFromWhitelist>
export type ReassignedPaymentMethodWhitelistOwnershipEventArgs = EParams<typeof events.ReassignedPaymentMethodWhitelistOwnership>
export type TrustedChannelAddedForCollectionEventArgs = EParams<typeof events.TrustedChannelAddedForCollection>
export type TrustedChannelRemovedForCollectionEventArgs = EParams<typeof events.TrustedChannelRemovedForCollection>
export type UpdatedCollectionLevelPricingBoundariesEventArgs = EParams<typeof events.UpdatedCollectionLevelPricingBoundaries>
export type UpdatedCollectionPaymentSettingsEventArgs = EParams<typeof events.UpdatedCollectionPaymentSettings>
export type UpdatedTokenLevelPricingBoundariesEventArgs = EParams<typeof events.UpdatedTokenLevelPricingBoundaries>

/// Function types
export type AcceptOfferParams = FunctionArguments<typeof functions.acceptOffer>
export type AcceptOfferReturn = FunctionReturn<typeof functions.acceptOffer>

export type AddBannedAccountForCollectionParams = FunctionArguments<typeof functions.addBannedAccountForCollection>
export type AddBannedAccountForCollectionReturn = FunctionReturn<typeof functions.addBannedAccountForCollection>

export type AddTrustedChannelForCollectionParams = FunctionArguments<typeof functions.addTrustedChannelForCollection>
export type AddTrustedChannelForCollectionReturn = FunctionReturn<typeof functions.addTrustedChannelForCollection>

export type BulkAcceptOffersParams = FunctionArguments<typeof functions.bulkAcceptOffers>
export type BulkAcceptOffersReturn = FunctionReturn<typeof functions.bulkAcceptOffers>

export type BulkBuyListingsParams = FunctionArguments<typeof functions.bulkBuyListings>
export type BulkBuyListingsReturn = FunctionReturn<typeof functions.bulkBuyListings>

export type BuyListingParams = FunctionArguments<typeof functions.buyListing>
export type BuyListingReturn = FunctionReturn<typeof functions.buyListing>

export type CollectionBountySettingsParams = FunctionArguments<typeof functions.collectionBountySettings>
export type CollectionBountySettingsReturn = FunctionReturn<typeof functions.collectionBountySettings>

export type CollectionPaymentSettingsParams = FunctionArguments<typeof functions.collectionPaymentSettings>
export type CollectionPaymentSettingsReturn = FunctionReturn<typeof functions.collectionPaymentSettings>

export type CollectionRoyaltyBackfillSettingsParams = FunctionArguments<typeof functions.collectionRoyaltyBackfillSettings>
export type CollectionRoyaltyBackfillSettingsReturn = FunctionReturn<typeof functions.collectionRoyaltyBackfillSettings>

export type CreatePaymentMethodWhitelistParams = FunctionArguments<typeof functions.createPaymentMethodWhitelist>
export type CreatePaymentMethodWhitelistReturn = FunctionReturn<typeof functions.createPaymentMethodWhitelist>

export type DestroyCosignerParams = FunctionArguments<typeof functions.destroyCosigner>
export type DestroyCosignerReturn = FunctionReturn<typeof functions.destroyCosigner>

export type Eip712DomainParams = FunctionArguments<typeof functions.eip712Domain>
export type Eip712DomainReturn = FunctionReturn<typeof functions.eip712Domain>

export type GetBannedAccountsParams = FunctionArguments<typeof functions.getBannedAccounts>
export type GetBannedAccountsReturn = FunctionReturn<typeof functions.getBannedAccounts>

export type GetCeilingPriceParams = FunctionArguments<typeof functions.getCeilingPrice>
export type GetCeilingPriceReturn = FunctionReturn<typeof functions.getCeilingPrice>

export type GetDefaultPaymentMethodsParams = FunctionArguments<typeof functions.getDefaultPaymentMethods>
export type GetDefaultPaymentMethodsReturn = FunctionReturn<typeof functions.getDefaultPaymentMethods>

export type GetDomainSeparatorParams = FunctionArguments<typeof functions.getDomainSeparator>
export type GetDomainSeparatorReturn = FunctionReturn<typeof functions.getDomainSeparator>

export type GetFloorPriceParams = FunctionArguments<typeof functions.getFloorPrice>
export type GetFloorPriceReturn = FunctionReturn<typeof functions.getFloorPrice>

export type GetTrustedChannelsParams = FunctionArguments<typeof functions.getTrustedChannels>
export type GetTrustedChannelsReturn = FunctionReturn<typeof functions.getTrustedChannels>

export type GetWhitelistedPaymentMethodsParams = FunctionArguments<typeof functions.getWhitelistedPaymentMethods>
export type GetWhitelistedPaymentMethodsReturn = FunctionReturn<typeof functions.getWhitelistedPaymentMethods>

export type IsDefaultPaymentMethodParams = FunctionArguments<typeof functions.isDefaultPaymentMethod>
export type IsDefaultPaymentMethodReturn = FunctionReturn<typeof functions.isDefaultPaymentMethod>

export type IsNonceUsedParams = FunctionArguments<typeof functions.isNonceUsed>
export type IsNonceUsedReturn = FunctionReturn<typeof functions.isNonceUsed>

export type IsPaymentMethodWhitelistedParams = FunctionArguments<typeof functions.isPaymentMethodWhitelisted>
export type IsPaymentMethodWhitelistedReturn = FunctionReturn<typeof functions.isPaymentMethodWhitelisted>

export type LastPaymentMethodWhitelistIdParams = FunctionArguments<typeof functions.lastPaymentMethodWhitelistId>
export type LastPaymentMethodWhitelistIdReturn = FunctionReturn<typeof functions.lastPaymentMethodWhitelistId>

export type MasterNoncesParams = FunctionArguments<typeof functions.masterNonces>
export type MasterNoncesReturn = FunctionReturn<typeof functions.masterNonces>

export type PaymentMethodWhitelistOwnersParams = FunctionArguments<typeof functions.paymentMethodWhitelistOwners>
export type PaymentMethodWhitelistOwnersReturn = FunctionReturn<typeof functions.paymentMethodWhitelistOwners>

export type ReassignOwnershipOfPaymentMethodWhitelistParams = FunctionArguments<typeof functions.reassignOwnershipOfPaymentMethodWhitelist>
export type ReassignOwnershipOfPaymentMethodWhitelistReturn = FunctionReturn<typeof functions.reassignOwnershipOfPaymentMethodWhitelist>

export type RemainingFillableQuantityParams = FunctionArguments<typeof functions.remainingFillableQuantity>
export type RemainingFillableQuantityReturn = FunctionReturn<typeof functions.remainingFillableQuantity>

export type RemoveBannedAccountForCollectionParams = FunctionArguments<typeof functions.removeBannedAccountForCollection>
export type RemoveBannedAccountForCollectionReturn = FunctionReturn<typeof functions.removeBannedAccountForCollection>

export type RemoveTrustedChannelForCollectionParams = FunctionArguments<typeof functions.removeTrustedChannelForCollection>
export type RemoveTrustedChannelForCollectionReturn = FunctionReturn<typeof functions.removeTrustedChannelForCollection>

export type RenounceOwnershipOfPaymentMethodWhitelistParams = FunctionArguments<typeof functions.renounceOwnershipOfPaymentMethodWhitelist>
export type RenounceOwnershipOfPaymentMethodWhitelistReturn = FunctionReturn<typeof functions.renounceOwnershipOfPaymentMethodWhitelist>

export type RevokeMasterNonceParams = FunctionArguments<typeof functions.revokeMasterNonce>
export type RevokeMasterNonceReturn = FunctionReturn<typeof functions.revokeMasterNonce>

export type RevokeOrderDigestParams = FunctionArguments<typeof functions.revokeOrderDigest>
export type RevokeOrderDigestReturn = FunctionReturn<typeof functions.revokeOrderDigest>

export type RevokeSingleNonceParams = FunctionArguments<typeof functions.revokeSingleNonce>
export type RevokeSingleNonceReturn = FunctionReturn<typeof functions.revokeSingleNonce>

export type SetCollectionPaymentSettingsParams = FunctionArguments<typeof functions.setCollectionPaymentSettings>
export type SetCollectionPaymentSettingsReturn = FunctionReturn<typeof functions.setCollectionPaymentSettings>

export type SetCollectionPricingBoundsParams = FunctionArguments<typeof functions.setCollectionPricingBounds>
export type SetCollectionPricingBoundsReturn = FunctionReturn<typeof functions.setCollectionPricingBounds>

export type SetTokenPricingBoundsParams = FunctionArguments<typeof functions.setTokenPricingBounds>
export type SetTokenPricingBoundsReturn = FunctionReturn<typeof functions.setTokenPricingBounds>

export type SweepCollectionParams = FunctionArguments<typeof functions.sweepCollection>
export type SweepCollectionReturn = FunctionReturn<typeof functions.sweepCollection>

export type UnwhitelistPaymentMethodParams = FunctionArguments<typeof functions.unwhitelistPaymentMethod>
export type UnwhitelistPaymentMethodReturn = FunctionReturn<typeof functions.unwhitelistPaymentMethod>

export type WhitelistPaymentMethodParams = FunctionArguments<typeof functions.whitelistPaymentMethod>
export type WhitelistPaymentMethodReturn = FunctionReturn<typeof functions.whitelistPaymentMethod>

