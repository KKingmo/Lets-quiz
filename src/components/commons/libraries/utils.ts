export const elapsedTime = (value: any) => {
  const today = new Date();
  const timeValue = new Date(value);

  const elapsedMinutes = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );

  const elapsedSeconds = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000
  );

  if (elapsedMinutes < 1) return `${elapsedSeconds}초 전`;
  if (elapsedMinutes < 60) {
    return `${elapsedMinutes}분 전`;
  }

  const elapsedHours = Math.floor(elapsedMinutes / 60);
  if (elapsedHours < 24) {
    return `${elapsedHours}시간 전`;
  }

  const elapsedDays = Math.floor(elapsedMinutes / 60 / 24);
  if (elapsedDays < 365) {
    return `${elapsedDays}일 전`;
  }

  return `${Math.floor(elapsedDays / 365)}년 전`;
};
