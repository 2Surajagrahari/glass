const products = [
    {
        name: 'Minimalist Acrylic Welcome Sign',
        price: 4800,
        images: [
            'https://picsum.photos/600/600?random=1&category=wedding',
            'https://picsum.photos/600/600?random=2&category=wedding',
            'https://picsum.photos/600/600?random=3&category=wedding',
        ],
        category: 'Welcome Sign',
        description:
            'A beautiful, modern acrylic welcome sign to greet your guests. Features 3D lettering for a stunning effect. Fully customizable with your names and event date. Stand not included.',
        status: 'In Stock',
        options: [
            { name: 'Size', values: ['18x24"', '24x36"'] },
            { name: 'Lettering Color', values: ['White', 'Black', 'Gold', 'Silver'] },
        ],
        reviews: [
            {
                rating: 5,
                user: 'Priya S.',
                comment:
                    'Absolutely stunning! It was the perfect entrance piece for our wedding.',
            },
        ],
    },
    {
        name: 'Elegant Frosted Seating Chart',
        price: 9500,
        images: [
            'https://picsum.photos/600/600?random=4&category=event',
            'https://picsum.photos/600/600?random=5&category=event',
        ],
        category: 'Seating Chart',
        description:
            'A large, frosted acrylic seating chart that adds a touch of class to any reception. We will work with you to finalize your guest list and layout. Can accommodate up to 200 guests.',
        status: 'In Stock',
        options: [
            { name: 'Style', values: ['Frosted', 'Clear', 'Painted Back'] },
            { name: 'Orientation', values: ['Portrait', 'Landscape'] },
        ],
        reviews: [
            {
                rating: 5,
                user: 'Emily R.',
                comment: 'So elegant. We received so many compliments on it.',
            },
        ],
    },
    {
        name: '"Oh Baby" Baby Shower Sign',
        price: 3500,
        images: [
            'https://picsum.photos/600/600?random=6&category=party',
            'https://picsum.photos/600/600?random=7&category=party',
        ],
        category: 'Baby Shower',
        description:
            "The perfect backdrop piece for a baby shower. This \"Oh Baby\" sign is crafted from premium acrylic with beautiful script lettering. Can be customized with the baby's name or due date.",
        status: 'In Stock',
        options: [
            {
                name: 'Color Theme',
                values: [
                    'Neutral (Beige/White)',
                    'Baby Blue',
                    'Baby Pink',
                    'Sage Green',
                ],
            },
        ],
        reviews: [
            {
                rating: 5,
                user: 'David L.',
                comment: 'A true work of art. It was the centerpiece of our decor.',
            },
        ],
    },
    {
        name: 'Modern Birthday Welcome Sign',
        price: 3200,
        images: [
            'https://picsum.photos/600/600?random=8&category=birthday',
            'https://picsum.photos/600/600?random=9&category=birthday',
        ],
        category: 'Birthday Sign',
        description:
            'Celebrate in style! This custom birthday sign is perfect for milestone birthdays (18th, 21st, 30th, 50th). Features a modern layout with the name and age.',
        status: 'In Stock',
        options: [
            { name: 'Shape', values: ['Arch', 'Rectangle', 'Circle'] },
            {
                name: 'Finish',
                values: ['Matte Black', 'Matte White', 'Blush Pink'],
            },
        ],
        reviews: [
            {
                rating: 5,
                user: 'Chen W.',
                comment: "Bold and beautiful. My daughter loved it for her 21st!",
            },
        ],
    },
    {
        name: 'Acrylic Table Numbers (Set of 10)',
        price: 4100,
        images: [
            'https://picsum.photos/600/600?random=10&category=table',
            'https://picsum.photos/600/600?random=11&category=table',
        ],
        category: 'Table Number',
        description:
            'A set of 10 minimalist acrylic table numbers with stands. Clear acrylic with vinyl or 3D lettering. Helps your guests find their table with ease and style.',
        status: 'In Stock',
        options: [
            { name: 'Lettering', values: ['White Vinyl', 'Black Vinyl', 'Gold 3D Acrylic'] },
            { name: 'Stand Color', values: ['Clear', 'Wood', 'Gold'] },
        ],
        reviews: [
            {
                rating: 5,
                user: 'Michelle B.',
                comment: 'So chic and matched our theme perfectly.',
            },
        ],
    },
    {
        name: 'Arch Reserved Sign',
        price: 1200,
        images: [
            'https://picsum.photos/600/600?random=12&category=sign',
            'https://picsum.photos/600/600?random=13&category=sign',
        ],
        category: 'Reserved Sign',
        description:
            'A small, elegant arch-shaped "Reserved" sign for ceremony chairs or special tables. Includes a silk ribbon. Price is per sign.',
        status: 'In Stock',
        options: [
            { name: 'Ribbon Color', values: ['White', 'Black', 'Dusty Blue', 'None'] },
        ],
        reviews: [],
    },
    {
        name: 'Minimalist Menu Cards (Set of 25)',
        price: 3800,
        images: [
            'https://picsum.photos/600/600?random=14&category=menu',
            'https://picsum.photos/600/600?random=15&category=menu',
        ],
        category: 'Menu Cards',
        description:
            "A set of 25 beautifully designed menu cards, printed on high-quality vellum or thick cardstock. We will customize the text to match your event's menu.",
        status: 'In Stock',
        options: [
            { name: 'Material', values: ['Vellum', 'White Cardstock', 'Black Cardstock'] },
            { name: 'Print Color', values: ['Black', 'White', 'Gold Foil'] },
        ],
        reviews: [
            {
                rating: 5,
                user: 'Jessica P.',
                comment: 'So glamorous! The gold foil was perfect.',
            },
        ],
    },
    {
        name: 'Acrylic Place Cards (Set of 10)',
        price: 2000,
        images: [
            'https://picsum.photos/600/600?random=16&category=name',
            'https://picsum.photos/600/600?random=17&category=name',
        ],
        category: 'Place Cards',
        description:
            "A set of 10 personalized acrylic place cards with your guests' names. A beautiful keepsake for your attendees. Please provide name list after checkout.",
        status: 'In Stock',
        options: [
            { name: 'Style', values: ['Clear', 'Frosted'] },
            { name: 'Ink Color', values: ['White', 'Black', 'Gold'] },
        ],
        reviews: [],
    },
    {
        name: 'Frosted Thank You Cards (Set of 25)',
        price: 2500,
        images: [
            'https://picsum.photos/600/600?random=18&category=card',
            'https://picsum.photos/600/600?random=19&category=card',
        ],
        category: 'Thankyou Cards',
        description:
            'A set of 25 unique frosted acrylic thank you cards. A memorable way to thank your guests for celebrating with you. Envelopes included.',
        status: 'In Stock',
        options: [{ name: 'Size', values: ['A2 (4.25x5.5")', 'A7 (5x7")'] }],
        reviews: [],
    },
    {
        name: 'Round Welcome Sign (Floral)',
        price: 5200,
        images: [
            'https://picsum.photos/600/600?random=20&category=floral',
            'https://picsum.photos/600/600?random=21&category=floral',
        ],
        category: 'Welcome Sign',
        description:
            'A stunning round welcome sign with a painted back and 3D acrylic lettering. Perfect for a garden wedding or floral-themed baby shower.',
        status: 'In Stock',
        options: [
            { name: 'Diameter', values: ['24"', '30"'] },
            { name: 'Painted Back Color', values: ['Blush Pink', 'Dusty Blue', 'White'] },
        ],
        reviews: [
            {
                rating: 5,
                user: 'Sarah K.',
                comment: "Absolutely perfect for my sister's shower.",
            },
        ],
    },
];

export default products;