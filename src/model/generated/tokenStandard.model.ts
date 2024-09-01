import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BooleanColumn as BooleanColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class TokenStandard {
    constructor(props?: Partial<TokenStandard>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    tokenAddress!: string

    @BooleanColumn_({nullable: false})
    isERC721!: boolean

    @BigIntColumn_({nullable: false})
    totalSales!: bigint

    @BigIntColumn_({nullable: false})
    totalVolume!: bigint
}
