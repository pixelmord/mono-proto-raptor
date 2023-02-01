import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import { pb } from '@/lib/pocketbase-client';
import { sessionOptions } from '@/lib/session';
import type { User } from '@/pages/api/user';

function logoutRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  req.session.destroy();
  pb.authStore.clear();
  res.json({ isLoggedIn: false, token: '', record: {} });
}

export default withIronSessionApiRoute(logoutRoute, sessionOptions);
