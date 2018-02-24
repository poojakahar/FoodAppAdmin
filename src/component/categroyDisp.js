import React,{Component} from 'react';
import {Text,View,Alert,ActivityIndicator,TouchableOpacity,Image,ListView,FlatList} from 'react-native';
import axios from 'axios';
import {Menu,MenuOptions,MenuOption,MenuTrigger,MenuProvider} from 'react-native-popup-menu';
import PopupMenu from './PopupMenu'

class categroyDisp extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            category:[],
            loading:false,
            opened:true
        }
    }

    onOptionSelected(value,item)
    {
        alert('Back Press ' + value + item.category_name)
        if(value==1)
        {
            console.log(item);
            //debugger
            this.props.navigation.navigate('CategoryUpd',{item})
        }
        this.setState({opened:false})
    }

    onTriggerPress()
    {
        //alert('Trigger Press')
        this.setState({opened:true})
    }

    componentWillMount()
    {
        this.setState({loading:true})
    }

    render(){
        if(this.state.loading)
        {
            return <ActivityIndicator size={'large'}/>
        }

        return(
            <View>

                        <FlatList data={this.state.category} keyExtractor={(item, index) => index.toString()}
                                  renderItem={({item})=>(
                                      <MenuProvider style={{flexDirection:'column',margin:20,borderWidth:1}} opened={this.state.opened}>
                                      <Menu style={{borderWidth:1,borderColor:'#ff0000',margin:10}}>
                                        <MenuTrigger style={{borderWidth:1,borderColor:'#00ff00'}} onPress={()=>this.onTriggerPress()} text={item.category_name}/>
                                          <MenuOptions>
                                              <MenuOption value={1} text={'Edit'} onSelect={value=>this.onOptionSelected(value,item)}/>
                                              <MenuOption value={2} text={'Delete'} onSelect={value=>this.onOptionSelected(value,item)}/>
                                          </MenuOptions>
                                      </Menu>
                                      </MenuProvider>)}
                        />
            </View>
        )
    }

    async componentDidMount()
    {
        await this.getCategory().then((data)=>{
            console.log(data);
            this.setState({category:data,loading:false})
            console.log(this.state);
        },(err)=>{
            alert(err)
        }).catch((err)=>{
            aler(err)
        })
    }

    async getCategory()
    {
        try
        {
            var promise=await new Promise((resolve,reject)=>{
                axios.get('http://localhost:3000/category').then((response)=>{
                    console.log(response.data);
                    resolve(response.data);
                },(err)=>{
                    reject(err)
                }).catch((err)=>{
                    reject(err)
                })
            })

            return promise;
        }
        catch (e)
        {
            alert("Catch: " + e)
        }
    }
}

export default categroyDisp;

/*
<TouchableOpacity key={key} onPress={()=>this.props.navigation.navigate('CategoryUpd',{data})}>
                                    <Text style={{fontSize:20}}> {data.category_name} </Text>
                                </TouchableOpacity>
 */