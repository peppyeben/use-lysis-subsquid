import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    DiscountApplied: event("0xfe82878a5987cea7129c337d7aaa6a49585236fc104b066223bc5b5e49510e2b", "DiscountApplied(address,bytes32)", {"registrant": indexed(p.address), "discountKey": indexed(p.bytes32)}),
    DiscountUpdated: event("0x8e8593a48f626f59b50ae7022bc900a089280e27a89c5d7c1a4ca9a4338b47d1", "DiscountUpdated(bytes32,(bool,address,bytes32,uint256))", {"discountKey": indexed(p.bytes32), "details": p.struct({"active": p.bool, "discountValidator": p.address, "key": p.bytes32, "discount": p.uint256})}),
    ETHPaymentProcessed: event("0xbc769889246686134856b409155bb87630ea5797a705fa98b61f576d316aab9b", "ETHPaymentProcessed(address,uint256)", {"payee": indexed(p.address), "price": p.uint256}),
    NameRegistered: event("0x0667086d08417333ce63f40d5bc2ef6fd330e25aaaf317b7c489541f8fe600fa", "NameRegistered(string,bytes32,address,uint256)", {"name": p.string, "label": indexed(p.bytes32), "owner": indexed(p.address), "expires": p.uint256}),
    NameRenewed: event("0x93bc1a84707231b1d9552157299797c64a1a8c5bc79f05153716630c9c4936fc", "NameRenewed(string,bytes32,uint256)", {"name": p.string, "label": indexed(p.bytes32), "expires": p.uint256}),
    OwnershipHandoverCanceled: event("0xfa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92", "OwnershipHandoverCanceled(address)", {"pendingOwner": indexed(p.address)}),
    OwnershipHandoverRequested: event("0xdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d", "OwnershipHandoverRequested(address)", {"pendingOwner": indexed(p.address)}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"oldOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    PaymentReceiverUpdated: event("0x6cfddd24d2afc1b9f31d51f0ef77029fdde044799f0a87a2a09b7673b6097422", "PaymentReceiverUpdated(address)", {"newPaymentReceiver": p.address}),
    PriceOracleUpdated: event("0xefe8ab924ca486283a79dc604baa67add51afb82af1db8ac386ebbba643cdffd", "PriceOracleUpdated(address)", {"newPrices": p.address}),
    ReverseRegistrarUpdated: event("0xd192c0b229b00473ccb6ccfebf6642805bca1dcdf2d9fb4fd102c7dc7ea4ce23", "ReverseRegistrarUpdated(address)", {"newReverseRegistrar": p.address}),
}

export const functions = {
    MIN_NAME_LENGTH: viewFun("0x50cfeddd", "MIN_NAME_LENGTH()", {}, p.uint256),
    MIN_REGISTRATION_DURATION: viewFun("0x8a95b09f", "MIN_REGISTRATION_DURATION()", {}, p.uint256),
    available: viewFun("0xaeb8ce9b", "available(string)", {"name": p.string}, p.bool),
    cancelOwnershipHandover: fun("0x54d1f13d", "cancelOwnershipHandover()", {}, ),
    completeOwnershipHandover: fun("0xf04e283e", "completeOwnershipHandover(address)", {"pendingOwner": p.address}, ),
    discountedRegister: fun("0xe0093eda", "discountedRegister((string,address,uint256,address,bytes[],bool),bytes32,bytes)", {"request": p.struct({"name": p.string, "owner": p.address, "duration": p.uint256, "resolver": p.address, "data": p.array(p.bytes), "reverseRecord": p.bool}), "discountKey": p.bytes32, "validationData": p.bytes}, ),
    discountedRegisterPrice: viewFun("0xedd7f501", "discountedRegisterPrice(string,uint256,bytes32)", {"name": p.string, "duration": p.uint256, "discountKey": p.bytes32}, p.uint256),
    discountedRegistrants: viewFun("0x06aa55b2", "discountedRegistrants(address)", {"registrant": p.address}, p.bool),
    discounts: viewFun("0xbb3cc56f", "discounts(bytes32)", {"key": p.bytes32}, {"active": p.bool, "discountValidator": p.address, "key": p.bytes32, "discount": p.uint256}),
    getActiveDiscounts: viewFun("0xb053bc17", "getActiveDiscounts()", {}, p.array(p.struct({"active": p.bool, "discountValidator": p.address, "key": p.bytes32, "discount": p.uint256}))),
    hasRegisteredWithDiscount: viewFun("0x8e81d4f0", "hasRegisteredWithDiscount(address[])", {"addresses": p.array(p.address)}, p.bool),
    launchTime: viewFun("0x790ca413", "launchTime()", {}, p.uint256),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    ownershipHandoverExpiresAt: viewFun("0xfee81cf4", "ownershipHandoverExpiresAt(address)", {"pendingOwner": p.address}, p.uint256),
    paymentReceiver: viewFun("0xcb37f3b2", "paymentReceiver()", {}, p.address),
    prices: viewFun("0xd3419bf3", "prices()", {}, p.address),
    recoverFunds: fun("0x5d3590d5", "recoverFunds(address,address,uint256)", {"_token": p.address, "_to": p.address, "_amount": p.uint256}, ),
    register: fun("0xc7c79676", "register((string,address,uint256,address,bytes[],bool))", {"request": p.struct({"name": p.string, "owner": p.address, "duration": p.uint256, "resolver": p.address, "data": p.array(p.bytes), "reverseRecord": p.bool})}, ),
    registerPrice: viewFun("0xe72c1e55", "registerPrice(string,uint256)", {"name": p.string, "duration": p.uint256}, p.uint256),
    renew: fun("0xacf1a841", "renew(string,uint256)", {"name": p.string, "duration": p.uint256}, ),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    rentPrice: viewFun("0x83e7f6ff", "rentPrice(string,uint256)", {"name": p.string, "duration": p.uint256}, p.struct({"base": p.uint256, "premium": p.uint256})),
    requestOwnershipHandover: fun("0x25692962", "requestOwnershipHandover()", {}, ),
    reverseRegistrar: viewFun("0x80869853", "reverseRegistrar()", {}, p.address),
    rootName: viewFun("0xf20387df", "rootName()", {}, p.string),
    rootNode: viewFun("0xfaff50a8", "rootNode()", {}, p.bytes32),
    setDiscountDetails: fun("0x682baa90", "setDiscountDetails((bool,address,bytes32,uint256))", {"details": p.struct({"active": p.bool, "discountValidator": p.address, "key": p.bytes32, "discount": p.uint256})}, ),
    setLaunchTime: fun("0x9ff46e74", "setLaunchTime(uint256)", {"launchTime_": p.uint256}, ),
    setPaymentReceiver: fun("0x65ebf99a", "setPaymentReceiver(address)", {"paymentReceiver_": p.address}, ),
    setPriceOracle: fun("0x530e784f", "setPriceOracle(address)", {"prices_": p.address}, ),
    setReverseRegistrar: fun("0x557499ba", "setReverseRegistrar(address)", {"reverse_": p.address}, ),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    valid: viewFun("0x9791c097", "valid(string)", {"name": p.string}, p.bool),
    withdrawETH: fun("0xe086e5ec", "withdrawETH()", {}, ),
}

export class Contract extends ContractBase {

    MIN_NAME_LENGTH() {
        return this.eth_call(functions.MIN_NAME_LENGTH, {})
    }

    MIN_REGISTRATION_DURATION() {
        return this.eth_call(functions.MIN_REGISTRATION_DURATION, {})
    }

    available(name: AvailableParams["name"]) {
        return this.eth_call(functions.available, {name})
    }

    discountedRegisterPrice(name: DiscountedRegisterPriceParams["name"], duration: DiscountedRegisterPriceParams["duration"], discountKey: DiscountedRegisterPriceParams["discountKey"]) {
        return this.eth_call(functions.discountedRegisterPrice, {name, duration, discountKey})
    }

    discountedRegistrants(registrant: DiscountedRegistrantsParams["registrant"]) {
        return this.eth_call(functions.discountedRegistrants, {registrant})
    }

    discounts(key: DiscountsParams["key"]) {
        return this.eth_call(functions.discounts, {key})
    }

    getActiveDiscounts() {
        return this.eth_call(functions.getActiveDiscounts, {})
    }

    hasRegisteredWithDiscount(addresses: HasRegisteredWithDiscountParams["addresses"]) {
        return this.eth_call(functions.hasRegisteredWithDiscount, {addresses})
    }

    launchTime() {
        return this.eth_call(functions.launchTime, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    ownershipHandoverExpiresAt(pendingOwner: OwnershipHandoverExpiresAtParams["pendingOwner"]) {
        return this.eth_call(functions.ownershipHandoverExpiresAt, {pendingOwner})
    }

    paymentReceiver() {
        return this.eth_call(functions.paymentReceiver, {})
    }

    prices() {
        return this.eth_call(functions.prices, {})
    }

    registerPrice(name: RegisterPriceParams["name"], duration: RegisterPriceParams["duration"]) {
        return this.eth_call(functions.registerPrice, {name, duration})
    }

    rentPrice(name: RentPriceParams["name"], duration: RentPriceParams["duration"]) {
        return this.eth_call(functions.rentPrice, {name, duration})
    }

    reverseRegistrar() {
        return this.eth_call(functions.reverseRegistrar, {})
    }

    rootName() {
        return this.eth_call(functions.rootName, {})
    }

    rootNode() {
        return this.eth_call(functions.rootNode, {})
    }

    valid(name: ValidParams["name"]) {
        return this.eth_call(functions.valid, {name})
    }
}

/// Event types
export type DiscountAppliedEventArgs = EParams<typeof events.DiscountApplied>
export type DiscountUpdatedEventArgs = EParams<typeof events.DiscountUpdated>
export type ETHPaymentProcessedEventArgs = EParams<typeof events.ETHPaymentProcessed>
export type NameRegisteredEventArgs = EParams<typeof events.NameRegistered>
export type NameRenewedEventArgs = EParams<typeof events.NameRenewed>
export type OwnershipHandoverCanceledEventArgs = EParams<typeof events.OwnershipHandoverCanceled>
export type OwnershipHandoverRequestedEventArgs = EParams<typeof events.OwnershipHandoverRequested>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type PaymentReceiverUpdatedEventArgs = EParams<typeof events.PaymentReceiverUpdated>
export type PriceOracleUpdatedEventArgs = EParams<typeof events.PriceOracleUpdated>
export type ReverseRegistrarUpdatedEventArgs = EParams<typeof events.ReverseRegistrarUpdated>

/// Function types
export type MIN_NAME_LENGTHParams = FunctionArguments<typeof functions.MIN_NAME_LENGTH>
export type MIN_NAME_LENGTHReturn = FunctionReturn<typeof functions.MIN_NAME_LENGTH>

export type MIN_REGISTRATION_DURATIONParams = FunctionArguments<typeof functions.MIN_REGISTRATION_DURATION>
export type MIN_REGISTRATION_DURATIONReturn = FunctionReturn<typeof functions.MIN_REGISTRATION_DURATION>

export type AvailableParams = FunctionArguments<typeof functions.available>
export type AvailableReturn = FunctionReturn<typeof functions.available>

export type CancelOwnershipHandoverParams = FunctionArguments<typeof functions.cancelOwnershipHandover>
export type CancelOwnershipHandoverReturn = FunctionReturn<typeof functions.cancelOwnershipHandover>

export type CompleteOwnershipHandoverParams = FunctionArguments<typeof functions.completeOwnershipHandover>
export type CompleteOwnershipHandoverReturn = FunctionReturn<typeof functions.completeOwnershipHandover>

export type DiscountedRegisterParams = FunctionArguments<typeof functions.discountedRegister>
export type DiscountedRegisterReturn = FunctionReturn<typeof functions.discountedRegister>

export type DiscountedRegisterPriceParams = FunctionArguments<typeof functions.discountedRegisterPrice>
export type DiscountedRegisterPriceReturn = FunctionReturn<typeof functions.discountedRegisterPrice>

export type DiscountedRegistrantsParams = FunctionArguments<typeof functions.discountedRegistrants>
export type DiscountedRegistrantsReturn = FunctionReturn<typeof functions.discountedRegistrants>

export type DiscountsParams = FunctionArguments<typeof functions.discounts>
export type DiscountsReturn = FunctionReturn<typeof functions.discounts>

export type GetActiveDiscountsParams = FunctionArguments<typeof functions.getActiveDiscounts>
export type GetActiveDiscountsReturn = FunctionReturn<typeof functions.getActiveDiscounts>

export type HasRegisteredWithDiscountParams = FunctionArguments<typeof functions.hasRegisteredWithDiscount>
export type HasRegisteredWithDiscountReturn = FunctionReturn<typeof functions.hasRegisteredWithDiscount>

export type LaunchTimeParams = FunctionArguments<typeof functions.launchTime>
export type LaunchTimeReturn = FunctionReturn<typeof functions.launchTime>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type OwnershipHandoverExpiresAtParams = FunctionArguments<typeof functions.ownershipHandoverExpiresAt>
export type OwnershipHandoverExpiresAtReturn = FunctionReturn<typeof functions.ownershipHandoverExpiresAt>

export type PaymentReceiverParams = FunctionArguments<typeof functions.paymentReceiver>
export type PaymentReceiverReturn = FunctionReturn<typeof functions.paymentReceiver>

export type PricesParams = FunctionArguments<typeof functions.prices>
export type PricesReturn = FunctionReturn<typeof functions.prices>

export type RecoverFundsParams = FunctionArguments<typeof functions.recoverFunds>
export type RecoverFundsReturn = FunctionReturn<typeof functions.recoverFunds>

export type RegisterParams = FunctionArguments<typeof functions.register>
export type RegisterReturn = FunctionReturn<typeof functions.register>

export type RegisterPriceParams = FunctionArguments<typeof functions.registerPrice>
export type RegisterPriceReturn = FunctionReturn<typeof functions.registerPrice>

export type RenewParams = FunctionArguments<typeof functions.renew>
export type RenewReturn = FunctionReturn<typeof functions.renew>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type RentPriceParams = FunctionArguments<typeof functions.rentPrice>
export type RentPriceReturn = FunctionReturn<typeof functions.rentPrice>

export type RequestOwnershipHandoverParams = FunctionArguments<typeof functions.requestOwnershipHandover>
export type RequestOwnershipHandoverReturn = FunctionReturn<typeof functions.requestOwnershipHandover>

export type ReverseRegistrarParams = FunctionArguments<typeof functions.reverseRegistrar>
export type ReverseRegistrarReturn = FunctionReturn<typeof functions.reverseRegistrar>

export type RootNameParams = FunctionArguments<typeof functions.rootName>
export type RootNameReturn = FunctionReturn<typeof functions.rootName>

export type RootNodeParams = FunctionArguments<typeof functions.rootNode>
export type RootNodeReturn = FunctionReturn<typeof functions.rootNode>

export type SetDiscountDetailsParams = FunctionArguments<typeof functions.setDiscountDetails>
export type SetDiscountDetailsReturn = FunctionReturn<typeof functions.setDiscountDetails>

export type SetLaunchTimeParams = FunctionArguments<typeof functions.setLaunchTime>
export type SetLaunchTimeReturn = FunctionReturn<typeof functions.setLaunchTime>

export type SetPaymentReceiverParams = FunctionArguments<typeof functions.setPaymentReceiver>
export type SetPaymentReceiverReturn = FunctionReturn<typeof functions.setPaymentReceiver>

export type SetPriceOracleParams = FunctionArguments<typeof functions.setPriceOracle>
export type SetPriceOracleReturn = FunctionReturn<typeof functions.setPriceOracle>

export type SetReverseRegistrarParams = FunctionArguments<typeof functions.setReverseRegistrar>
export type SetReverseRegistrarReturn = FunctionReturn<typeof functions.setReverseRegistrar>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type ValidParams = FunctionArguments<typeof functions.valid>
export type ValidReturn = FunctionReturn<typeof functions.valid>

export type WithdrawETHParams = FunctionArguments<typeof functions.withdrawETH>
export type WithdrawETHReturn = FunctionReturn<typeof functions.withdrawETH>

