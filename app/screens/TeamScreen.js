import React from 'react';
import { Text, Image, ImageBackground, Linking } from 'react-native';
import { Container, Content } from 'native-base';
import NavigationHeader from '../components/NavigationHeader.js';
import teamPageStyle from '../styles/TeamPageStyle.style';

export default class TeamScreen extends React.Component {
  render() {
    return (
      <Container>
        {/* Display the header, including access to the navigation menu */}
        <NavigationHeader {...this.props} />
        {/* Content for Psyche Team */}
        <Content
          contentContainerStyle={teamPageStyle.content}
          style={teamPageStyle.pageStyle}
        >
          <ImageBackground
            source={require('../assets/images/backgrounds/Background.jpg')}
            style={{
              width: '100%',
              height: null,
              flex: 1
            }}
          >
            <Text style={teamPageStyle.pageHeadingText}>The Team</Text>
            <Text />
            <Text />
            <Text style={teamPageStyle.pageHeadingTextSmall}>
              Principle Investigator
            </Text>
            <Image
              source={require('../assets/images/team/Lindy34Half.jpg')}
              style={teamPageStyle.teamPhoto}
            />
            <Text style={teamPageStyle.teamCaptionText}>
              Lindy Elkins-Tanton
            </Text>

            <Text />
            <Text style={teamPageStyle.pageHeadingTextSmall}>
              Deputy Principle
            </Text>
            <Text style={teamPageStyle.overflowPageHeadingTextSmall}>
              Investigator
            </Text>
            <Image
              source={require('../assets/images/team/JimBell.jpg')}
              style={teamPageStyle.teamPhoto}
            />
            <Text style={teamPageStyle.teamCaptionText}>Jim Bell</Text>

            <Text />
            <Image
              source={require('../assets/images/team/GroupShot.jpg')}
              style={teamPageStyle.teamPhoto}
            />
            <Text style={teamPageStyle.pageBodyTextAlt}>
              To see more of the team, visit the{' '}
            </Text>
            <Text
              style={teamPageStyle.webLinkStyle}
              onPress={() => Linking.openURL('https://psyche.asu.edu/')}
            >
              Psyche Website.
            </Text>
            <Text />
            <Text />
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
