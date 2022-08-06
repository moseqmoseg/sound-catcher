import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const DynamicRecorder = dynamic(() => import('../components/recoder.js'), {
  ssr: false,
})


export default function Home() {


 
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Store and Catalog your ideas" />
        <meta name="author" content="Mario Q"/>
      </Head>
      <DynamicRecorder/>
     
    </div>
  )
}
