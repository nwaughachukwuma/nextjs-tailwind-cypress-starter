import styles from '../styles/Components.module.scss'

export default function Button({ title }) {
  return <button className={styles.button}>{title}</button>
}
