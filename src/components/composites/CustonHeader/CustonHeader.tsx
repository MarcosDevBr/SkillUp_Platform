
import { ICustonHeaderProps } from './CustonHeader.model';
import CustonHeaderView from './CustonHeader.view';

export default function CustonHeader(props: ICustonHeaderProps) {

    return (
        <CustonHeaderView {...props}/>
    )
}
