import { ReactSVG } from 'react-svg'

import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <img src="logo.png" alt="Logo do Studio Ghibli" />

    <ul>
      <li>
        <a href="">
          <ReactSVG img src="icons/facebook.svg" />
        </a>
      </li>
      <li>
        <a href="">
          <ReactSVG img src="icons/instagram.svg" />
        </a>
      </li>
      <li>
        <a href="">
          <ReactSVG img src="icons/twitter.svg" />
        </a>
      </li>
      <li>
        <a href="">
          <ReactSVG img src="icons/youtube.svg" />
        </a>
      </li>
    </ul>
  </header>
)
