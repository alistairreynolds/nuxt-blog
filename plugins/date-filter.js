import Vue from 'vue'
import moment from 'moment'

function dateFilter (date) {
  return moment(date).format('dddd Do MMMM YYYY @ h:mm a')
}

Vue.filter('date', dateFilter)
