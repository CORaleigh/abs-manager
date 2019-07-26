import esri = __esri;
export class Panel {
    title: string;
    detailsTitle: string;
    layer: esri.FeatureLayer;
    features: esri.Graphic[];
    selectedFeature: esri.Graphic;
    fields: esri.Field[];
    headers: string[];
    orderBy: string;
    formgroups: esri.FieldGroupConfig[];
    showDetails: boolean;
    visible: boolean;
    source: esri.Graphic;
    update: boolean;
    constructor(
        title: string,
        detailsTitle: string,
        layer: esri.FeatureLayer,
        features: esri.Graphic[],
        selectedFeature: esri.Graphic,
        fields: esri.Field[],
        headers: string[],
        orderBy: string,
        formgroups: esri.FieldGroupConfig[],
        showDetails: boolean,
        visible: boolean) {
        this.title = title;
        this.detailsTitle = detailsTitle;
        this.layer = layer;
        this.features = features;
        this.selectedFeature = selectedFeature
        this.fields = fields;
        this.headers = headers;
        this.orderBy = orderBy;
        this.formgroups = formgroups;
        this.showDetails = showDetails;
        this.visible = visible;
    }
}
