const cartItems = [
  {
    product: {
      name: "Trådlösa hörlurar",
      brand: "North Sound",
      price: 299,
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&auto=format&fit=crop&q=60",
      features: ["Brusreducering", "30 h batteri"],
    },
    quantity: 2,
  },
  {
    product: {
      name: "Mekaniskt tangentbord",
      brand: "Key Works",
      price: 849,
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=60",
      features: ["Svenska tangenter", "RGB-belysning", "USB-C"],
    },
    quantity: 1,
  },
  {
    product: {
      name: "USB-C-hubb",
      brand: "Port Lab",
      price: 399,
      image: "https://plus.unsplash.com/premium_photo-1764113096548-11270b5febed?w=600&auto=format&fit=crop&q=60",
      features: ["4 portar", "HDMI 4K"],
    },
    quantity: 1,
  },
];

const calculateLineTotal = (item) => {
  return item.product.price * item.quantity;
};

// Uppgift 1: Namnen i paketet


// Uppgift 2: Raderna i ordersammanfattningen


// Uppgift 3 och 4: Produktkorten i varukorgen

