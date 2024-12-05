
import { useContext, useEffect, useState } from 'react';
import CatalogView from './Catalog.view';
import { AppGlobalContext } from '../../../AppGlobalContextProvider';
import { IArrFilters, IArrVideos } from './Catalog.model';
import enumVideoType from '../../../enums/enumVideoType';
import { toast } from 'sonner';

export default function Catalog() {

    const [isLoading] = useState(false)

    const { 
        arrVideo, 
        arrFilters, 
        handleWithFilters,
        arrVideoFiltred,
        valuesCheckedVideo
    } = useContext(AppGlobalContext);

    const arrFiltersMock: IArrFilters[] = [
        { identificador: "TODOS OS CURSOS", checked: true, id: enumVideoType.TODOS_OS_CURSOS },
    ]

    const arrVideoMock: IArrVideos[] = [
        { 
            midia: 'string',
            showEyeToVisualize: false,
            handlePrev: () => console.log("CLicou"),
            title: 'Gustavo Guanabara',
            subTitle: 'Conteúdo de 2h',
            date: '10/11/2022',
            type: 1,
        },

        { 
            midia: 'string',
            showEyeToVisualize: false,
            handlePrev: () => console.log("CLicou"),
            title: 'Treinamento com IA',
            subTitle: 'Conteúdo de 4h',
            date: '10/10/20202',
            type: 2
        },
    ]

    useEffect(() => {

        valuesCheckedVideo.clear();

        arrVideo.setValue(arrVideoMock)
        arrVideoFiltred.setValue(arrVideoMock)
        arrFilters.setValue(arrFiltersMock)
        valuesCheckedVideo.setValue(arrVideoMock);


        handleWithFilters.current.onFilterChange(arrVideoFiltred.setValue);
        handleWithFilters.current.setValuesToFilter(arrVideoMock, arrFiltersMock);

        handleWithFilters.current.filterBy('videoType', arrFiltersMock);

    },[])

    const handleFilterClick = () => {
        //TODO 
        // console.log("CLicou aqui", id)
        // const updatedFilters = arrFilters.value.map(filter => ({
        //   ...filter,
        //   checked: filter.id === id ? !filter.checked : filter.checked,
        // }));
    
        // arrFilters.setValue(updatedFilters);
        // valuesCheckedVideo.setValue(updatedFilters);
    
        // // Chama a função de filtro com os filtros atualizados
        // handleWithFilters.current.filterBy('videoType', updatedFilters);

        // console.log("arr", valuesCheckedVideo.value)
      };

    const onFilterByDate  = () => {
        toast.warning('Ops, Em desenvolvimento');
    }


    return (
        <CatalogView
            isLoading={isLoading}
            arrFilters={arrFilters.value}
            data={arrVideoFiltred.value}
            onFilterClick={handleFilterClick}
            onFilterByDate={onFilterByDate}
        />
    )
}
