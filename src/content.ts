
function removePaidElements() {

    const toKeepElements: HTMLElement[] = [];

    const schematics = document.querySelectorAll(".span4");

    const toDestroy: HTMLElement[] = [];

    schematics.forEach((element) => {
        if (element.querySelector(".format_non_free") != null) {
            toDestroy.push(element as HTMLElement);
        } else {
            toKeepElements.push(element as HTMLElement);
        }
    });

    toDestroy.forEach((element) => {
        const parent: HTMLElement = element.parentElement as HTMLElement;
        const availableToReplace = toKeepElements.pop();
        if (availableToReplace) {
            parent.appendChild(availableToReplace);
        }
        element.remove();
    });

        // Your XPath
    /*const xpath = '/html/body/div[2]/div[3]/div[2]';

    // Evaluate the XPath
    const result = document.evaluate(
        xpath,             // The XPath expression
        document,          // The context node
        null,              // No namespace resolver needed
        XPathResult.FIRST_ORDERED_NODE_TYPE, // Return the first matching node
        null               // No existing result
    );

    // Get the element
    const element: HTMLElement | undefined = result.singleNodeValue as HTMLElement | undefined;

    console.log("Got element: ", element);

    // Go through each and see if it is valid element
    const validRows: HTMLDivElement[] = [];

    

    if (!element) return;
    Array.from(element.children).forEach((row) => {
        // Get all child elements (ignores text nodes)
        const children = Array.from(row.children);

        // Check if every child has class 'span4'
        const isValid =  children.length > 0 && children.every(child => child.classList.contains('span4'));

        if (isValid) {
            validRows.push(row as HTMLDivElement);
        }
    })

    console.log(validRows);

    let indexValue = 0;
    let localRowCounter = 0;

    toKeepElements.forEach((ele) => {
        if (indexValue > validRows.length) return;
        const row = validRows[indexValue];
        
        if (!row) return;
        row.appendChild(ele);

        localRowCounter ++;

        if (localRowCounter == 3) {
            indexValue += 1;
            localRowCounter = 0;
        }
    })*/
    

}

function initialize() {
    console.log("Hello from extension!");
    removePaidElements();
}

initialize();