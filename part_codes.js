

// supplierCode:productNumber-size


// input ACME:123-L:123-L   output : the large (L) part 123 is supplied by ACME


function supplyCode (code){
    let supplier = getSupplier(code);
    let productNumber = getProductNumber(code);
    let size = getSize(code);
function getSupplier(code){
    let supplier = code.split(/:|-/)[0];
    return supplier;
}

function getProductNumber(code){
    let productNumber = code.split(/:|-/)[1];
    return productNumber
}

function getSize(code){
    let size = code.split(/:|-/)[2];
    return size
}


    let supplyCode = ("the large " + "(" + size+") part " + productNumber+" is supplied by " + supplier);
    return supplyCode;
}

console.log(supplyCode("ACME:123-L"));