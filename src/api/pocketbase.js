import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PB_URL);

// Pocketbase SDK {}
export default pb;
