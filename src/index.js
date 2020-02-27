
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arrRes = [];
    
    if (matrix == undefined) {
        return arrRes;
    }
    
    for (let i = 0; i < matrix.length; i++) {
        if (i == 0 | i == 2) {
            for (let j = 0; j < matrix[i].length; j++) {
                arrRes.push(matrix[i][j]);
            }
        } else {
            for (let j = (matrix[i].length -1); j >= 0; j--) {
                arrRes.push(matrix[i][j]);
            }
        }
    }
    
  return arrRes;
}
