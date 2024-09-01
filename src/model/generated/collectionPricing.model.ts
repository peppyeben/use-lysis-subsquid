import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class CollectionPricing {
    constructor(props?: Partial<CollectionPricing>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    tokenAddress!: string

    @BigIntColumn_({nullable: false})
    floorPrice!: bigint

    @BigIntColumn_({nullable: false})
    ceilingPrice!: bigint

    @BigIntColumn_({nullable: false})
    lastUpdated!: bigint
}
