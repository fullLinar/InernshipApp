import React from 'react';
import { View, Text } from 'react-native';

const MyDesk = (props) => {
  return (
    <View>
      {!props.isFetching ? <Text>My Desk</Text> : <Text>is fetching</Text>}
    </View>
  );
};

export default MyDesk;
