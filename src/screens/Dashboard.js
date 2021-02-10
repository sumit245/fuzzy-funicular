
import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList
} from 'react-native'
import { Actions } from 'react-native-router-flux'

const Item = ({ location,onPress }) => (
  <View>
    <TouchableOpacity style={[styles.card]} onPress={onPress}>
      <Image
        style={styles.cardImage}
        source={{
          uri: 'http://136.232.171.250:5000' + location.fields.network_image,
        }}
      />
    </TouchableOpacity>

    <View style={styles.cardHeader}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={[styles.title]}>{location.fields.name}</Text>
      </View>
    </View>
  </View>
)

const renderItem = ({ item}) => <Item location={item} onPress={()=>Actions.push('RegisterScreen') } />

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () =>
        fetch('http://136.232.171.250:5000/android/mbl-home', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson,
            })
          })

          .catch((error) => {
            console.error(error)
          }),
      1000
    )
  }

  render() {
    
    return (
      <SafeAreaView style={styles.MainContainer}>
        <Text style={styles.head}>Locations</Text>

        <FlatList
          style={styles.list}
          numColumns={2}
          horizontal={false}
          contentContainerStyle={styles.listContainer}
          data={this.state.dataSource}
          renderItem={renderItem}
          navigation
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    )
  }
}
export default App

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 80,
  },

  list: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  listContainer: {
    alignItems: 'center',
  },

  /******** card **************/
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: '#e2e2e2',
    //flexBasis: '42%',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 60,
    width: 60,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  head: {
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
})
