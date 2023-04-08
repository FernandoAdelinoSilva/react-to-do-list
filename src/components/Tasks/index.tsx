import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './tasks.module.css';

interface IProps {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete }: IProps) {
  const tasksLength = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created Tasks</p>
          <span>{tasksLength}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Done</p>
          <span>
            {completedTasks} of {tasksLength}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}
