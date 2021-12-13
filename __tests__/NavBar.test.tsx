import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'

initTestHelpers()

describe('Navigation by Link', () => {
  it('Should route to selected page in navbar', async () => {
    const { page } = await getPage({ route: '/index' })
    render(page)
    userEvent.click(screen.getByTestId('blog-nav'))
    expect(await screen.findByText('blog page')).toBeInTheDocument()
    // screen.debug()
    userEvent.click(screen.getByTestId('comment-nav'))
    expect(await screen.findByText('comment page')).toBeInTheDocument()
    // screen.debug()
    userEvent.click(screen.getByTestId('context-nav'))
    expect(await screen.findByText('Context page')).toBeInTheDocument()
    // screen.debug()
    userEvent.click(screen.getByTestId('task-nav'))
    expect(await screen.findByText('task page')).toBeInTheDocument()
    // screen.debug()
    userEvent.click(screen.getByTestId('home-nav'))
    expect(await screen.findByText('Welcom to Nextjs')).toBeInTheDocument()
    // screen.debug()
  })
})
