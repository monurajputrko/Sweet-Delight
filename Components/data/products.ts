export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string[];
  occasion: string[];
  images: string[];
  customizationOptions: Array<{
    id: string;
    name: string;
    options: string[];
    price?: number;
  }>;
  reviews: Array<{
    id: number;
    author: string;
    date: string;
    rating: number;
    comment: string;
  }>;
  rating: number;
  review: number;
}

export const products = [
  {
    id: 1,
    name: 'Classic Red Velvet',
    price: 49.99,
    description: 'Rich and velvety cake with cream cheese frosting',
    category: ['Popular', 'Classic'],
    occasion: ['Birthday', 'Anniversary'],
    images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.9,
    review: 128,

  },
  {
    id: 2,
    name: 'Chocolate Dream',
    price: 54.99,
    description: 'Decadent chocolate layers with ganache filling',
    category: ['Popular', 'Chocolate'],
    occasion: ['Birthday', 'Celebration'],
    images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.8,
    review: 96,
  },
  {
    id: 3,
    name: 'Wedding Special',
    price: 299.99,
    description: 'Elegant three-tier cake with fondant flowers',
    category: ['Premium', 'Wedding'],
    occasion: ['Wedding'],
    images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 5.0,
    review: 52,
  },
  {
    id: 4,
    name: 'Fruit Paradise',
    price: 59.99,
    description: 'Light sponge cake with fresh seasonal fruits',
    category: ['Fruity', 'Healthy'],
    occasion: ['Birthday', 'Summer Party'],
    images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.7,
    review: 73,
  },
  {
    id: 5,
    name: 'Carrot Delight',
    price: 44.99,
    description: 'Moist carrot cake with cream cheese frosting',
    category: ['Classic', 'Healthy'],
    occasion: ['Birthday', 'Casual'],
     images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.6,
    review: 89,
  },
  {
    id: 6,
    name: 'Birthday Funfetti',
    price: 49.99,
    description: 'Colorful vanilla cake filled with sprinkles',
    category: ['Popular', 'Kids'],
    occasion: ['Birthday', 'Children Party'],
     images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.9,
    review: 156,
  },
  {
    id: 7,
    name: 'Classic Red Velvet',
    price: 49.99,
    description: 'Rich and velvety cake with cream cheese frosting',
    category: ['Popular', 'Classic'],
    occasion: ['Birthday', 'Anniversary'],
      images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.9,
    review: 128,
  },
  {
    id: 8,
    name: 'Chocolate Dream',
    price: 54.99,
    description: 'Decadent chocolate layers with ganache filling',
    category: ['Popular', 'Chocolate'],
    occasion: ['Birthday', 'Celebration'],
      images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.8,
    review: 96,
  },
  {
    id: 9,
    name: 'Wedding Special',
    price: 299.99,
    description: 'Elegant three-tier cake with fondant flowers',
    category: ['Premium', 'Wedding'],
    occasion: ['Wedding'],
      images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 5.0,
    review: 52,
  },
  {
    id: 10,
    name: 'Fruit Paradise',
    price: 59.99,
    description: 'Light sponge cake with fresh seasonal fruits',
    category: ['Fruity', 'Healthy'],
    occasion: ['Birthday', 'Summer Party'],
    images: ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    rating: 4.7,
    review: 73,
  },
  {
    id: 11,
    name: 'Carrot Delight',
    price: 44.99,
    description: 'Moist carrot cake with cream cheese frosting',
    category: ['Classic', 'Healthy'],
    occasion: ['Birthday', 'Casual'],
     images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.6,
    review: 89,
  },
  {
    id: 12,
    name: 'Birthday Funfetti',
    price: 49.99,
    description: 'Colorful vanilla cake filled with sprinkles',
    category: ['Popular', 'Kids'],
    occasion: ['Birthday', 'Children Party'],
     images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.9,
    review: 156,
  },
  {
    id: 13,
    name: 'Classic Red Velvet',
    price: 49.99,
    description: 'Rich and velvety cake with cream cheese frosting',
    category: ['Popular', 'Classic'],
    occasion: ['Birthday', 'Anniversary'],
      images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.9,
    review: 128,
  },
  {
    id: 14,
    name: 'Chocolate Dream',
    price: 54.99,
    description: 'Decadent chocolate layers with ganache filling',
    category: ['Popular', 'Chocolate'],
    occasion: ['Birthday', 'Celebration'],
      images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.8,
    review: 96,
  },
  {
    id: 15,
    name: 'Wedding Special',
    price: 299.99,
    description: 'Elegant three-tier cake with fondant flowers',
    category: ['Premium', 'Wedding'],
    occasion: ['Wedding'],
      images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 5.0,
    review: 52,
  },
  {
    id: 16,
    name: 'Fruit Paradise',
    price: 59.99,
    description: 'Light sponge cake with fresh seasonal fruits',
    category: ['Fruity', 'Healthy'],
    occasion: ['Birthday', 'Summer Party'],
    images: ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    rating: 4.7,
    review: 73,
  },
  {
    id: 17,
    name: 'Carrot Delight',
    price: 44.99,
    description: 'Moist carrot cake with cream cheese frosting',
    category: ['Classic', 'Healthy'],
    occasion: ['Birthday', 'Casual'],
     images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.6,
    review: 89,
  },
  {
    id: 18,
    name: 'Birthday Funfetti',
    price: 49.99,
    description: 'Colorful vanilla cake filled with sprinkles',
    category: ['Popular', 'Kids'],
    occasion: ['Birthday', 'Children Party'],
     images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.9,
    review: 156,
  },
  {
    id: 19,
    name: 'Classic Red Velvet',
    price: 49.99,
    description: 'Rich and velvety cake with cream cheese frosting',
    category: ['Popular', 'Classic'],
    occasion: ['Birthday', 'Anniversary'],
      images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.9,
    review: 128,
  },
  {
    id: 20,
    name: 'Chocolate Dream',
    price: 54.99,
    description: 'Decadent chocolate layers with ganache filling',
    category: ['Popular', 'Chocolate'],
    occasion: ['Birthday', 'Celebration'],
      images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.8,
    review: 96,
  },
  {
    id: 21,
    name: 'Wedding Special',
    price: 299.99,
    description: 'Elegant three-tier cake with fondant flowers',
    category: ['Premium', 'Wedding'],
    occasion: ['Wedding'],
      images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 5.0,
    review: 52,
  },
  {
    id: 22,
    name: 'Fruit Paradise',
    price: 59.99,
    description: 'Light sponge cake with fresh seasonal fruits',
    category: ['Fruity', 'Healthy'],
    occasion: ['Birthday', 'Summer Party'],
    images: ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    rating: 4.7,
    review: 73,
  },
  {
    id: 23,
    name: 'Carrot Delight',
    price: 44.99,
    description: 'Moist carrot cake with cream cheese frosting',
    category: ['Classic', 'Healthy'],
    occasion: ['Birthday', 'Casual'],
     images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.6,
    review: 89,
  },
  {
    id: 24,
    name: 'Birthday Funfetti',
    price: 4.99,
    description: 'Colorful vanilla cake filled with sprinkles',
    category: ['Popular', 'Kids'],
    occasion: ['Birthday', 'Children Party'],
     images: [
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    customizationOptions: [
      {
        id: 'size',
        name: 'Size',
        options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
      },
      {
        id: 'frosting',
        name: 'Frosting Type',
        options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
      },
      {
        id: 'message',
        name: 'Custom Message',
        options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
        price: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily Thompson',
        date: 'March 15, 2024',
        rating: 5,
        comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
      },
      {
        id: 2,
        author: 'James Wilson',
        date: 'March 10, 2024',
        rating: 4,
        comment: 'Great taste and beautiful presentation. Delivery was right on time.',
      },
    ],
    rating: 4.9,
    review: 156,
  },
];

export const productOptions = [{
  id: 1,
  name: 'Classic Red Velvet',
  price: 49.99,
  description: 'Our signature red velvet cake features layers of moist, crimson-colored cake filled with smooth cream cheese frosting. Each bite delivers the perfect balance of rich cocoa and vanilla flavors, making it an ideal choice for any special occasion.',
  images: [
    'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  ],
  customizationOptions: [
    {
      id: 'size',
      name: 'Size',
      options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
    },
    {
      id: 'frosting',
      name: 'Frosting Type',
      options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
    },
    {
      id: 'message',
      name: 'Custom Message',
      options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
      price: 5,
    },
  ],
  reviews: [
    {
      id: 1,
      author: 'Emily Thompson',
      date: 'March 15, 2024',
      rating: 5,
      comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
    },
    {
      id: 2,
      author: 'James Wilson',
      date: 'March 10, 2024',
      rating: 4,
      comment: 'Great taste and beautiful presentation. Delivery was right on time.',
    },
  ]
}];