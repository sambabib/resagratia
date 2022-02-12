// @assets
import FuelUK from '../assets/fuelprices-uk.jpg';
import FoodNigeria from '../assets/food-nigeria.jpg';
import CryptoPunk from '../assets/cryptopunk.jpg';
import Films from '../assets/1000-films.jpg';

export const datasets = [
  {
    id: 1,
    title: `UK Petrol Prices`,
    size: '420KB',
    tag: `Economy`,
    img: FuelUK,
    alt: `By Gustavo Fring from Pexels`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh lacus, scelerisque at urna eget, placerat pharetra tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi nec pellentesque nibh. Etiam feugiat varius nisi, quis sagittis quam pretium id. Vestibulum ultricies lacus id lobortis iaculis. Fusce lobortis semper congue. Phasellus at arcu id elit placerat tempus et vel eros.
    Donec ante nulla, tempor dignissim ante ut, accumsan suscipit odio. Vestibulum sollicitudin, urna non suscipit pretium, tellus ante rutrum lacus, et rhoncus metus sem nec enim. Mauris non eros maximus, convallis urna molestie, lacinia dolor. Pellentesque suscipit sollicitudin elit, et vestibulum tortor euismod eu. Duis ut pellentesque ligula. Ut quis mauris ultricies, vehicula augue commodo, ultrices dolor. Vestibulum volutpat euismod suscipit. Integer vulputate velit a viverra rutrum. Nulla aliquam ante metus, vitae tempus diam dictum eu. Curabitur viverra pharetra placerat. Sed at ipsum vel orci egestas finibus. Nulla volutpat justo metus, non aliquam ipsum rutrum ut. Sed commodo a purus a efficitur.`,
    source: `https://coinbase.com/NFTcollections`,
    file: process.env.PUBLIC_URL + `/resources/petrol-data.csv`,
    type: `.csv`
  },
  {
    id: 2,
    title: `Selected Food Prices Watch (Nigeria)`,
    size: '1.06MB',
    tag: `Economy`,
    img: FoodNigeria,
    alt: `By Vie Studio from Pexels`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh lacus, scelerisque at urna eget, placerat pharetra tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi nec pellentesque nibh. Etiam feugiat varius nisi, quis sagittis quam pretium id. Vestibulum ultricies lacus id lobortis iaculis. Fusce lobortis semper congue. Phasellus at arcu id elit placerat tempus et vel eros.
    Donec ante nulla, tempor dignissim ante ut, accumsan suscipit odio. Vestibulum sollicitudin, urna non suscipit pretium, tellus ante rutrum lacus, et rhoncus metus sem nec enim. Mauris non eros maximus, convallis urna molestie, lacinia dolor. Pellentesque suscipit sollicitudin elit, et vestibulum tortor euismod eu. Duis ut pellentesque ligula. Ut quis mauris ultricies, vehicula augue commodo, ultrices dolor. Vestibulum volutpat euismod suscipit. Integer vulputate velit a viverra rutrum. Nulla aliquam ante metus, vitae tempus diam dictum eu. Curabitur viverra pharetra placerat. Sed at ipsum vel orci egestas finibus. Nulla volutpat justo metus, non aliquam ipsum rutrum ut. Sed commodo a purus a efficitur.`,
    source: `https://coinbase.com/NFTcollections`,
    file: process.env.PUBLIC_URL + `/resources/food-data.xlsx`,
    type: `.xlsx`
  },
  {
    id: 3,
    title: `Top NFT Collections`,
    size: '125KB',
    tag: `Internet`,
    img: CryptoPunk,
    alt: `CryptoPunk`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh lacus, scelerisque at urna eget, placerat pharetra tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi nec pellentesque nibh. Etiam feugiat varius nisi, quis sagittis quam pretium id. Vestibulum ultricies lacus id lobortis iaculis. Fusce lobortis semper congue. Phasellus at arcu id elit placerat tempus et vel eros.
    Donec ante nulla, tempor dignissim ante ut, accumsan suscipit odio. Vestibulum sollicitudin, urna non suscipit pretium, tellus ante rutrum lacus, et rhoncus metus sem nec enim. Mauris non eros maximus, convallis urna molestie, lacinia dolor. Pellentesque suscipit sollicitudin elit, et vestibulum tortor euismod eu. Duis ut pellentesque ligula. Ut quis mauris ultricies, vehicula augue commodo, ultrices dolor. Vestibulum volutpat euismod suscipit. Integer vulputate velit a viverra rutrum. Nulla aliquam ante metus, vitae tempus diam dictum eu. Curabitur viverra pharetra placerat. Sed at ipsum vel orci egestas finibus. Nulla volutpat justo metus, non aliquam ipsum rutrum ut. Sed commodo a purus a efficitur.`,
    source: `https://coinbase.com/NFTcollections`,
    file: process.env.PUBLIC_URL + `/resources/nft-data.csv`,
    type: `.csv`
  },
  {
    id: 4,
    title: `Top 1000 Highest Grossing Movies`,
    size: '287KB',
    tag: `Entertainment`,
    img: Films,
    alt: `By Ron Lach from Pexels`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh lacus, scelerisque at urna eget, placerat pharetra tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi nec pellentesque nibh. Etiam feugiat varius nisi, quis sagittis quam pretium id. Vestibulum ultricies lacus id lobortis iaculis. Fusce lobortis semper congue. Phasellus at arcu id elit placerat tempus et vel eros.
    Donec ante nulla, tempor dignissim ante ut, accumsan suscipit odio. Vestibulum sollicitudin, urna non suscipit pretium, tellus ante rutrum lacus, et rhoncus metus sem nec enim. Mauris non eros maximus, convallis urna molestie, lacinia dolor. Pellentesque suscipit sollicitudin elit, et vestibulum tortor euismod eu. Duis ut pellentesque ligula. Ut quis mauris ultricies, vehicula augue commodo, ultrices dolor. Vestibulum volutpat euismod suscipit. Integer vulputate velit a viverra rutrum. Nulla aliquam ante metus, vitae tempus diam dictum eu. Curabitur viverra pharetra placerat. Sed at ipsum vel orci egestas finibus. Nulla volutpat justo metus, non aliquam ipsum rutrum ut. Sed commodo a purus a efficitur.`,
    source: `https://coinbase.com/NFTcollections`,
    file: process.env.PUBLIC_URL + `/resources/movie-data.csv`,
    type: `.csv`
  },
];
