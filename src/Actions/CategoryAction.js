import {UPD_CAT} from "./ActionType";
import API from '../APIs/API'
import APIConst from '../APIs/APIConst'

var url=APIConst.BASE_URL;

export const UpdateCategory=(data)=>{
    url+=APIConst.category+"/"+data.id;

    return(dispatch,getState)=>{
        //debugger
        return API(url,'put',data.category_name).then((response)=>{
            //debugger
            dispatch({
                type:UPD_CAT,
                payload:response.data,
                status:response.status
            })
        },(err)=>{
            return Promise.reject(err)
        }).catch((err)=>{
            return Promise.reject(err)
        })
    }
}