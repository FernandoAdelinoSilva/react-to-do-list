import { Task } from '../Task';
import styles from './tasks.module.css';

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created Tasks</p>
          <span>10</span>
        </div>
        <div>
          <p className={styles.textPurple}>Done</p>
          <span>2 of 10</span>
        </div>
      </header>
      <div className={styles.list}>
        <Task />
        <Task />
      </div>
    </section>
  );
}
