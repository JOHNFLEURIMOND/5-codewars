//find out what day it is on a few particular dates. Return either Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday.



function getDayOfTheWeek(date) {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(date).getDay()];
}