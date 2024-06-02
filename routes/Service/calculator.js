//導入歷史紀錄
const history = require('./history')

//列出加減乘除運算式

function add(V1, V2){
  return V1 + V2
}

function minus(V1, V2){
  return V1 - V2
}

function multiply(V1, V2){
  return V1 * V2
}

function divide(V1, V2){
  //設定除法小數點
  const round = 5
  if(V2 === 0){
    console.log('分母不得為0')
  } else{
    return(V1 / V2).toFixed(round)
  }
}

