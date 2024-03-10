import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = ({ listId }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ listId, title, icon }));
    setTitle('');
    setIcon('');
  }
  
  return(
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label className={styles.labelForm}>Title:</label><TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
      <label className={styles.labelForm}>Icon:</label><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;