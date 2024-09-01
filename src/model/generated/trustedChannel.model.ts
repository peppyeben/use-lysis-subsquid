import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BooleanColumn as BooleanColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class TrustedChannel {
    constructor(props?: Partial<TrustedChannel>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    tokenAddress!: string

    @Index_()
    @StringColumn_({nullable: false})
    channelAddress!: string

    @BooleanColumn_({nullable: false})
    isCurrentlyTrusted!: boolean

    @BigIntColumn_({nullable: false})
    lastUpdated!: bigint
}
