import React from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'

export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela Galeria</h2>
      <Tags/>
      <ul className={styles.galeria__lista}></ul>
    </section>
  )
}
