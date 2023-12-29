export const description = "Adds a 5px solid red border to the page."

export function apply(doc: Document) : void {
    doc.body.style.border = "5px solid red";
}
