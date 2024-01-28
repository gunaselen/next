import  prisma from '@/lib/prisma'
import { session } from '@/lib/session'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import AzureADProvider from 'next-auth/providers/azure-ad'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

const authOption: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    AzureADProvider({
        clientId: process?.env?.AZURE_AD_CLIENT_ID || '7bfae016-55fd-4757-9d6f-c185eb591a1e',
        clientSecret: process.env.AZURE_AD_CLIENT_SECRET || 'Gmk8Q~6rFElEuQC-VhJEtqyzK0brf8vAN-.PkdtS',
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
    session,
    async jwt({ token, user, account, profile }) {
      if (profile) {
       
        if (!profile) {
          throw new Error('No user found')
        }
        token.profile = profile
        token.account = account
      }
      return token
    },
  },
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }