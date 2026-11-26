const number = 1

// น้ำหนักกรัมบาททอง
const weight_bg = 15.244
// 1000 กรัม
const kilogram = 1000
// 0.965(96.5%)
const bg_purity_percent = 0.965


// 65.6 บาททองต่อ 1 โล (1000/15.244)
// 15.244 กรัม ต้อ 1 บาททอง

function bahtToGram(baht){
    if(baht === Number.isFinite()){
        throw new Error("Baht is not a number")
    }

    return Number(baht * weight_bg).toFixed(4)
}

// บาทกรัม เป็น กิโลกรัม
function bgToKg(bg){
    if(bg === Number.isFinite()){
        throw new Error("Bg is not a number")
    }

    return Number(bg * (weight_bg / kilogram) * bg_purity_percent).toFixed(4)
}

// โล(99.99%) เป็น บาท(96.5%)
function kgToBg(kg){
    if(kg === Number.isFinite()){
        throw new Error("Kg is not a number")
    }

    return Number(kg * 65.6 / bg_purity_percent).toFixed(4) //เกิดทศนิยมขึ้นที่นี้ เนื่องจากมีการตัดทศนิยมเหลือ 4 ตัว หรือปัดทศนิยม ​1000/15.244 (65.59958016)
}

console.log("Begin\n"
            + "Baht To Gram: " + bahtToGram(1) + "\n" 
            + "Baht To Gram: " + bahtToGram(2.5) + "\n"
            + "BahtGram To Kilogram: " + bgToKg(1) + "\n"
            + "Kilogram To BahtGram: " + kgToBg(1) + "\n"
            + "BahtToGram -> BahtToKilo -> Kilogram To BahtGram: " + kgToBg(bgToKg(bahtToGram(1000))) + "\n"
            + "Kilogram To BahtGram -> BahtToKilo -> BahtToGram: " + bahtToGram(bgToKg(kgToBg(1000))) + "\n"
        )