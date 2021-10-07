import React from 'react';
import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card';
import { Layout, QueryResult } from '../components';

/** TRACKS gql query to retreive all tracks */
export const TRACKS = gql`
  query Query {
  allCards {
    nodes {
      id
      name
      position
      price
      rarity
      pictureUrl
    }
  }
}
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.allCards.nodes?.map((track, index) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
