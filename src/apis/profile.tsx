import { GetProfileData } from '../types/music/client';
import { get } from './client';

export const fetchProfileData = async () => {
  try {
    const response = await get<GetProfileData>(`api/v1/profile`);
    console.log(response);
    const { memberName, card } = response.data.data;
    return { memberName, card };
  } catch (error) {
    console.error('There was an error fetching the card data!', error);
    return null;
  }
};
