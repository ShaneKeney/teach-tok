import getAnswer from '@/query/getAnswer';
import { Option } from '@/query/getNextQuestion';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { View } from 'react-native';
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

  const optionState = (id: Option['id']) => {
    if (!selections.includes(id)) return 'unselected';
    if (data?.correct_options[0].id === id) return 'correct';
    return 'incorrect';
  };

  return (
    <View className="gap-2">
      {options.map((option, index) => (
        <Selector
          option={option}
          key={index}
          onOptionPress={onOptionPress}
          result={optionState(option.id)}
        />
      ))}
    </View>
  );
}
