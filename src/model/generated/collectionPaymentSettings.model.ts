import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class CollectionPaymentSettings {
    constructor(props?: Partial<CollectionPaymentSettings>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    tokenAddress!: string

    @BigIntColumn_({nullable: true})
    paymentMethodWhitelistId!: bigint | undefined | null

    @StringColumn_({nullable: true})
    constrainedPricingPaymentMethod!: string | undefined | null

    @BooleanColumn_({nullable: false})
    blockTradesFromUntrustedChannels!: boolean

    @BooleanColumn_({nullable: false})
    blockBannedAccounts!: boolean

    @BigIntColumn_({nullable: false})
    lastUpdated!: bigint
}
