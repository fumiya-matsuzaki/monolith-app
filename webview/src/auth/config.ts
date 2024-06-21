import NextAuth from "next-auth"
import  Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub({ clientId: 'GITHUB_ID', clientSecret: 'GITHUB_SECRET' }),
    Google({ clientId: 'GOOGLE_ID', clientSecret: 'GOOGLE_SECRET' }),
    Credentials({
      name: 'Industry One',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // ここに認証ロジックを作成する

        // credentialsには{ csrfToken: string, email: string, password: string }が入っている

        // 簡易的なバリデーション(Zodなどを使うと良い)
        if (!credentials) return null;
        if (typeof credentials.email !== 'string') return null;
        if (typeof credentials.password !== 'string') return null;
        
        
        // 認証成功時はユーザ情報を返す
        return {
          id: "test-test-test",
          email: credentials.email,
          name: "テストユーザ",
        }

      }
    })
  ],
})