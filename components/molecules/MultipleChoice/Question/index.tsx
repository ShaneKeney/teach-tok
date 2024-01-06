import { MultipleChoiceQuestion } from '@/query/getNextQuestion';
import { View } from 'react-native';
import Options from './Options';
import Title from './Title';

type Props = {
  data: MultipleChoiceQuestion;
};

export default function Question({ data }: Props) {
  return (
    <View className="flex-1 gap-6">
      <Question.Title question={data.question} />
      <Question.Options options={data.options} />
    </View>
  );
}

Question.Title = Title;
Question.Options = Options;
