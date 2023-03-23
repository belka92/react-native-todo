import React, { ReactNode } from "react";
import { View } from "react-native";
import { useStyles } from "./useStyles";

const Screen = ({ children }: TScreenProps) => {
  const { styles } = useStyles();
  return <View style={styles.container}>{children}</View>;
};

export type TScreenProps = {
  children: ReactNode;
};

export default Screen;
