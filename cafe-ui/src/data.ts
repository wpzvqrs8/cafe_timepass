export type Category = {
  id: string;
  name: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  categoryId: string;
  image: string;
  isVeg: boolean;
  isPopular?: boolean;
  isNew?: boolean;
};

export const categories: Category[] = [
  { id: 'all', name: 'All' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'cold-brew', name: 'Cold Brew' },
  { id: 'matcha', name: 'Matcha' },
  { id: 'food', name: 'Food' },
  { id: 'desserts', name: 'Desserts' },
];

export const menuItems: MenuItem[] = [
  {
    id: 'm1',
    name: 'Artisan Espresso',
    description: 'A double shot of our signature dark roast with rich crema. Roasted locally.',
    price: 149,
    rating: 4.8,
    reviews: 342,
    categoryId: 'coffee',
    image: 'https://picsum.photos/id/1060/800/600',
    isVeg: true,
  },
  {
    id: 'm2',
    name: 'Kyoto Cold Brew',
    description: 'Slow-dripped for 16 hours. Incredibly smooth with notes of dark chocolate and cherry.',
    price: 249,
    originalPrice: 299,
    rating: 4.9,
    reviews: 847,
    categoryId: 'cold-brew',
    image: 'https://picsum.photos/id/431/800/600',
    isVeg: true,
    isPopular: true,
  },
  {
    id: 'm3',
    name: 'Ceremonial Matcha Latte',
    description: 'Uji matcha whisked to perfection with your choice of milk. Earthy and balanced.',
    price: 299,
    rating: 4.7,
    reviews: 215,
    categoryId: 'matcha',
    image: 'https://picsum.photos/id/225/800/600',
    isVeg: true,
    isNew: true,
  },
  {
    id: 'm4',
    name: 'Truffle Mushroom Croissant',
    description: 'Flaky butter croissant filled with creamy truffle mushroom duxelles.',
    price: 199,
    rating: 4.6,
    reviews: 124,
    categoryId: 'food',
    image: 'https://picsum.photos/id/163/800/600',
    isVeg: true,
    isPopular: true,
  },
  {
    id: 'm5',
    name: 'Burnt Basque Cheesecake',
    description: 'Caramelized top with a perfectly gooey center. Our signature dessert.',
    price: 349,
    rating: 4.9,
    reviews: 512,
    categoryId: 'desserts',
    image: 'https://picsum.photos/id/493/800/600',
    isVeg: false,
    isPopular: true,
  },
  {
    id: 'm6',
    name: 'Salted Caramel Pour Over',
    description: 'Manual pour over enhanced with a hint of artisanal sea salt and house caramel.',
    price: 279,
    rating: 4.8,
    reviews: 189,
    categoryId: 'coffee',
    image: 'https://picsum.photos/id/835/800/600',
    isVeg: true,
  }
];

export const reviews = [
  { id: 1, text: "The cold brew changed my life honestly", author: "Priya M.", rating: 5 },
  { id: 2, text: "Best matcha latte in the city. The aesthetics are just a bonus.", author: "Rahul K.", rating: 5 },
  { id: 3, text: "That truffle croissant is something I dream about.", author: "Ayesha S.", rating: 5 },
];
