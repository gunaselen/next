declare module "next-auth" {
    interface User {
      role?: Role;
      token?: Any;
      accoutn?: Any;
      subscribed?: boolean;
      profile?:AnyARecord;
    }
  
    interface Session extends DefaultSession {
      user?: User;
    }
  }