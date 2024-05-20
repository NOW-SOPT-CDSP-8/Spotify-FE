import axios from 'axios';

export const fetchProfileData = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL}/api/v1/profile`,
      {
        headers: {
          'Content-Type': 'application/json',
          memberId: '1',
        },
      },
    );
    console.log(response);
    const { memberName, card } = response.data.data;
    return { memberName, card };
  } catch (error) {
    console.error('There was an error fetching the card data!', error);
    return null;
  }
};
