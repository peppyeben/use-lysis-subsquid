import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class NameRegisteredEvent {
    constructor(props?: Partial<NameRegisteredEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    name!: string

    @StringColumn_({nullable: false})
    label!: string

    @Index_()
    @StringColumn_({nullable: false})
    owner!: string

    @BigIntColumn_({nullable: false})
    expires!: bigint

    @BigIntColumn_({nullable: true})
    timestamp!: bigint | undefined | null
}
