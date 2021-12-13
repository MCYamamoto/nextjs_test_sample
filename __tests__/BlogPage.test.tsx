import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

initTestHelpers()

const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/posts?_limit=10',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { userId: 1, id: 1, title: 'dummy title1 1', body: 'dummy body 1' },
          { userId: 2, id: 2, title: 'dummy title1 2', body: 'dummy body 2' },
        ])
      )
    }
  ),
]

const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('Blog page', () => {
  it('Should render the list of blogs pre-fetch by getStaticProps', async () => {
    const { page } = await getPage({ route: '/blog-page' })
    render(page)
    expect(await screen.findByText('blog page')).toBeInTheDocument()
    expect(screen.getByText('dummy title1 1')).toBeInTheDocument()
    expect(screen.getByText('dummy title1 2')).toBeInTheDocument()
  })
})
