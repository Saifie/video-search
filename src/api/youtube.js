import axios from "axios"
const KEY="AIzaSyCxIR_s40c3-XBFBF9w49F18ZlXS2IvFaA"
export default axios.create({
	baseURL:"https://www.googleapis.com/youtube/v3",
	params:{
		part:"snippet",
		maxResults:6,
		key:KEY
	}
})