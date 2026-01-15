import { redirect } from 'next/navigation'
import { getStoredKey } from '../api/setup/route'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const apiKey = getStoredKey()

  if (!apiKey) {
    redirect('/setup')
  }

  return (
    <div className="flex">
      <aside className="w-64 border-r p-4">
        <nav className="space-y-2">
          <a href="/tools/social">SocialBoost</a>
          <a href="/tools/ecommerce">StoreBoost</a>
          <a href="/tools/prompts">AutoPrompt</a>
          <a href="/tools/ads">AdScript</a>
          <a href="/tools/blog">NicheBlog</a>
          <a href="/tools/reels">Reels Factory</a>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
