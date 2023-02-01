import { unsealData } from 'iron-session';
import { RequestCookies } from 'next/dist/server/web/spec-extension/cookies';

import { User } from '@/pages/api/user';

/**
 * Can be called in page/layout server component.
 * @param cookies ReadonlyRequestCookies
 * @returns SessionUser or null
 */
export async function getRequestCookie(cookies: RequestCookies): Promise<User | null> {
  const cookieName = process.env.SESSION_COOKIE_NAME as string;
  const found = cookies.get(cookieName);

  if (!found) return null;

  const { user } = await unsealData(found.value, {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
  });

  return user as unknown as User;
}
