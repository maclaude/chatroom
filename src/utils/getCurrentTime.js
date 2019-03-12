/**
 * Utils: getCurrentTime
 */
const getCurrentTime = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  return `${currentHour}:${currentMinute}`;
};

/**
 * Export
 */
export default getCurrentTime;
