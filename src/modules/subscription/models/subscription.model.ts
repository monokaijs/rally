import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SubscriptionEventType } from "../subscription.dto";

@Schema()
export class Subscription {
  @Prop({
    type: Number,
    required: true
  })
  chatId: number;

  @Prop({
    type: Number
  })
  threadId: number;

  @Prop({
    type: String,
    enum: Object.values(SubscriptionEventType)
  })
  eventType: SubscriptionEventType;

  @Prop({
    type: Number
  })
  projectId: number;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
