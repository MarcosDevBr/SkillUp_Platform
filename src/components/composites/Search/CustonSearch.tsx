
import { useContext } from 'react';
import { ICustonSearchProps } from './CustonSearch.model';
import CustonSearchView from './CustonSearch.view';
import { AppGlobalContext } from '../../../AppGlobalContextProvider';

export default function CustonSearch(props: ICustonSearchProps) {

    const { handleWithFilters } = useContext(AppGlobalContext);

    const onSearchChange = (value: React.ChangeEvent<HTMLInputElement>) => {

        console.log("DIGITANDO", value.target.value)
        if (!value.target.value.length) {
            handleWithFilters.current.removeFilter('search');
        }
        handleWithFilters.current.filterBy('search', value.target.value);
    };
    
    return (
        <CustonSearchView 
            {...props} 
            onSearchChange={onSearchChange} 
            defaultValue={handleWithFilters?.current.searchValue}
        />
    )
}
