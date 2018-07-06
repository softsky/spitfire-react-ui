import { actionTypes } from '../reducers/newReleases';

const newReleases = [
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '1',
  },
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '2',
  },
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '3',
  },
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '4',
  },
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '5',
  },
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '6',
  },
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '7',
  },
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '8',
  },
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '9',
  },
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '10',
  },
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '11',
  },
  {
    image: 'https://5.imimg.com/data5/YM/QA/MY-9581609/nike-air-max-2017-red-black-the-air-cushion-500x500.png',
    date: '6/15/2018 10:00:00 AM',
    name: 'AIR MAX 98',
    sku: 'AJSAEK-2213',
    price: 170,
    id: '12',
  },
];

export function fetchNewReleases() {
  return {
    type: actionTypes.FETCH_NEW_RELEASES_SUCCESS,
    payload: newReleases,
  };
}
