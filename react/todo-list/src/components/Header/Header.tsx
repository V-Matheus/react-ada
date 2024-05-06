import React from 'react'
import styles from './styles.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>My Todo</h1>

        <span>Bem-vindo, Matheus</span>
      </div>

      <div></div>
    </header>
  )
}

export default Header