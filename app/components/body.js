import {View, Text, ImageBackground, StyleSheet, Image, Dimensions} from 'react-native';
import Profiles from '../../assets/Profiles';
import Icons from '../../assets/Icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Body = () => {
    return (
        <View style={styles.container}>

            <View style={styles.imageView}>
                <ImageBackground
                source={Profiles.mtl.image} 
                style={styles.image} 
                imageStyle={styles.imageStyle}
                >
                    <Text style={styles.mtlText} >{Profiles.mtl.name}</Text>
                    <Text style={styles.captionText} >{Profiles.mtl.caption}</Text>
                </ImageBackground>
            </View>
            
            <View style={styles.footer}>
                <View style={styles.footerText}>
                    <Text style={styles.footerText}>My hottest take</Text>
                </View>
                

                <View style={styles.footerIconsView}>
                    <Image source={Icons.player.light} style={styles.playIcon}/>
                    <Image source={Icons.audioWave.light} style={styles.wavesIcon}/>
                </View>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: `#f5f5f5`,
        flex: 1
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1/1.1, 
        justifyContent: 'space-between',
        marginBottom: '10%',
    },

    imageStyle: {
        borderRadius: 25,
    },
    
    mtlText: {
        padding: 8,
        color: 'white',
        fontFamily: 'Sydney',
        fontSize: 40
    },
    captionText: {
        padding: 8,
        color: 'white',
        fontSize: 25,
        fontFamily: 'Sydney',
    },
    footerIconsView: {
        flex: 1,
        flexDirection: 'row',
        height: '20%',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    playIcon: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        marginLeft: '3%',
    },
    wavesIcon: {
        width: windowWidth * 0.6,
        height: windowWidth * 0.9,
        marginRight: '3%',
        resizeMode: 'contain'
    },
    footer: {
        height: '20%',
        width: '90%',
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    },
    imageView: {
        margin : 20,
    },
    footerText: {
        fontSize: 27,
        marginRight: '25%',
        fontFamily: 'Sydney',
        marginTop: '2%'
    }
});

export default Body;
