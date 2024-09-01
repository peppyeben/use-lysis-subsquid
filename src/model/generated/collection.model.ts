import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Collection {
    constructor(props?: Partial<Collection>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    address!: string

    @StringColumn_({nullable: true})
    name!: string | undefined | null

    @BigIntColumn_({nullable: false})
    totalSales!: bigint

    @BigIntColumn_({nullable: false})
    totalVolume!: bigint

    @BigIntColumn_({nullable: true})
    floorPrice!: bigint | undefined | null
}
