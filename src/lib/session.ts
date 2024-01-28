import { User, getServerSession } from 'next-auth';

export const session = async ({ session, token }: any) => {
    session.user = token;

    return session;
  };

export const getUserSession = async (): Promise<any> => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  })
  // if (!authUserSession) throw new Error('unauthorized')
  return authUserSession?.user
}