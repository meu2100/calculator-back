//記錄每筆計算資料


class HistoryRecord {
  constructor() {
    this.HistoryRecord = []
  }

  add(formula, answer) {
    this.HistoryRecord.push({
      formula: formula,
      answer: answer
    })
  }

  getHistory() {
    return this.HistoryRecord
  }
}

const history = new HistoryRecord()

module.exports = history