import { User } from "src/users/entities/user.entity";
import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import * as bcrypt from 'bcryptjs';

@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>) {
    console.log("BEFORE INSERT: ", event.entity)

    event.entity.password = await bcrypt.hash(event.entity.password, 12);
  }
}