import axios from 'axios';
import {GET} from 'config/constant';


export const api = (method: string, URL: string, payload?: any) => {
    if (method === GET) {
        return axios.get(URL)
            .then(function (response) {
                // handle success
              return response.data;
            })
            .catch(function (error) {
                // handle error
                return {success:false , error};
            })
            .then(function () {
                // always executed
            });
    } else {
       return axios.post(URL, payload)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return {success:false , error};
            });
    }

}