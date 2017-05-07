function Calendar (row, emit) {
  var startTime = new Date(row.start * 1000)
  var endTime = new Date(row.end * 1000)
  while (endTime > startTime) {
    emit({YEAR: startTime.getUTCFullYear(), MONTH: startTime.getUTCMonth() + 1, Day: startTime.getUTCDate(), Hour: startTime.getUTCHours()})
    startTime.setTime(startTime.getTime() + 60 * 60 * 1000)
  }
}

bigquery.defineFunction(
  'Calendar',                           // Name of the function exported to SQL
  ['start', 'end'],                    // Names of input columns
  [
    {'name': 'YEAR', 'type': 'integer'},  // Output schema
    {'name': 'MONTH', 'type': 'integer'},
    {'name': 'Day', 'type': 'integer'},
    {'name': 'Hour', 'type': 'integer'}
  ],
  Calendar                       // Reference to JavaScript UDF
)
