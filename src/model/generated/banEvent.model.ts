import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class BanEvent {
    constructor(props?: Partial<BanEvent>) {
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
    timestamp!: bigint

    @StringColumn_({nullable: false})
    eventType!: string
}
