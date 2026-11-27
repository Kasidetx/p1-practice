const order = [
    { price: 41250, qty: 2}    ,
    { price: 41250, qty: 0},
    { price: 41250, qty: 1.5}    ,
    { price: 41250, qty: 2001},
    { price: 41250, qty: 2000}    ,
    { price: 41250, qty: 5},
    { price: 41250, qty: 5}    ,
]

const BUBBLEPRICE = 5
const MINQTY = 1
const MAXQTY = 2000
const MINPRICENOW = 10000

function validateBuy965(order, priceNow){
    if (isNaN(order.price) || isNaN(order.qty) || isNaN(priceNow)){
        throw new Error("Price or qty or priceNow is not a number")
    }


    if(Number.isInteger(order.qty) && order.qty < MINQTY ){
        return "การทำรายการต้องใส่ปริมาณ ซื้อ/ขาย อย่างน้อย 1 บาททอง"
    }

    if(priceNow <= MINPRICENOW){
        return "ราคาซื้อขายไม่ถูกต้อง กรุณาทำรายการใหม่"
    }

    if(order.qty > MAXQTY){
        return "ปริมาณซื้อขายทองคำ 96 ไม่ถูกต้อง ซื้อขายได้ไม่เกินครั้งละ 2,000 บาททอง (Bg)"
    }

    //if((priceNow - order.price) > BubblePrice || (order.price - priceNow) > BubblePrice){
    if(Math.abs(priceNow - order.price) >  BUBBLEPRICE){
        return "ราคาซื้อขายมีการเปลี่ยนแปลง ราคาปัจจุบัน " + priceNow + ", ส่วนต่างที่ยอมรับได้: " + BUBBLEPRICE
    }

    return "ผ่าน"
}

console.log(validateBuy965(order[0], 41250)) // ผ่าน
console.log(validateBuy965(order[1], 41250)) // การทำรายการต้องใส่ปริมาณ ซื้อ/ขาย อย่างน้อย 1 บาททอง
console.log(validateBuy965(order[2], 41250)) // ผ่าน
console.log(validateBuy965(order[3], 41250)) // ปริมาณซื้อขายทองคำ 96 ไม่ถูกต้อง ซื้อขายได้ไม่เกินครั้งละ 2,000 บาททอง (Bg)
console.log(validateBuy965(order[4], 41255)) // ผ่าน
console.log(validateBuy965(order[5], 41256)) // ราคาซื้อขายมีการเปลี่ยนแปลง ราคาปัจจุบัน 41256, ส่วนต่างที่ยอมรับได้: 5
console.log(validateBuy965(order[6], 9000)) // ราคาซื้อขายไม่ถูกต้อง กรุณาทำรายการใหม่