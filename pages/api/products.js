import rawProductListData from "../../database/productsListData.json";

const processedProductList = [];

function generateId(numericalValue) {
    return Date.now() + numericalValue;
}

function isArrayAndNotEmpty(dataList) {
    return Boolean(Array.isArray(dataList) && dataList.length);
}

function productListProcessor(productListToProcess) {
    if (isArrayAndNotEmpty(productListToProcess)) {
        productListToProcess.forEach((product) => {
            addProduct(product);
        });
    }
}

function addProduct(productToAdd) {
    processedProductList.push({
        ...productToAdd,
        id: generateId(processedProductList.length),
    });
}

function getProductList() {
    if (!processedProductList.length) {
        productListProcessor(rawProductListData);
    }
    return processedProductList;
}

export default function handler(req, res) {
    const productList = getProductList();

    if (productList.length) {
        res.status(200).json(productList);
    }
}
