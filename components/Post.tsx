import { VFC } from 'react'
import Link from 'next/link'
import { POST } from '../types/Types'

const Post: VFC<POST> = ({ id, title }) => {
  return (
    <div>
      <span>{id}</span>
      {' : '}
      <Link href={`/posts/${id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {title}
        </span>
      </Link>
    </div>
  )
}

export default Post
