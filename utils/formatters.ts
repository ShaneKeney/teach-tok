export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  if (minutes === 0) return seconds + 's';
  return minutes + 'm';
};
