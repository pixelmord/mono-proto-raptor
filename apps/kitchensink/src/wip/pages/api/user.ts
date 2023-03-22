import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import { sessionOptions } from '@/lib/session';

export type User = {
  isLoggedIn: boolean;
  token: string;
  record: {
    avatar: string;
    collectionId: string;
    collectionName: 'users';
    created: string;
    email: string;
    emailVisibility: boolean;
    id: string;
    name: string;
    updated: string;
    username: string;
    verified: boolean;
    expand: Record<string, unknown>;
  };
  meta?: Record<string, unknown>;
};

async function userRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  if (req.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      ...req.session.user,
      isLoggedIn: true,
    });
  } else {
    res.json({
      isLoggedIn: false,
      token: '',
      record: {},
    });
  }
}

export default withIronSessionApiRoute(userRoute, sessionOptions);
