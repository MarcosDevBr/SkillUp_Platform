/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IArrFilters, IArrVideos } from "../pages/skillUp/Catalog/Catalog.model";

export interface ICheckboxValues {
    checked: boolean,
    identificador: string,
    id: number,
}

type IFilterOptions = {
    'search': string;
    'videoType': ICheckboxValues[],
}

class HandleFilterVideosUtils {
    private search: IFilterOptions['search'] | null = null;

    private videoType: IFilterOptions['videoType'] | null = null;

    private listVideoTypes: Array<IArrFilters> = [];

    private imutableData: Array<IArrVideos> = [];

    private applyChanges: ((updateValues: Array<IArrVideos>) => void) | null = null;

    public setValuesToFilter(data: Array<IArrVideos>,  listVideoTypes: Array<IArrFilters>,) {
        this.imutableData = new Array(...data);
        this.videoType = listVideoTypes;
    }

    public onFilterChange(callback: (updateValues: Array<IArrVideos>) => void) {
        this.applyChanges = callback;
    }

    public filterBy<T extends keyof IFilterOptions>(type: T, value: IFilterOptions[T]) {
        // @ts-ignore
        this[type] = value;
        this.applyFilters();
    }

    public removeFilter(type: keyof IFilterOptions) {
        this[type] = null;
        this.applyFilters();
    }

    get searchValue() {
        return this.search || undefined;
    }

    private applyFilters() {
        let updateValues = [...this.imutableData];

        if (this.search) {
            const searchValue = this.search.toLocaleLowerCase();
            updateValues = updateValues.filter((video) =>
              video.title.toLocaleLowerCase().includes(searchValue)
            );
        }

        if (this.videoType && !this.videoType.every((item) => item.checked)) {
            const valuesChecked = this.videoType.filter((item) => item.checked);
            updateValues = updateValues.filter((video) => valuesChecked.some((item) => item.id === video.type) || !(this.listVideoTypes.map((item) => item.id).includes(video.type)));
        }

        if (this.applyChanges) {
        this.applyChanges(updateValues);
        }
    }
}

export default HandleFilterVideosUtils;
