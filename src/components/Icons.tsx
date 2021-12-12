import React from 'react';
import {IconProps, IconButtonProps} from 'react-native-vector-icons/Icon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';
import {StyleSheet} from 'react-native';

const validIcon = (name: string) => {
  if (MaterialIcons.hasIcon(name)) {
    return MaterialIcons;
  } else if (MaterialCommunityIcons.hasIcon(name)) {
    return MaterialCommunityIcons;
  }
  return MaterialIcons;
};

export function Icon(props: IconProps) {
  const theme = useTheme();

  const Icon = validIcon(props.name);
  return <Icon color={theme.PRIMARY_TEXT_COLOR} size={25} {...props} />;
}

export function TouchableIcon(props: IconButtonProps) {
  const theme = useTheme();
  const Icon = validIcon(props.name);
  return (
    <Icon
      color={theme.PRIMARY_TEXT_COLOR}
      size={25}
      {...props}
      style={style.icBut}
    />
  );
}

const style = StyleSheet.create({
  icBut: {
    padding: 5,
  },
});
