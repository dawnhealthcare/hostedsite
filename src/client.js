import { createClient } from '@sanity/client';

export const client = createClient({
  dataset: 'production',
  projectId: '4lddormh',
  apiVersion: '2021-10-21',
  useCdn: true,
});
