let axios = require("axios").default;

axios.get("http://ip-api.com/json").then((res)=> {
    console.log(res.data.query);
})
