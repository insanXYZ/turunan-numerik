//TURUNAN PERTAMA

function turunanPertamaOrde2(f1,fn1,h){
    return (f1 - fn1) / (2 * h)
}

function turunanPertamaOrde4(f1,f2,fn1,fn2,h){
    return ((0 - f2) + (8 * f1) - (8 * fn1) + fn2) / (12 * h)
}

//TURUNAN KEDUA

function turunanKeduaOrde2(f0,f1,fn1,h){
    return (f1 - (2 * f0) + fn1) / Math.pow(h,2)
}

function turunanKeduaOrde4(f0,f1,f2,fn1,fn2,h) {
    return ((0 - f2) + (16 * f1) - (30 * f0) + (16 * fn1) - fn2) / (12 * Math.pow(h,2))
}

//TURUNAN KETIGA

function turunanKetigaOrde2(f1,f2,fn1,fn2,h){
    return (f2 - (2 * f1) + (2 * fn1) - fn2) / (2 * Math.pow(h,3))
}

//TURUNAN KEEMPAT

function turunanKeempatOrde2(f0,f1,f2,fn1,fn2,h) {
    return (f2 - (4 * f1) + (6 *f0) - (4 * fn1) + fn2)  / Math.pow(h,4)
}