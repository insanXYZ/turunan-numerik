// TURUNAN PERTAMA
function turunanPertamaOrde1(f0,f1,h){
    return (f1 - f0) / h
}

function turunanPertamaOrde2(f0,f1,f2,h){
    return ((0-(3*f0)) + (4*f1) - f2) / (2 * h)
}

//TURUNAN KEDUA
function turunanKeduaOrde1(f0,f1,f2,h){
    return (f2 - (0 - (2 * f1)) + f0) / (Math.pow(h , 2))
}

function turunanKeduaOrde2(f0,f1,f2,f3,h) {
    return ((0 - f3) + (4 * f2) - (5 * f1) + (2 * f0)) / (12 * h)
}

//TURUNAN KETIGA
function turunanKetigaOrde1(f0,f1,f2,f3,h) {
    return (f3 - (3 * f2) + (3 * f1) - f0) / (Math.pow(h , 3))
}

function turunanKeempatOrde1(f0,f1,f2,f3,f4,h) {
    return (f4 - (4 * f3) + (6 *f2) - (4 *f1) + f0) / Math.pow(h,4)
}

