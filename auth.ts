import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email"
        },
        password: {
          type: "password"
        },
      },
      authorize: async (credentials) => {
        if (credentials?.email === "teste@teste.com" && credentials?.password === "101010") {
          return {
            id: "dndejnjds87873",
            name: "Leonardo",
            email: "teste@teste.com"
          }
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/"
  },
})