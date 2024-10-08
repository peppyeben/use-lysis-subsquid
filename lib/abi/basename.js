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
    DiscountApplied: (0, evm_abi_1.event)("0xfe82878a5987cea7129c337d7aaa6a49585236fc104b066223bc5b5e49510e2b", "DiscountApplied(address,bytes32)", { "registrant": (0, evm_abi_1.indexed)(p.address), "discountKey": (0, evm_abi_1.indexed)(p.bytes32) }),
    DiscountUpdated: (0, evm_abi_1.event)("0x8e8593a48f626f59b50ae7022bc900a089280e27a89c5d7c1a4ca9a4338b47d1", "DiscountUpdated(bytes32,(bool,address,bytes32,uint256))", { "discountKey": (0, evm_abi_1.indexed)(p.bytes32), "details": p.struct({ "active": p.bool, "discountValidator": p.address, "key": p.bytes32, "discount": p.uint256 }) }),
    ETHPaymentProcessed: (0, evm_abi_1.event)("0xbc769889246686134856b409155bb87630ea5797a705fa98b61f576d316aab9b", "ETHPaymentProcessed(address,uint256)", { "payee": (0, evm_abi_1.indexed)(p.address), "price": p.uint256 }),
    NameRegistered: (0, evm_abi_1.event)("0x0667086d08417333ce63f40d5bc2ef6fd330e25aaaf317b7c489541f8fe600fa", "NameRegistered(string,bytes32,address,uint256)", { "name": p.string, "label": (0, evm_abi_1.indexed)(p.bytes32), "owner": (0, evm_abi_1.indexed)(p.address), "expires": p.uint256 }),
    NameRenewed: (0, evm_abi_1.event)("0x93bc1a84707231b1d9552157299797c64a1a8c5bc79f05153716630c9c4936fc", "NameRenewed(string,bytes32,uint256)", { "name": p.string, "label": (0, evm_abi_1.indexed)(p.bytes32), "expires": p.uint256 }),
    OwnershipHandoverCanceled: (0, evm_abi_1.event)("0xfa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92", "OwnershipHandoverCanceled(address)", { "pendingOwner": (0, evm_abi_1.indexed)(p.address) }),
    OwnershipHandoverRequested: (0, evm_abi_1.event)("0xdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d", "OwnershipHandoverRequested(address)", { "pendingOwner": (0, evm_abi_1.indexed)(p.address) }),
    OwnershipTransferred: (0, evm_abi_1.event)("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", { "oldOwner": (0, evm_abi_1.indexed)(p.address), "newOwner": (0, evm_abi_1.indexed)(p.address) }),
    PaymentReceiverUpdated: (0, evm_abi_1.event)("0x6cfddd24d2afc1b9f31d51f0ef77029fdde044799f0a87a2a09b7673b6097422", "PaymentReceiverUpdated(address)", { "newPaymentReceiver": p.address }),
    PriceOracleUpdated: (0, evm_abi_1.event)("0xefe8ab924ca486283a79dc604baa67add51afb82af1db8ac386ebbba643cdffd", "PriceOracleUpdated(address)", { "newPrices": p.address }),
    ReverseRegistrarUpdated: (0, evm_abi_1.event)("0xd192c0b229b00473ccb6ccfebf6642805bca1dcdf2d9fb4fd102c7dc7ea4ce23", "ReverseRegistrarUpdated(address)", { "newReverseRegistrar": p.address }),
};
exports.functions = {
    MIN_NAME_LENGTH: (0, evm_abi_1.viewFun)("0x50cfeddd", "MIN_NAME_LENGTH()", {}, p.uint256),
    MIN_REGISTRATION_DURATION: (0, evm_abi_1.viewFun)("0x8a95b09f", "MIN_REGISTRATION_DURATION()", {}, p.uint256),
    available: (0, evm_abi_1.viewFun)("0xaeb8ce9b", "available(string)", { "name": p.string }, p.bool),
    cancelOwnershipHandover: (0, evm_abi_1.fun)("0x54d1f13d", "cancelOwnershipHandover()", {}),
    completeOwnershipHandover: (0, evm_abi_1.fun)("0xf04e283e", "completeOwnershipHandover(address)", { "pendingOwner": p.address }),
    discountedRegister: (0, evm_abi_1.fun)("0xe0093eda", "discountedRegister((string,address,uint256,address,bytes[],bool),bytes32,bytes)", { "request": p.struct({ "name": p.string, "owner": p.address, "duration": p.uint256, "resolver": p.address, "data": p.array(p.bytes), "reverseRecord": p.bool }), "discountKey": p.bytes32, "validationData": p.bytes }),
    discountedRegisterPrice: (0, evm_abi_1.viewFun)("0xedd7f501", "discountedRegisterPrice(string,uint256,bytes32)", { "name": p.string, "duration": p.uint256, "discountKey": p.bytes32 }, p.uint256),
    discountedRegistrants: (0, evm_abi_1.viewFun)("0x06aa55b2", "discountedRegistrants(address)", { "registrant": p.address }, p.bool),
    discounts: (0, evm_abi_1.viewFun)("0xbb3cc56f", "discounts(bytes32)", { "key": p.bytes32 }, { "active": p.bool, "discountValidator": p.address, "key": p.bytes32, "discount": p.uint256 }),
    getActiveDiscounts: (0, evm_abi_1.viewFun)("0xb053bc17", "getActiveDiscounts()", {}, p.array(p.struct({ "active": p.bool, "discountValidator": p.address, "key": p.bytes32, "discount": p.uint256 }))),
    hasRegisteredWithDiscount: (0, evm_abi_1.viewFun)("0x8e81d4f0", "hasRegisteredWithDiscount(address[])", { "addresses": p.array(p.address) }, p.bool),
    launchTime: (0, evm_abi_1.viewFun)("0x790ca413", "launchTime()", {}, p.uint256),
    owner: (0, evm_abi_1.viewFun)("0x8da5cb5b", "owner()", {}, p.address),
    ownershipHandoverExpiresAt: (0, evm_abi_1.viewFun)("0xfee81cf4", "ownershipHandoverExpiresAt(address)", { "pendingOwner": p.address }, p.uint256),
    paymentReceiver: (0, evm_abi_1.viewFun)("0xcb37f3b2", "paymentReceiver()", {}, p.address),
    prices: (0, evm_abi_1.viewFun)("0xd3419bf3", "prices()", {}, p.address),
    recoverFunds: (0, evm_abi_1.fun)("0x5d3590d5", "recoverFunds(address,address,uint256)", { "_token": p.address, "_to": p.address, "_amount": p.uint256 }),
    register: (0, evm_abi_1.fun)("0xc7c79676", "register((string,address,uint256,address,bytes[],bool))", { "request": p.struct({ "name": p.string, "owner": p.address, "duration": p.uint256, "resolver": p.address, "data": p.array(p.bytes), "reverseRecord": p.bool }) }),
    registerPrice: (0, evm_abi_1.viewFun)("0xe72c1e55", "registerPrice(string,uint256)", { "name": p.string, "duration": p.uint256 }, p.uint256),
    renew: (0, evm_abi_1.fun)("0xacf1a841", "renew(string,uint256)", { "name": p.string, "duration": p.uint256 }),
    renounceOwnership: (0, evm_abi_1.fun)("0x715018a6", "renounceOwnership()", {}),
    rentPrice: (0, evm_abi_1.viewFun)("0x83e7f6ff", "rentPrice(string,uint256)", { "name": p.string, "duration": p.uint256 }, p.struct({ "base": p.uint256, "premium": p.uint256 })),
    requestOwnershipHandover: (0, evm_abi_1.fun)("0x25692962", "requestOwnershipHandover()", {}),
    reverseRegistrar: (0, evm_abi_1.viewFun)("0x80869853", "reverseRegistrar()", {}, p.address),
    rootName: (0, evm_abi_1.viewFun)("0xf20387df", "rootName()", {}, p.string),
    rootNode: (0, evm_abi_1.viewFun)("0xfaff50a8", "rootNode()", {}, p.bytes32),
    setDiscountDetails: (0, evm_abi_1.fun)("0x682baa90", "setDiscountDetails((bool,address,bytes32,uint256))", { "details": p.struct({ "active": p.bool, "discountValidator": p.address, "key": p.bytes32, "discount": p.uint256 }) }),
    setLaunchTime: (0, evm_abi_1.fun)("0x9ff46e74", "setLaunchTime(uint256)", { "launchTime_": p.uint256 }),
    setPaymentReceiver: (0, evm_abi_1.fun)("0x65ebf99a", "setPaymentReceiver(address)", { "paymentReceiver_": p.address }),
    setPriceOracle: (0, evm_abi_1.fun)("0x530e784f", "setPriceOracle(address)", { "prices_": p.address }),
    setReverseRegistrar: (0, evm_abi_1.fun)("0x557499ba", "setReverseRegistrar(address)", { "reverse_": p.address }),
    transferOwnership: (0, evm_abi_1.fun)("0xf2fde38b", "transferOwnership(address)", { "newOwner": p.address }),
    valid: (0, evm_abi_1.viewFun)("0x9791c097", "valid(string)", { "name": p.string }, p.bool),
    withdrawETH: (0, evm_abi_1.fun)("0xe086e5ec", "withdrawETH()", {}),
};
class Contract extends evm_abi_1.ContractBase {
    MIN_NAME_LENGTH() {
        return this.eth_call(exports.functions.MIN_NAME_LENGTH, {});
    }
    MIN_REGISTRATION_DURATION() {
        return this.eth_call(exports.functions.MIN_REGISTRATION_DURATION, {});
    }
    available(name) {
        return this.eth_call(exports.functions.available, { name });
    }
    discountedRegisterPrice(name, duration, discountKey) {
        return this.eth_call(exports.functions.discountedRegisterPrice, { name, duration, discountKey });
    }
    discountedRegistrants(registrant) {
        return this.eth_call(exports.functions.discountedRegistrants, { registrant });
    }
    discounts(key) {
        return this.eth_call(exports.functions.discounts, { key });
    }
    getActiveDiscounts() {
        return this.eth_call(exports.functions.getActiveDiscounts, {});
    }
    hasRegisteredWithDiscount(addresses) {
        return this.eth_call(exports.functions.hasRegisteredWithDiscount, { addresses });
    }
    launchTime() {
        return this.eth_call(exports.functions.launchTime, {});
    }
    owner() {
        return this.eth_call(exports.functions.owner, {});
    }
    ownershipHandoverExpiresAt(pendingOwner) {
        return this.eth_call(exports.functions.ownershipHandoverExpiresAt, { pendingOwner });
    }
    paymentReceiver() {
        return this.eth_call(exports.functions.paymentReceiver, {});
    }
    prices() {
        return this.eth_call(exports.functions.prices, {});
    }
    registerPrice(name, duration) {
        return this.eth_call(exports.functions.registerPrice, { name, duration });
    }
    rentPrice(name, duration) {
        return this.eth_call(exports.functions.rentPrice, { name, duration });
    }
    reverseRegistrar() {
        return this.eth_call(exports.functions.reverseRegistrar, {});
    }
    rootName() {
        return this.eth_call(exports.functions.rootName, {});
    }
    rootNode() {
        return this.eth_call(exports.functions.rootNode, {});
    }
    valid(name) {
        return this.eth_call(exports.functions.valid, { name });
    }
}
exports.Contract = Contract;
