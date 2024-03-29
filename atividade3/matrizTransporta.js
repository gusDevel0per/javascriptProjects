function transporMatriz(A){
    var temp
    var matrizSec = [[0,0],[0,0],[0,0]]

    for(let lin=0 ; lin<3; lin++){
        for(let col=0; col<3 ; col++){
            
            matrizSec[col][lin] = a[lin][col]
            
        }
    }
    for(let lin=0 ; lin<2; lin++){
            console.log(matrizSec[lin])
        
    }

}

var a = [[1, 2], [3, 4],[5, 6]]

for(let lin=0 ; lin<3; lin++){
        console.log(a[lin])
    
}

transporMatriz(a);

