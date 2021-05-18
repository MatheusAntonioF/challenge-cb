const isMobile = (): boolean => {
  const REGEX_DEVICE =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i;

  return navigator.userAgent.match(REGEX_DEVICE) !== null;
};

export { isMobile };
