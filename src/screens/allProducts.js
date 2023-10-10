// allProducts.js
  const allProducts = [
    {
      id: '3',
      name: 'LED Desk Lamp',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
      price: 34.99,
      description: 'Elegant LED desk lamp with adjustable brightness and color temperature.',
      wattage: 12,
      colorTemperature: '3000K - 6000K',
      lumens: 450,
      rating: 4.8,
    },
    {
      id: '4',
      name: 'Solar Garden Light',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBnYXJkZW4lMjBsYW1wfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      price: 15.99,
      description: 'Solar-powered garden light with motion sensor and waterproof design.',
      wattage: 5,
      colorTemperature: '4000K - Cool White',
      lumens: 300,
      rating: 4.2,
    },
    {
      id: '5',
      name: 'Smart LED Bulb',
      image: 'https://images.unsplash.com/photo-1560179556-9f4e968531e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNlaWxpbmclMjBsaWdodHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
      price: 19.99,
      description: 'WiFi-enabled LED bulb with app control, compatible with Alexa and Google Assistant.',
      wattage: 9,
      colorTemperature: '2700K - Warm White',
      lumens: 800,
      rating: 4.6
    },
    {
      id: '6',
      name: 'Outdoor Flood Light',
      image: 'https://images.unsplash.com/photo-1543157969-f73b8843aad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNlaWxpbmclMjBsaWdodHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
      price: 49.99,
      description: 'High-intensity LED flood light with motion sensor, perfect for outdoor security lighting.',
      wattage: 30,
      colorTemperature: '5000K - Daylight',
      lumens: 2500,
      rating: 4.9
    },
    {
      id: '7',
      name: 'Smart Ceiling Light',
      image: 'https://images.unsplash.com/photo-1532969074436-4542a82b4bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNlaWxpbmclMjBsaWdodHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
      price: 69.99,
      description: 'WiFi-enabled smart ceiling light with adjustable color temperature and brightness, compatible with Alexa and Google Assistant.',
      wattage: 24,
      colorTemperature: '2700K - 6500K',
      lumens: 1800,
      rating: 4.7
    },
    {
      id: '8',
      name: 'LED Strip Lights',
      image: 'https://images.unsplash.com/photo-1622127922040-13cab637ee78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNlaWxpbmclMjBsaWdodHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
      price: 29.99,
      description: 'Flexible LED strip lights with adhesive backing, perfect for accent lighting and decoration.',
      wattage: 12,
      colorTemperature: 'RGB - Multicolor',
      lumens: 600,
      rating: 4.5
    },
    {
      id: '9',
      name: 'Table Lamp',
      image: 'https://plus.unsplash.com/premium_photo-1678226971772-2159ca56356c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2VpbGluZyUyMGxpZ2h0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      price: 24.99,
      description: 'Modern table lamp with adjustable arm and shade, perfect for reading and studying.',
      wattage: 7,
      colorTemperature: '2700K - Warm White',
      lumens: 500,
      rating: 4.4
    },
    {
      id: '10',
      name: 'Floor Lamp',
      image: 'https://images.unsplash.com/photo-1613908141043-8f7241569066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNlaWxpbmclMjBsaWdodHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
      price: 89.99,
      description: 'Elegant floor lamp with adjustable height and shade, perfect for living rooms and bedrooms.',
      wattage: 18,
      colorTemperature: '2700K - Warm White',
      lumens: 1200,
      rating: 4.8
    },
    {
      id: '11',
      name: 'Smart Night Light',
      image: 'https://images.unsplash.com/photo-1569327015452-131a698ae69e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2VpbGluZyUyMGxpZ2h0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      price: 14.99,
      description: 'WiFi-enabled night light with motion sensor and light sensor, perfect for kids\' rooms and nurseries.',
      wattage: 1,
      colorTemperature: '2700K - Warm White',
      lumens: 50,
      rating: 4.3
    },
    {
      id: '12',
      name: 'LED Spotlight',
      image: 'https://images.unsplash.com/photo-1622127922040-13cab637ee78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNlaWxpbmclMjBsaWdodHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
      price: 39.99,
      description: 'Bright LED spotlight with adjustable angle and waterproof design, perfect for outdoor activities.',
      wattage: 10,
      colorTemperature: '5000K - Daylight',
      lumens: 800,
      rating: 4
    },
    {
      id: '13',
      name: 'Desk Lamp',
      image: 'https://images.unsplash.com/photo-1543157969-f73b8843aad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNlaWxpbmclMjBsaWdodHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
      price: 39.99,
      description: 'Classic desk lamp with adjustable arm and shade, perfect for home office and study.',
      wattage: 10,
      colorTemperature: '2700K - Warm White',
      lumens: 800,
      rating: 4.2
    },
    {
      id: '14',
      name: 'LED String Lights',
      image: 'https://images.unsplash.com/photo-1560179556-9f4e968531e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNlaWxpbmclMjBsaWdodHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
      price: 12.99,
      description: 'Decorative LED string lights with multiple lighting modes, perfect for holidays and parties.',
      wattage: 5,
      colorTemperature: 'RGB - Multicolor',
      lumens: 200,
      rating: 4.5
    }
    // Add more products here
  ];
  
  export default allProducts;
  