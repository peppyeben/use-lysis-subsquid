import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class CollectionRoyalty {
    constructor(props?: Partial<CollectionRoyalty>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    tokenAddress!: string

    @IntColumn_({nullable: false})
    royaltyBackfillNumerator!: number

    @StringColumn_({nullable: false})
    royaltyBackfillReceiver!: string

    @IntColumn_({nullable: false})
    royaltyBountyNumerator!: number

    @StringColumn_({nullable: true})
    exclusiveBountyReceiver!: string | undefined | null

    @BigIntColumn_({nullable: false})
    lastUpdated!: bigint
}
