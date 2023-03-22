import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import { pb } from '@/lib/pocketbase-client';
import { sessionOptions } from '@/lib/session';

import type { User } from './user';

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = await req.body;

  try {
    const authData = await pb.collection('users').authWithPassword(username, password);
    const user = { isLoggedIn: true, ...authData } as User;
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
