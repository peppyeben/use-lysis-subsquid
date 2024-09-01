import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class PaymentReceiverUpdatedEvent {
    constructor(props?: Partial<PaymentReceiverUpdatedEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    newPaymentReceiver!: string
}
