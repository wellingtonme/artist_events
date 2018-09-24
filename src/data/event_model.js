import { request } from '@/utils/artists_events_request_helper';

// eslint-disable-next-line import/prefer-default-export
export const getArtistEvents = async (artistName) => {
  try {
    return await request(EVENTS_SERVICE, { artistName });
  } catch (ex) {
    return {};
  }
};
