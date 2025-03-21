import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import Customer from "models/Customer";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("اطلاعات نامعتبر است!");
        }

        try {
          await connectDB();
          const customer = await Customer.findOne({ email });

          if (!customer) {
            throw new Error("شما حساب کاربری ندارید!");
          }

          const isValid = await verifyPassword(password, customer.password);
          if (!isValid) {
            throw new Error("نام کاربری یا کلمه عبور اشتباه است!");
          }

          return {
            id: customer._id,
            email: customer.email,
          };
        } catch (error) {
          throw new Error(error.message || "خطای سیستمی!");
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
});
