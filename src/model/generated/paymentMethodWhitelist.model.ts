import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, Index as Index_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class PaymentMethodWhitelist {
    constructor(props?: Partial<PaymentMethodWhitelist>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    whitelistId!: bigint

    @Index_()
    @StringColumn_({nullable: false})
    owner!: string

    @StringColumn_({nullable: false})
    name!: string

    @StringColumn_({array: true, nullable: false})
    paymentMethods!: (string)[]
}
