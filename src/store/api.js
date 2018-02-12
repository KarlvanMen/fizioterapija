import axios from 'axios'
// axios.defaults.withCredentials = true

/* eslint-disable */
export function apiPostCall (child, data) {
    let url
    window.location.host.indexOf('localhost') > -1 ? url = `http://localhost:8099/fizioaz/api.php?r=${child}` : url = `/backend/api.php?r=${child}`

    return new Promise((resolve, reject) => {
        axios({
			method: 'post',
			url: url,
			data: data
		}).then((res) => {
			if ( res && res.data.session ) {
				res.data.session === 'not active' ? window.location = '/' : ''
				console.log(res.data.session)
			}
			resolve(res.data)
		})
		.catch((err) => {
			console.log('rejected')
			reject(err)
		})
	})

}
export function apiGetCall (child) {
	let url
	window.location.host.indexOf('localhost') > -1 ? url = `http://localhost:8099/fizioaz/api.php?r=${child}` : url = `/backend/api.php?r=${child}`

	return new Promise((resolve, reject) => {
		axios.get(url)
		.then((res) => {
			// console.log(child)
			resolve(res.data)
			// console.log(res)
		})
		.catch((err)=>{
			console.log("Rejected")
			reject(err)
		})
	})
}