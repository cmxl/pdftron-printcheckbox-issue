# PDFTron Printing Checkbox Form Field Issue

When printing the `issue.pdf` via the WebViewer component all checkbox form fields will be printed with a rectangle around.
This is not an issue in the viewer per se, but only when printing the document.

Is there a way to prevent this behavior?

## Prerequisites

* nodejs latest LTS 16.13.2 (https://nodejs.org/en/download/)
* add license to index.html => INSERT_LICENSE_HERE

## Reproducing the issue

* execute `npm install && npm start`
* navigate to http://localhost:8080
* print the document

=> In the browser's print dialog you would already see the rectangles.