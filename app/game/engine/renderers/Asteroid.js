import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Matter from 'matter-js';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utilities';
import { WORLD } from '../../engine/physicsInit';

const radius = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.125) / 2;

const Create_Asteroid_Matter = (posX, posY) => {
  return Matter.Bodies.circle(posX, posY, radius, {
    collisionFilter: {
      category: 0x0002,
      mask: 0x0001
    }
  });
};

class Asteroid extends React.Component {
  componentDidMount() {
    Matter.World.add(WORLD, [this.props.body]);
  }

  componentWillUnmount() {
    Matter.World.remove(WORLD, [this.props.body]);
  }

  render() {
    const width = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.125);
    const height = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.125);
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <View
        style={[
          styles.asteroid,
          {
            left: x,
            top: y,
            width: width,
            height: height,
            borderRadius: width / 2
          }
        ]}
      >
        <Image source={require('../../../assets/images/projectiles/Asteroid.png')} style={styles.asteroid} />
      </View>
    );
  }
}

const styles = {
  asteroid: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: radius,
    height: radius
  }
};

export { Asteroid, Create_Asteroid_Matter };
