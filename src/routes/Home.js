import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Button, Container, Header, Content } from 'native-base'

class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  render() {
    return (
      <Container>
        <Content>
          <Text>Home Screen</Text>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}


const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
