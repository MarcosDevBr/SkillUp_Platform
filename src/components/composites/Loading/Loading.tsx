
import { ILoadingProps } from './Loading.model';
import LoadingView from './Loading.view';

export default function Loading(props: ILoadingProps) {
    
    return (
        <LoadingView {...props}/>
    )
}
