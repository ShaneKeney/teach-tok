import Typography from "@/components/atoms/Typography";
import { Option } from "@/query/getNextQuestion";
import { View, TouchableOpacity } from "react-native";

type OptionsProps = {
  options: Option[];
};

export default function Options({ options }: OptionsProps) {
  return (
    <View className="gap-2">
      {options.map((option, index) => (
        <TouchableOpacity key={index} className="rounded-[8px] bg-[rgba(255,255,255,0.5)] p-[12px]">
          <Typography className="shadow-[0_1px_2.5px_1px_rgba(0,0,0,0.45)]" font="medium" size="17">
            {option.answer}
          </Typography>
        </TouchableOpacity>
      ))}
    </View>
  );
};