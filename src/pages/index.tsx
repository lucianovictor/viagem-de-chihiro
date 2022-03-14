import { Header } from 'components/Header'
import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <h1>olar</h1>
      </div>
    </div>
  )
}
