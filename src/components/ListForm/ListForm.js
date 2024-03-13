import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from './ListForm.module.scss';
import { addList } from "../../redux/listsRedux";
import { useDispatch } from "react-redux";

const ListForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  }

  return(
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label className={styles.labelForm}>Title:</label><TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
      <label className={styles.labelForm}>Description:</label><TextInput value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add List</Button>
    </form>
  );
;}

export default ListForm;