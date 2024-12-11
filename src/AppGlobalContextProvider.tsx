/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useRef } from 'react';
import { IArrLastVideos, IUserAccontObj } from './pages/skillUp/Profile/Profile.model';
import { IArrFilters, IArrVideos } from './pages/skillUp/Catalog/Catalog.model';
import HandleFilterVideosUtils, { ICheckboxValues } from './util/handleFilterVideosUtils';
import { useArray, UseArrayActions } from './hook/useArray';

export interface IAppGlobalContext {
    arrLastVideos: UseArrayActions<IArrLastVideos>;
    arrFilters:  UseArrayActions<IArrFilters>;
    arrVideo: UseArrayActions<IArrVideos>;
    arrVideoFiltred: UseArrayActions<IArrVideos>;
    userAccontObj: IUserAccontObj;
    handleWithFilters: React.MutableRefObject<HandleFilterVideosUtils>;
    valuesCheckedVideo: UseArrayActions<ICheckboxValues>
}
export interface IAppGlobalContextProviderProps {
    children: any;
}

export const AppGlobalContext = createContext({} as IAppGlobalContext);

const AppGlobalContextProvider: React.FC<IAppGlobalContextProviderProps> = ({ children }) => {

    const handleWithFilters = useRef(new HandleFilterVideosUtils());
    const valuesCheckedVideo = useArray<ICheckboxValues>([]);

    const userAccontObj: IUserAccontObj = {
        userName:"Marcos Augusto",
        email:"marcosagustoops@gmail.com",
        phone:"+5531995308907",
        address: "Malibu, Califórnia",
        password: 'OPAMINHASENHA'
    }

    const arrLastVideos = useArray<IArrLastVideos>([
        { 
            midia: 'string',
            showEyeToVisualize: false,
            handlePrev: () => console.log("CLicou"),
            title: 'Gustavo Guanabara ',
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
    ]);

    const arrFilters = useArray<IArrFilters>([]);
    const arrVideo = useArray<IArrVideos>([]);
    const arrVideoFiltred = useArray<IArrVideos>([]);


    const sharedValues: IAppGlobalContext = {
        arrLastVideos,
        arrVideo,
        arrVideoFiltred,
        arrFilters,
        userAccontObj,
        handleWithFilters,
        valuesCheckedVideo
    };

    return (
        <AppGlobalContext.Provider value={sharedValues}>
            {children}
        </AppGlobalContext.Provider>
    );
};

export default AppGlobalContextProvider;
