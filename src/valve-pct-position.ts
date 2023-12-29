const valveSelector = "div.css-1ouclyk-percent-percent-Valve-Valve-Valve-Valve-Valve"

export const description = "Moves the in-diagram control valve percentages on Lincoln Peak screen over to avoid covering them with their name tags."

export function apply(doc: Document) : void {
    doc
    .querySelectorAll<HTMLElement>(valveSelector)
    .forEach(elem => { elem.style.left = "85px" });
    console.log("Fix applied from valve-pct-position.ts.");
}
