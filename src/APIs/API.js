import axios from 'axios'

var API=(url,type='get',data={},header={})=>{
    let reqHeader=Object.assign(header,{'Accept':'application/json','Content-Type':'application/json'})
    if(type=='put')
    {
        return axios.put(url,data,reqHeader).then((response)=>{
            return Promise.resolve(response)
        },(err)=>{
            return Promise.reject(err)
        }).catch((err)=>{
            return Promise.reject(err)
        })
    }
}

export default API