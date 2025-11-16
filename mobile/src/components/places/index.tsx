import { useRef } from "react";
import { useWindowDimensions, Text } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Place, PlaceProps } from "../place";
import { s } from "./styles";

type Props = {
  data: PlaceProps[];
};

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList<PlaceProps>
        data={data}
        keyExtractor={(item: PlaceProps) => item.id}
        renderItem={({ item }: { item: PlaceProps }) => <Place data={item} />}
        contentContainerStyle={s.content}
        ListHeaderComponent={() => {
          <Text style={s.title}> Explore loais perto de você</Text>;
        }}
        showVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
