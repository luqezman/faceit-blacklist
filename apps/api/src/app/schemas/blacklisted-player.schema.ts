import { Reason } from '@faceit-blacklist/interfaces';
import { registerEnumType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
@Schema({ _id: false })
export class BlacklistedPlayer {
  @Prop({ index: true, required: true })
  faceitId: string;
  @Prop({ type: [String], enum: Object.values(Reason), required: true })
  reason: Reason[];
  @Prop()
  note?: string;
}
registerEnumType(Reason, { name: 'Reason' });