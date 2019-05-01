
import axios from 'axios'

let apiHost = 'http://' + (process.env.API_HOST || 'localhost') + ':3000'

module.exports = {
  authenticateUser: function(email, password) {
    let data = {
      auth: {
        email: email,
        password: password
      }
    }
    return axios.post(apiHost + '/api/user/token', data)
      .then(function (response) {
        return response.data.jwt
      })
      .catch(function (error) {
        return undefined
      })
  },
  getCurrentUser: function(jwt) {
    var config = {
      headers: {}
    }
    if (jwt) {
      config['headers']['Authorization'] = 'Bearer ' + jwt
    }
    return axios.get(apiHost + '/api/users/current', config)
      .then(function(response){
        return response.data
      })
      .catch(function (error) {
        return undefined
      })
    }
}

      // added header/config in your axios post response(or get too) -- after data . The component is an object : key headers, value is another object : Authorizzation  as the key and the value will be a string (add bearer + jwt) -- too look for jwt to the localstorage:build-in storage method
  