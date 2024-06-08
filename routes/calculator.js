//導入歷史紀錄

class calculator {
  // 小數點後保留位數 ( 預設值: 5 )
  constructor(round = 5) {
    this.round = round
  }
}
const calculation = new calculator()

module.exports = calculation