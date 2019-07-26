import { Panel } from './panel';
export class Crumb {
    title: string;
    panels: Panel[];
    active: boolean;
    visible: boolean;
    showDetails: boolean;
    constructor(
        title: string,
        panels: Panel[],
        active: boolean,
        visible: boolean,
        showDetails: boolean
    ) {
        this.title = title;
        this.panels = panels;
        this.active = active;
        this.visible = visible;
        this.showDetails = showDetails;
    }
}