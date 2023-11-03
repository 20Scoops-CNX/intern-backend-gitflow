import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    productName: string;

    @Prop()
    spec: string

    @Prop()
    description: string;

    @Prop()
    productPrice: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product)
