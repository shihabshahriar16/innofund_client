import axios from "axios";

const sendEmail = (userData) => () =>{
    axios
        .get("/api/email/send", {params:userData})
        .then(res => {
            console.log(res.data)
        }) 
        .catch(err =>{
            console.log(err)
        });
}

export default sendEmail;