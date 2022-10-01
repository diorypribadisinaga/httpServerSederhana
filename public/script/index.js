
const Genap = (a) => {
    if (a % 2 == 0) {
        return "Bilangan Genap"
    } else {
        return "Bilangan Ganjil"
    }
}

const Prima = (a) => {
    let m = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            m += 1;
        }
    }
    if (m == 2) {
        return "Bilangan Prima"
    } else {
        return "Bilangan Komposit"
    }
}

const KlikGenap = () => {
    const number = document.querySelector("#bilangan").value
    const hasil = document.querySelector(".hasil")
    const result = Genap(number)
    hasil.innerHTML = result
}
const KlikPrima = () => {
    const number = document.querySelector("#bilangan").value
    const hasil = document.querySelector(".hasil")
    const result = Prima(number)
    hasil.innerHTML = result
}
