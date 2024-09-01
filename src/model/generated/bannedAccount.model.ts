import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class BannedAccount {
    constructor(props?: Partial<BannedAccount>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    account!: string

    @Index_()
    @StringColumn_({nullable: false})
    tokenAddress!: string

    @BigIntColumn_({nullable: false})
    banTimestamp!: bigint

    @BooleanColumn_({nullable: false})
    isCurrentlyBanned!: boolean
}
