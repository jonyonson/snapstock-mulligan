export const IEX_CLOUD_API_KEY = process.env.NEXT_PUBLIC_IEX_CLOUD_API_KEY;

export const IEX_API = {
  SEARCH: 'https://cloud.iexapis.com/stable/search/',
  TOKEN: `?token=${IEX_CLOUD_API_KEY}`,
  KEY: IEX_CLOUD_API_KEY,
};
