import { useEffect, VFC } from 'react'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { getAllTasksData } from '../lib/fetch'
import useSWR from 'swr'
import axios from 'axios'
import { TASK } from '../types/Types'
const axiosFetcher = async () => {
  const result = await axios.get<TASK[]>(
    'http://jsonplaceholder.typicode.com/todos/?_limit=10'
  )
  return result.data
}

interface STATICPROPS {
  staticTasks: TASK[]
}

const TaskPage: VFC<STATICPROPS> = ({ staticTasks }) => {
  const { data: tasks, error } = useSWR('taskFetch', axiosFetcher, {
    fallbackData: staticTasks,
    revalidateOnMount: true,
  })

  if (error) return <span>Eror!</span>
  return (
    <Layout title={'TaskPage'}>
      <p className="text-4xl mb-10">task page</p>
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.id}>
              {task.id}
              {': '}
              <span>{task.title}</span>
            </li>
          ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const staticTasks = await getAllTasksData()
  return {
    props: { staticTasks },
  }
}

export default TaskPage
