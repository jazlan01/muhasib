import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <h1 className='text-6xl text-center font-semibold mb-16'>Welcome to <span className='font-bold text-primary'>Muhasib</span></h1>
      <p className='text-xl max-w-96 text-center'>
        Muhasib is a simple accounting app that helps you keep track of your
        expenses and income.
      </p>
      <div className="mt-4 flex lg:flex-col gap-4">
        <Button className='p-4 text-lg font-semibold rounded-lg'>
          <a href="/login">Get Started</a>
        </Button>
        <Button className='p-4 text-lg font-semibold rounded-lg'>
          <a href="/register">Register</a>
        </Button>
      </div>

    </div>
  )
}
