//code expand all data table 

const titleElements = document.querySelectorAll('.Title');
titleElements.forEach((element) => {
    element.click()
});



//Scroll đến action muốn

// Tìm phần tử có thuộc tính data-path tương ứng
const element = document.querySelector('[data-path="Behavior,Actions,tonKho,Add"]');

// Di chuyển màn hình đến vị trí của phần tử đó
element.scrollIntoView();
