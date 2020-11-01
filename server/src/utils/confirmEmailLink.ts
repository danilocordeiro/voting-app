import { CONFIRM_EMAIL_PREFIX } from 'src/constants';
import { v4 } from 'uuid';
import { redis } from '../configs/redis';

export const confirmEmailLink =  async (userId: string) => {
  const id = v4();

  await redis.set(`${CONFIRM_EMAIL_PREFIX}${id}`, userId, 'ex', 60 * 60 * 15);

  return `${process.env.BACKEND_HOST}/users/confirm/${id}`;
}