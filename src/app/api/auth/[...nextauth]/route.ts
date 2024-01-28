import  prisma from '@/lib/prisma'
import { session } from '@/lib/session'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import AzureADProvider from 'next-auth/providers/azure-ad'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

const authOption: NextAuthOptions = {
    
  providers: [
    AzureADProvider({
        clientId: process?.env?.AZURE_AD_CLIENT_ID!,
        clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
        authorization: { params: { scope: "openid profile User.Read Mail.Read Calendars.Read Contacts.Read Calendars.ReadWrite Files.Read.All Files.ReadWrite Files.ReadWrite.All" } }
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
        console.log(account,profile)
      if (!profile) {
        throw new Error('No profile')
      }

      return true
    },
    async jwt({ token, user, account }) {
        if (account && user) {
          return {
            accessToken: account.id_token,
            accessTokenExpires: account?.expires_at
              ? account.expires_at * 1000
              : 0,
            refreshToken: account.refresh_token,
            user,
          };
        }
  
        if (Date.now() < token.accessTokenExpires - 100000 || 0) {
          return token;
        }
      },
      async session({ session, token }) {
        if (session) {
          session.user = token.user;
          session.error = token.error;
          session.accessToken = token.accessToken;
        }
        return session;
      },
  },
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }