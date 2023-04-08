import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import todoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css';

interface IProps {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: IProps) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Add new task"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
