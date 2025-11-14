import { ActivityIndicator } from "react-native"; //componente de loading

import { colors } from "@/styles/theme";
import { s } from "./style"; //meu css

export function Loading() {
  return <ActivityIndicator color={colors.green.base} style={s.container} />;
}
