import { Module } from "@nestjs/common";
import { SubscriptionService } from "./subscription/subscription.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Subscription, SubscriptionSchema } from "./subscription/models/subscription.model";

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Subscription.name,
      schema: SubscriptionSchema,
    }])
  ],
  providers: [
    SubscriptionService
  ],
  exports: [
    SubscriptionService
  ]
})
export class SubscriptionModule {
}
