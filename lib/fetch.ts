import fetch from 'node-fetch'
import { POST } from '../types/Types'

export const getAllPostsData = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts?_limit=10')
  )
  const posts: POST[] = await res.json()
  return posts
}

export const getAllPostIds = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts?_limit=10')
  )
  const posts = await res.json()
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}

export const getPostData = async (id) => {
  const res = await fetch(
    new URL(`https://jsonplaceholder.typicode.com/posts/${id}/`)
  )
  const post: POST = await res.json()
  return post
}

export const getAllTasksData = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/todos?_limit=10')
  )
  const posts: POST[] = await res.json()
  return posts
}

export const getAllTaskIds = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/todos?_limit=10')
  )
  const posts = await res.json()
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}

export const getTaskData = async (id) => {
  const res = await fetch(
    new URL(`https://jsonplaceholder.typicode.com/todos/${id}/`)
  )
  const post: POST = await res.json()
  return post
}
