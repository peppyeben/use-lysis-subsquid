import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Sale {
    constructor(props?: Partial<Sale>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    buyer!: string

    @Index_()
    @StringColumn_({nullable: false})
    seller!: string

    @Index_()
    @StringColumn_({nullable: false})
    tokenAddress!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    tokenId!: bigint

    @BigIntColumn_({nullable: false})
    salePrice!: bigint

    @Index_()
    @StringColumn_({nullable: false})
    paymentCoin!: string

    @BigIntColumn_({nullable: false})
    timestamp!: bigint

    @BooleanColumn_({nullable: false})
    isERC721!: boolean
}
