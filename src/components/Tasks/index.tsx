import { ITask } from '../../App';
import { Task } from '../Task';
import { TbClipboardText } from 'react-icons/tb';
import styles from './tasks.module.css';

interface IProps {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: IProps) {
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
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>You don't have any tasks</p>
              <span>Create tasks and start new things</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
