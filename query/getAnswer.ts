import axios from 'axios';
import { Option } from './getNextQuestion';

export type QuestionAnswer = {
  id: number;
  correct_options: Option[];
};

// Each GET request returns the answer to a MC question
export default async function getAnswer(id: number) {
  const response = await axios.get<QuestionAnswer>(
    `${process.env.EXPO_PUBLIC_BASE_URL}/reveal?id=${id}`
  );
  return response.data;
}
