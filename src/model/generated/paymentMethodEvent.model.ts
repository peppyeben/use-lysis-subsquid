import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, Index as Index_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class PaymentMethodEvent {
    constructor(props?: Partial<PaymentMethodEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    whitelistId!: bigint

    @Index_()
    @StringColumn_({nullable: false})
    paymentMethod!: string

    @BigIntColumn_({nullable: false})
    timestamp!: bigint

    @StringColumn_({nullable: false})
    eventType!: string
}
