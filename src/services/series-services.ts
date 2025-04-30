import axios from 'axios';

export async function getTVDetails(tvId: number) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_TMDB_API_URL}/tv/${tvId}`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
      },
    },
  );
  return response.data;
}
