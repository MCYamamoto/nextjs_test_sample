import { VFC } from 'react'
import Layout from '../components/Layout'
import Comment from '../components/Comment'
import useSWR from 'swr'
import axios from 'axios'
import { COMMENT } from '../types/Types'

const axiosFetcher = async () => {
  const result = await axios.get<COMMENT[]>(
    'http://jsonplaceholder.typicode.com/comments/?_limit=10'
  )
  return result.data
}

const CommentPage: VFC = () => {
  const { data: comments, error } = useSWR('commentFetch', axiosFetcher)
  if (error) return <span>Error!</span>
  return (
    <Layout title={'Comment'}>
      <p className="text-4xl">comment page</p>
      {comments &&
        comments.map((comment, index) => <Comment key={index} {...comment} />)}
    </Layout>
  )
}

export default CommentPage
