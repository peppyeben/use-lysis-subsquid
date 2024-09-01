import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class CancellationEvent {
    constructor(props?: Partial<CancellationEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    account!: string

    @BigIntColumn_({nullable: true})
    nonce!: bigint | undefined | null

    @StringColumn_({nullable: true})
    orderDigest!: string | undefined | null

    @BigIntColumn_({nullable: false})
    timestamp!: bigint

    @StringColumn_({nullable: false})
    cancellationType!: string
}
