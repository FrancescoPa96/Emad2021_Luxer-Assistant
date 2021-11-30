import React from 'react';
import { View, TouchableOpacity } from "react-native";


const ColorFilter = (props) => {
    const [show, setSelected] = React.useState(false)
    const toggleColor = () => setSelected(show => !show)
    
    return (
        <TouchableOpacity activeOpacity={0.75} onPress={toggleColor}>
            {show ?
                <View style={{
                    marginTop: 2,
                    marginRight: 7,
                    width: 21,
                    height: 21,
                    borderRadius: 10.5,
                    backgroundColor: props.color,
                    borderWidth: 3, borderColor: 'white',
                    shadowColor: '#000000',
                    shadowOffset: { width: 1, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 5, elevation: 5
                }}
                />
                :
                <View style={{
                    marginTop: 2,
                    marginRight: 7,
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    backgroundColor: props.color,
                    shadowColor: '#000000',
                    shadowOffset: { width: 1, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 5, elevation: 5
                }}
                />
            }

        </TouchableOpacity>
    )

}
export default ColorFilter;