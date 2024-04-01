import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from "../Button/Button";
import {useDispatch} from 'react-redux';
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {updateSearch} from "../../redux/searchStringRedux";


const SearchForm = () => {
    const dispatch = useDispatch();

    const [searchString, setSearchString] = useState('');

    const location = useLocation();

    useEffect(() => {
        dispatch(updateSearch(''));
    }, [location.pathname]);


    const handleSearch = e => {
        e.preventDefault();
        dispatch(updateSearch(searchString));
        setSearchString('');
    }
    return (
        <form className={styles.searchForm} onClick={handleSearch}>
            <TextInput placeholder="Search..." value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            <Button>
                <span className="fa fa-search"/>
            </Button>
        </form>
    );
};

export default SearchForm;