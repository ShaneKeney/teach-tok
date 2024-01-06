import Typography from '@/components/atoms/Typography';
import getAnswer from '@/query/getAnswer';
import { Option } from '@/query/getNextQuestion';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Selector from './Option';

type OptionsProps = {
  options: Option[];
  id: number;
};

export default function Options({ options, id }: OptionsProps) {
  const [selections, setSelections] = useState<Array<Option['id']>>([]);

  const onOptionPress = (option: Option) => {
    if (selections.includes(option.id)) return;
    setSelections((prev) => [...prev, option.id]);
  };

  const { data, error } = useQuery({
    queryKey: ['answer', id] as const,
    queryFn: ({ queryKey }) => getAnswer(queryKey[1]) // queryKey[1] is the id
  });

  console.log('Answer: ', data);

  return (
    <View className="gap-2">
      {/* {options.map((option, index) => (
        <Selector option={option} key={index} onOptionPress={onOptionPress} />
      ))} */}
      <Selector option={options[0]} key={'A'} onOptionPress={onOptionPress} result={'correct'} />
      <Selector option={options[1]} key={'B'} onOptionPress={onOptionPress} result={'incorrect'} />
      <Selector option={options[2]} key={'C'} onOptionPress={onOptionPress} result="unselected" />
    </View>
  );
}
