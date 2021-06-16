import { useRouter } from 'next/router'
import { useEffect } from 'react'

import styles from '../styles/Home.module.css'


function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/newsletter')
  })

  return <></>
}


export default Home
