import {UPD_CAT} from "../Actions/ActionType";

var INITIAL_STATE={
    status:0
}

var CategoryReducer=(state=INITIAL_STATE,action)=>{
    //debugger
    switch(action.type)
    {
        case UPD_CAT:
            //debugger
            return{
                status:action.status
            }

        default:
            return state
    }
}

export default CategoryReducer