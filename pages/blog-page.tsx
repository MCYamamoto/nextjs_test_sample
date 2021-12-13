import { VFC } from 'react'
import Post from '../components/Post'
import Layout from '../components/Layout'
import { POST } from '../types/Types'

import { getAllPostsData } from '../lib/fetch'

interface Props {
  posts: POST[]
}
const BlogPage: VFC<Props> = ({ posts }) => {
  return (
    <Layout title={'Blog'}>
      <p className="text-4xl">blog page</p>
      <ul className="m-10">
        {posts &&
          posts.map((post) => (
            <Post
              key={post.id}
              userId={post.userId}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
      </ul>
    </Layout>
  )
}

export default BlogPage

export const getStaticProps = async () => {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
