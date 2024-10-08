function numberOrderedList(orderedList) {
    orderedList.classList.add('paragraphs');

    let lineCount = 0;
    orderedList.childNodes.forEach(node => {
        if (node.nodeName !== "LI") {
            return;
        }

        lineCount++;
        if (node.hasAttribute("value")) {
            value = node.getAttribute("value");
            lineCount = parseInt(value, 10);
        }

        node.innerHTML = `<span class="paragraph_number"><b>[${lineCount}]</b></span> ` + node.innerHTML;
    });
}

let orderedListNodes = Array.from(document.getElementsByTagName('ol'));
orderedListNodes.forEach(orderedList => numberOrderedList(orderedList));
