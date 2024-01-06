import axios from 'axios';

export type MultipleChoiceQuestion = {
  type: 'mcq';
  id: number;
  playlist: string;
  description: string;
  image?: string;
  question: string;
  options: Option[];
  user: {
    name: string;
    avatar?: string;
  };
};

export type Option = {
  id: 'A' | 'B' | 'C';
  answer: string;
};

// Each GET request returns a new MC question
export default async function getNextQuestion() {
  const response = await axios.get<MultipleChoiceQuestion>(
    'https://cross-platform.rp.devfactory.com/for_you'
  );
  return [response.data];
}
