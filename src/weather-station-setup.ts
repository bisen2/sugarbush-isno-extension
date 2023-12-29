export const description = "Sets up a stack of weather station widgets in a logical layout.";

const lpBase = {
    id: "weatherOverlay4",
    class: "css-84pr04-weatherOverlay-weatherOverlay-WeatherStation",
    style: "visibility: visible; top: 192px; left: -1262px;"
}

const lpMid = {
    id: "weatherOverlay2",
    class: "css-84pr04-weatherOverlay-weatherOverlay-WeatherStation",
    style: "visibility: visible; top: 618px; left: -1173 px;"
}

const lpSummit = {
    id: "weatherOverlay5",
    class: "css-84pr04-weatherOverlay-weatherOverlay-WeatherStation",
    style: "visibility: visible; top: 768px; left: -1032px;"
}

const meBase = {
    id: "weatherOverlay3",
    class: "css-84pr04-weatherOverlay-weatherOverlay-WeatherStation",
    style: "visibility: visible; top: -12px; left: -2429px;"
}

const meMid = {
    id: "weatherOverlay7",
    class: "css-84pr04-weatherOverlay-weatherOverlay-WeatherStation",
    style: "visibility: visible; top: 301px; left: -2250px;"
}

const meSummit = {
    id: "weatherOverlay6",
    class: "css-84pr04-weatherOverlay-weatherOverlay-WeatherStation",
    style: "visibility: visible; top: 455px; left: -1954px;"
}

function applyConfiguration(weatherStation: { id: string, class: string, style: string }, doc: Document) {
    let elem = doc.getElementById(weatherStation.id);
    if (elem === null) { return; }
    else {
        elem.className = weatherStation.class;
        elem.style.cssText = weatherStation.style;
    }
}

export function apply(doc: Document): void {
    [ lpBase, lpMid, lpSummit, meBase, meMid, meSummit ]
    .forEach(station => applyConfiguration(station, document));
}
