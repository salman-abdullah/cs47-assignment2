
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Icons from '../../assets/Icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Header = () => {
    return (
        <View style={styles.header}>
    
            <Image source={Icons.menu.light} style={styles.headerIcons}/>
            <Text style={styles.title}>ensom</Text>
            <Image source={Icons.sun} style={styles.headerIcons}/>

        </View>

    );
};

const styles = StyleSheet.create({
    headerIcons: {
        height: windowWidth * 0.15,
        width: windowWidth * 0.15,
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '2%'
    },
    title: {
        fontFamily: "SydneyBold",
        fontSize: 32,
        marginTop: '5%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: `#f5f5f5`,
    }
  });

export default Header;