const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url:  "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
     category: "Trending",
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
     category: "Trending",
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    price: 2500,
    location: "Florence",
    country: "Italy",
     category: "Trending",
  },

  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
     category: "Trending",
},
   {
        "title": "Ski-In/Ski-Out Chalet",
        "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        "image": {
          "filename": "listingimage",
          url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        "price": 3000,
        "location": "Verbier",
        "country": "Switzerland"
    },
    {
        "title": "Safari Lodge in the Serengeti",
        "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        "image": {
          "filename": "listingimage",
          url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
        "price": 4000,
        "location": "Serengeti National Park",
        "country": "Tanzania"
        
    },
    {
        "title": "Historic Canal House",
        "description": "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        "image": {
          "filename": "listingimage",
          url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          },
        "price": 1800,
        "location": "Amsterdam",
        "country": "Netherlands"
    },
    {
        "title": "Private Island Retreat",
        "description": "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        "image": {
          "filename": "listingimage",
          url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          },
        "price": 10000,
        "location": "Fiji",
        "country": "Fiji", 
        category: "Trending",
    },
    {
        "title": "Charming Cottage in the Cotswolds",
        "description": "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        "image": {
          "filename": "listingimage",
          url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          },
        "price": 1200,
        "location": "Cotswolds",
        "country": "United Kingdom",
         category: "Trending",
    },
    {
        "title": "Historic Brownstone in Boston",
        "description": "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        "image": {
          "filename": "listingimage",
          url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
        "price": 2200,
        location: "Boston",
        country: "United States",
         category: "Trending",
    },
    {
        title: "Beachfront Bungalow in Bali",
        description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Bali",
        country: "Indonesia"
    },
    {
        title: "Mountain View Cabin in Banff",
        description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Banf",
        country: "Canada"
    },
    {
        title: "Art Deco Apartment in Miami",
        description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
          filename: "listingimage",
          url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Miami",
        country: "United States"
    },
    {
        title: "Tropical Villa in Phuket",
        description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
        category: "Trending",
    },
    {
        title: "Historic Castle in Scotland",
        description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom"
    },
  {
    title: "Cozy Room in Mumbai",
    description: "Perfect for students or working professionals. Close to metro station.",
    image: {
      filename: "room1",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    price: 900,
    location: "Mumbai",
    country: "India",
    category: "Room",
  },
  {
    title: "Private Room in Bangalore",
    description: "Fully furnished with attached bathroom and balcony.",
    image: {
      filename: "room2",
      url: "https://images.unsplash.com/photo-1505692795793-20f543407193?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "Bangalore",
    country: "India",
    category: "Room",
  },
  {
    title: "Affordable Room in Delhi",
    description: "Quiet and safe neighborhood. Ideal for single occupancy.",
    image: {
      filename: "room3",
      url: "https://plus.unsplash.com/premium_photo-1675745329401-ed4b9b73be6a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 750,
    location: "Delhi",
    country: "India",
    category: "Room",
  },
  {
    title: "Luxury Room in Pune",
    description: "Spacious room with AC and WiFi included. Close to IT hub.",
    image: {
      filename: "room4",
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Pune",
    country: "India",
    category: "Room",
  }

];

module.exports = { data: sampleListings };


