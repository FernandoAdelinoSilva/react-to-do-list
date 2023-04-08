import { TbTrash } from 'react-icons/tb';
import styles from './task.module.css';
import { ITask } from '../../App';

interface IProps {
  task: ITask;
  onDelete: (taskId: string) => void;
}

export function Task({ task, onDelete }: IProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>{task.title}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
