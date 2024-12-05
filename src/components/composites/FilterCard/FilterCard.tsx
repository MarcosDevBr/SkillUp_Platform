
import { IFilterCardProps } from './FilterCard.model';
import FilterCardView from './FilterCard.view';

export default function FilterCard(props: IFilterCardProps) {

    return (
        <FilterCardView {...props}/>
    )
}
