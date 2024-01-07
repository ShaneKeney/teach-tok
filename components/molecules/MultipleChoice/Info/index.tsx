import Typography from '@/components/atoms/Typography';
import { View } from 'react-native';

type Props = {
  description: string;
  userName: string;
};

export default function Info({ description, userName }: Props) {
  // Add some logic to format the desciption string and parsing out the #...
  const { extractedHashTag, parsedString } = parseHashTag(description);
  return (
    <View className="gap-[6px]">
      <Typography font="semiBold" size="15">
        {userName}
      </Typography>
      <Typography font="regular" size="13">
        {parsedString}
        <Typography font="bold" size="13">
          {extractedHashTag}
        </Typography>
      </Typography>
    </View>
  );
}

function parseHashTag(input: string) {
  // Regex that matches the following word patterns:
  // #word #apush #anythingafterhash
  const regex = /#(\w+)/;

  const match = input.match(regex);
  if (match) {
    const matchedText = match[0]; // The matched text, e.g., "#<word>"

    const parsedString = input.replace(matchedText, ''); // Remove the matched text

    return { parsedString, extractedHashTag: matchedText };
  } else {
    // No match found
    return { parsedString: input, extractedHashTag: null };
  }
}
