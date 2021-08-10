import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about">
        <a>Mais Informações</a>
      </Link>
    </div>
  )
}
