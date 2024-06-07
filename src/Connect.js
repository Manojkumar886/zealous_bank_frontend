import axios from 'axios'

export const Loginprocess = async (object) => {
    try {
        const credential = object.accountHoldername + ":" + object.password;
        const token = btoa(credential);

        const temp = await axios.get(`http://localhost:8080/zealousbank/`,
            {
                headers:
                {
                    "Authorization": `Basic ${token}`
                }
            })
        if (temp) {
            sessionStorage.setItem("accountsecurity", object.accountHoldername);
            sessionStorage.setItem("loginuser", token);
        }
    }
    catch (err) {
        alert(err);
    }
}