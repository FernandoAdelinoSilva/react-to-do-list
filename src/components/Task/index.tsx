import { TbTrash } from 'react-icons/tb';
import styles from './task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>This is information about a task that needs to be done</p>
      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
