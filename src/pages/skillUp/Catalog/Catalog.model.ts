export interface ICatalogViewProps  {
    isLoading: boolean;
    arrFilters?: IArrFilters[];
    data?: IArrVideos[];   
    onFilterByDate: () => void;
    onFilterClick: (id: number) => void;
}

export interface IArrVideos {
    midia: string
    showEyeToVisualize?: boolean;
    handlePrev: () => void;
    type: number;
    title: string;
    date: string;
    subTitle: string;
}

export interface IArrFilters {
    checked: boolean,
    identificador: string,
    id: number,
}
