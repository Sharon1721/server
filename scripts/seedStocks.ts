import mongoose from 'mongoose';
import { Stock } from '../models/Stock';

const stocksData = [
  {
    ticker: "AAPL",
    name: "Apple Inc",
    exchange: "NASDAQ",
    price: 170.50,
    logo: "https://companieslogo.com/img/orig/AAPL-bf1a4314.png",
    ipo: "1980-12-12",
    industry: "Technology",
    country: "US",
    currency: "USD",
    weburl: "https://www.apple.com"
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corporation",
    exchange: "NASDAQ",
    price: 325.60,
    logo: "https://companieslogo.com/img/orig/MSFT-ea596a93.png",
    ipo: "1986-03-13",
    industry: "Technology",
    country: "US",
    currency: "USD",
    weburl: "https://www.microsoft.com"
  },
  {
    ticker: "GOOGL",
    name: "Alphabet Inc",
    exchange: "NASDAQ",
    price: 139.20,
    logo: "https://companieslogo.com/img/orig/GOOGL-0ed88f7c.png",
    ipo: "2004-08-19",
    industry: "Technology",
    country: "US",
    currency: "USD",
    weburl: "https://www.google.com"
  },
  {
    ticker: "AMZN",
    name: "Amazon.com Inc",
    exchange: "NASDAQ",
    price: 178.15,
    logo: "https://companieslogo.com/img/orig/AMZN-e9f942e4.png",
    ipo: "1997-05-15",
    industry: "Consumer Cyclical",
    country: "US",
    currency: "USD",
    weburl: "https://www.amazon.com"
  },
  {
    ticker: "TSLA",
    name: "Tesla Inc",
    exchange: "NASDAQ",
    price: 246.80,
    logo: "https://companieslogo.com/img/orig/TSLA-6da550e5.png",
    ipo: "2010-06-29",
    industry: "Automotive",
    country: "US",
    currency: "USD",
    weburl: "https://www.tesla.com"
  },
  {
    ticker: "META",
    name: "Meta Platforms Inc",
    exchange: "NASDAQ",
    price: 475.25,
    logo: "https://companieslogo.com/img/orig/META-5c2a9af1.png",
    ipo: "2012-05-18",
    industry: "Technology",
    country: "US",
    currency: "USD",
    weburl: "https://about.meta.com"
  },
  {
    ticker: "NVDA",
    name: "NVIDIA Corporation",
    exchange: "NASDAQ",
    price: 923.70,
    logo: "https://companieslogo.com/img/orig/NVDA-9a00de21.png",
    ipo: "1999-01-22",
    industry: "Semiconductors",
    country: "US",
    currency: "USD",
    weburl: "https://www.nvidia.com"
  },
  {
    ticker: "JPM",
    name: "JPMorgan Chase & Co",
    exchange: "NYSE",
    price: 192.18,
    logo: "https://companieslogo.com/img/orig/JPM-0b2fc29b.png",
    ipo: "1980-03-17",
    industry: "Financial Services",
    country: "US",
    currency: "USD",
    weburl: "https://www.jpmorganchase.com"
  },
  {
    ticker: "V",
    name: "Visa Inc",
    exchange: "NYSE",
    price: 275.96,
    logo: "https://companieslogo.com/img/orig/V-e57055e9.png",
    ipo: "2008-03-19",
    industry: "Financial Services",
    country: "US",
    currency: "USD",
    weburl: "https://www.visa.com"
  },
  {
    ticker: "WMT",
    name: "Walmart Inc",
    exchange: "NYSE",
    price: 65.70,
    logo: "https://companieslogo.com/img/orig/WMT-2a614397.png",
    ipo: "1970-10-01",
    industry: "Consumer Defensive",
    country: "US",
    currency: "USD",
    weburl: "https://www.walmart.com"
  },
  {
    ticker: "JNJ",
    name: "Johnson & Johnson",
    exchange: "NYSE",
    price: 158.42,
    logo: "https://companieslogo.com/img/orig/JNJ-825b9622.png",
    ipo: "1944-09-24",
    industry: "Healthcare",
    country: "US",
    currency: "USD",
    weburl: "https://www.jnj.com"
  },
  {
    ticker: "PG",
    name: "Procter & Gamble Co",
    exchange: "NYSE",
    price: 165.33,
    logo: "https://companieslogo.com/img/orig/PG-a772f974.png",
    ipo: "1978-01-01",
    industry: "Consumer Defensive",
    country: "US",
    currency: "USD",
    weburl: "https://us.pg.com"
  },
  {
    ticker: "MA",
    name: "Mastercard Inc",
    exchange: "NYSE",
    price: 465.49,
    logo: "https://companieslogo.com/img/orig/MA-d8f63e71.png",
    ipo: "2006-05-25",
    industry: "Financial Services",
    country: "US",
    currency: "USD",
    weburl: "https://www.mastercard.com"
  },
  {
    ticker: "HD",
    name: "Home Depot Inc",
    exchange: "NYSE",
    price: 342.20,
    logo: "https://companieslogo.com/img/orig/HD-8da1f0e5.png",
    ipo: "1981-09-22",
    industry: "Consumer Cyclical",
    country: "US",
    currency: "USD",
    weburl: "https://www.homedepot.com"
  },
  {
    ticker: "PFE",
    name: "Pfizer Inc",
    exchange: "NYSE",
    price: 28.90,
    logo: "https://companieslogo.com/img/orig/PFE-904b5f53.png",
    ipo: "1942-06-22",
    industry: "Healthcare",
    country: "US",
    currency: "USD",
    weburl: "https://www.pfizer.com"
  },
  {
    ticker: "ADBE",
    name: "Adobe Inc",
    exchange: "NASDAQ",
    price: 504.67,
    logo: "https://companieslogo.com/img/orig/ADBE-d9a37972.png",
    ipo: "1986-08-20",
    industry: "Technology",
    country: "US",
    currency: "USD",
    weburl: "https://www.adobe.com"
  },
  {
    ticker: "NFLX",
    name: "Netflix Inc",
    exchange: "NASDAQ",
    price: 683.28,
    logo: "https://companieslogo.com/img/orig/NFLX-88d1cd0b.png",
    ipo: "2002-05-23",
    industry: "Entertainment",
    country: "US",
    currency: "USD",
    weburl: "https://www.netflix.com"
  },
  {
    ticker: "DIS",
    name: "Walt Disney Co",
    exchange: "NYSE",
    price: 98.45,
    logo: "https://companieslogo.com/img/orig/DIS-d055c051.png",
    ipo: "1957-11-12",
    industry: "Entertainment",
    country: "US",
    currency: "USD",
    weburl: "https://www.disney.com"
  },
  {
    ticker: "CSCO",
    name: "Cisco Systems Inc",
    exchange: "NASDAQ",
    price: 48.25,
    logo: "https://companieslogo.com/img/orig/CSCO-af42ada2.png",
    ipo: "1990-02-16",
    industry: "Technology",
    country: "US",
    currency: "USD",
    weburl: "https://www.cisco.com"
  },
  {
    ticker: "INTC",
    name: "Intel Corporation",
    exchange: "NASDAQ",
    price: 32.19,
    logo: "https://companieslogo.com/img/orig/INTC-35534d2a.png",
    ipo: "1971-10-13",
    industry: "Semiconductors",
    country: "US",
    currency: "USD",
    weburl: "https://www.intel.com"
  }
];

async function seedDatabase() {
  const uri = `mongodb+srv://sharonmalli17:mY7QiKK1XbGyfVqt@cluster0.zd7o8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
    
    // Clear existing stocks
    await Stock.deleteMany({});
    console.log('Cleared existing stocks');
    
    // Insert new stocks
    await Stock.insertMany(stocksData);
    console.log(`Successfully inserted ${stocksData.length} stocks`);
    
    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();