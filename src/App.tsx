import './App.css'
import Section from './Section.tsx'
import Heading from './Heading.tsx'

function Post({ title, body }: { title: string; body: string }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  )
}

function RecentPosts() {
  return (
    <Section>
      <Heading>最近的帖子</Heading>
      <Post title='里斯本的味道' body='...那些蛋挞！' />
      <Post title='探戈节奏中的布宜诺斯艾利斯' body='我爱它！' />
    </Section>
  )
}

function AllPosts() {
  return (
    <Section>
      <Heading>帖子</Heading>
      <RecentPosts />
    </Section>
  )
}

export function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title='旅行者，你好！' body='来看看我的冒险。' />
      <AllPosts />
    </Section>
  )
}

function App() {
  return <ProfilePage />
}

export default App
