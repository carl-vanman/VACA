function sortProducts(dataList, compareFn) {
    dataList.sort(compareFn);
}

function sortByNumberASC(firstValue, secondValue) {
    return firstValue.price - secondValue.price;
}

function sortByNumberDESC(firstValue, secondValue) {
    return secondValue.price - firstValue.price;
}

function sortByPriceASC(dataList) {
    sortProducts(dataList, sortByNumberASC);
}

function sortByPriceDESC(dataList) {
    sortProducts(dataList, sortByNumberDESC);
}

export const helperFunction = {
    sortByPriceASC,
    sortByPriceDESC,
};
