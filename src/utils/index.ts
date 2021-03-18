export const allowOrigins = (): string[] => {
  const origins = process.env.ALLOW_ORIGINS_URLS || '';

  return origins.split(' ').filter((el) => el !== '');
};
