import styles from "./ListForm.module.scss";
import {useState} from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useDispatch } from 'react-redux';
import shortid from "shortid";
import {addList} from "../../redux/listsRedux";

const ListForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ id: shortid(), title, description: description }));
        setTitle('');
        setDescription('');
    };
    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span>Title: </span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span>Description: </span><TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
    );
}

export default ListForm;

// const dispatch = useDispatch();
//
// const [title, setTitle] = useState('');
// const [icon, setIcon] = useState('');
//
//
// const handleSubmit = e => {
//     e.preventDefault();
//     console.log('props.listId', props.listId)
//     dispatch(addColumn({ id: shortid(), title, icon, listId: props.listId }));
//     setTitle('');
//     setIcon('');
// };
//
// return (
//     <form className={styles.columnForm} onSubmit={handleSubmit}>
//         <span>Title: </span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
//         <span>Icon: </span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
//         <Button>Add column</Button>
//     </form>
// );
// };
//
// export default ColumnForm;