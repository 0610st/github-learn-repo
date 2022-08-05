import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

it('Should render title test', () => {
  render(<Home />)
  expect(screen.getByText('Next.js!')).toBeInTheDocument()
})
