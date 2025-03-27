//TURUNAN PERTAMA
function turunanPertamaOrde1(f0,fn1,h){
    return (f0 - fn1) / h
}

//TURUNAN KEDUA
function turunanKeduaOrde1(f0,fn1,fn2,h) {
    return (fn2 - (2*fn1) + f0) / Math.pow(h,2)
}