import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      state: false,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async session({ session, token, user }) {
      const firestorePremiumStatus = await fetch(`
      https://yscn-modelschool.vercel.app/api/checkPremium/${session.user.email}`).then(
        (res) => res.json().then((data) => (session.user.premiumMeber = data))
      );
      console.log(
        "🚀 ~ file: [...nextauth].js ~ line 21 ~ session ~ firestorePremiumStatus",
        firestorePremiumStatus
      );

      return session;
    },
  },
});
