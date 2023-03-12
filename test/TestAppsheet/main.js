//code expand all data table 

const titleElements = document.querySelectorAll('.Title');

titleElements.forEach((element) => {
    const ariaLabelValue = element.getAttribute('aria-label');
    element.click()
});