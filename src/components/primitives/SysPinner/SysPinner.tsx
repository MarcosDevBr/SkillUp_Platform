
import { ISysPinnerProps } from './SysPinner.model';
import SysPinnerView from './SysPinner.view';


export default function SysPinner(props: ISysPinnerProps ) {

    return (
        <SysPinnerView {...props}/>
    )
}
