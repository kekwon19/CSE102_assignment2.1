import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My name is Kieun Kwon</h1>
      <p>My hobby is listening to music</p>
      <p>I like sleeping and dancing</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}