import axios from 'axios'
import queryString from 'query-string'

const $ = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const $_get = $.get
$.get = (url, data, config) => {
  url += '?' + queryString.stringify(data, { arrayFormat: 'bracket' })
  return $_get(url, config)
}

export default $
