import React,{Component} from 'react';
import {Text,View,Alert,ActivityIndicator,TouchableOpacity,Image} from 'react-native';
import axios from 'axios';
import {Menu,MenuOptions,MenuOption,MenuTrigger,MenuProvider} from 'react-native-popup-menu';


class PopupMenu extends Component
{
    render()
    {
        return(
            <MenuProvider style={{flexDirection:'column',padding:20, borderWidth:1}}>
                <Menu style={{borderWidth:1,borderColor:'#ff0000'}}>
                    <MenuTrigger style={{margin:10,borderWidth:1,borderColor:'#00ff00'}} text={'Pooja'}/>
                    {/*<Text style={{borderWidth:1,borderColor:'#0000ff',marginTop:10}}>{data.category_name}</Text>*/}

                    <MenuOptions>
                        <MenuOption text={'Edit'}/>
                        <MenuOption text={'Delete'}/>
                    </MenuOptions>

                </Menu>
            </MenuProvider>
        )
    }
}

export default PopupMenu;