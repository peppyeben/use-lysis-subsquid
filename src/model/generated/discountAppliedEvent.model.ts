import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class DiscountAppliedEvent {
    constructor(props?: Partial<DiscountAppliedEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    registrant!: string

    @StringColumn_({nullable: false})
    discountKey!: string
}
