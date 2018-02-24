import React,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {UpdateCategory} from "../Actions/CategoryAction";

class categoryUpd extends Component
{
    constructor(props)
    {
        super(props)
        //debugger
        var data=this.props.navigation.state.params.item;
        alert(data);
        this.state= {
            category_name: data.category_name,
            id: data._id
        }
    }

    onUpdate(id,category)
    {
        /*axios.post("http://localhost:3000/category/upd?id=" + id,{category_name:category},{
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response)=>{
            var res=JSON.stringify(response.data);
            var orgres=JSON.stringify("1");

            if(res===orgres)
            {
                alert("Sucessfully")
            }
            else
            {
                alert("Error")
            }
        },(err)=>{
            alert("Error")
        }).catch((err)=>{
            alert("Error")
        })*/
        this.props.UpdateCategory({
            id:id,
            category:category
        })

        //debugger

    }

    componentWillReceiveProps(nextProps)
    {
        var status=nextProps.status;

        if(status==200)
        {
            alert('Updated')
        }
        else
        {
            alert('Fail')
        }

        //debugger
    }

    render()
    {
        return(
            <View>
                <Text> Category Name: {this.state.id} </Text>
                <TextInput placeholder={'Category Name'} value={this.state.category_name} onChangeText={(nm)=>this.setState({category_name:nm})}/>
                <TouchableOpacity onPress={()=>this.onUpdate(this.state.id,this.state.category_name)}>
                    <Text>{'Update'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps=state=>{
    //debugger
    return{
        status:state.Category.status
    }
}

export default connect(mapStateToProps,{
    UpdateCategory
})(categoryUpd);