import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold mb-4'>Error 404 </h1>
      <p className='text-lg mb-6'>A página que você procurou não foi encontrada.</p>
      <Link href="/" className='text-white font-bold bg-black px-4 py-4 rounded-md text-sm'>Voltar para a página inicial</Link>
    </div>
  )
}