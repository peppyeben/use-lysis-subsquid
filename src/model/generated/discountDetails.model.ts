import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BooleanColumn as BooleanColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class DiscountDetails {
    constructor(props?: Partial<DiscountDetails>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BooleanColumn_({nullable: false})
    active!: boolean

    @StringColumn_({nullable: false})
    discountValidator!: string

    @StringColumn_({nullable: false})
    key!: string

    @BigIntColumn_({nullable: false})
    discount!: bigint
}
