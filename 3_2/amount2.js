const WEIGHT_BG = 65.6

const Amount = [
    {purity: 96.5, price: 41250, qty: 2},
    {purity: 99.99, price: 41237, qty: 1},
    {purity: 99.99, price: 40000, qty: 3}, // จะได้ค่าเป็น 7871999.999999999 จึงจำเป็นต้องกำหนดทศนิยมก่อน
    {purity: 99.99, price: 45001, qty: 2},
]

function appAmount(purity,price,qty){
    if(isNaN(purity) | isNaN(price) | isNaN(qty)){
        throw new Error("Purity & price & qty is not a number")
    }

    const amount = Number(price*qty)

    if(purity === 96.5){
        return Math.floor(amount * 100) / 100
    }
    else if(purity === 99.99){
        return Math.floor((amount * WEIGHT_BG).toFixed(2))
    }
}

function serverAmount(purity,price,qty){
    if(isNaN(purity) | isNaN(price) | isNaN(qty)){
        throw new Error("Purity or price & qty is not a number")
    }

    const amount = Number(price*qty)

    if(purity === 96.5){
        return Math.ceil(amount * 100) / 100
    }
    else if(purity === 99.99){
        return Math.ceil((amount * WEIGHT_BG * 100).toFixed(6)) / 100;
    }
}

for (const data of Amount){
    console.log((data.purity + " ราคา " + data.price + " x " + data.qty + ": แอป " + appAmount(data.purity, data.price, data.qty) + " | " + "เซิร์ฟเวอร์ " + serverAmount(data.purity, data.price, data.qty) + "\n"))
}