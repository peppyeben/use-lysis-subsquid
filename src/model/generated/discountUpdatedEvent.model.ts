import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, ManyToOne as ManyToOne_, Index as Index_} from "@subsquid/typeorm-store"
import {DiscountDetails} from "./discountDetails.model"

@Entity_()
export class DiscountUpdatedEvent {
    constructor(props?: Partial<DiscountUpdatedEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    discountKey!: string

    @Index_()
    @ManyToOne_(() => DiscountDetails, {nullable: true})
    details!: DiscountDetails
}
