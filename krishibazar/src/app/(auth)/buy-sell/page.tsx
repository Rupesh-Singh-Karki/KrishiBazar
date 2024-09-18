import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const crops = [
  {
    id: 1,
    name: 'Wheat',
    description: 'High-quality wheat available for contract farming.',
    image: '/wheat.png',
    currentBid: '$500/ton',
    link: '/crops/wheat',
  },
  {
    id: 2,
    name: 'Rice',
    description: 'Premium rice crop ready for contract farming.',
    image: '/rice.png',
    currentBid: '$700/ton',
    link: '/crops/rice',
  },
  {
    id: 3,
    name: 'Corn',
    description: 'High-yield corn crops for industrial use and hotel chains.',
    image: '/corn.png',
    currentBid: '$400/ton',
    link: '/crops/corn',
  },
  {
    id: 4,
    name: 'Onion',
    description: 'High-yield onion for industrial use and hotel chains.',
    image: '/onion.png',
    currentBid: '$400/ton',
    link: '/crops/onion',
  },
  // Add more crops as needed
];

export default function CropListPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Available Crops for Contract Farming</h1>
      <div className={styles.grid}>
        {crops.map((crop) => (
          <Link key={crop.id} href={crop.link} className={styles.card}>
            <div className={styles.cardContent}>
              <Image
                src={crop.image}
                alt={crop.name}
                width={300}
                height={200}
                className={styles.cropImage}
              />
              <h2 className={styles.cropName}>{crop.name}</h2>
              <p className={styles.description}>{crop.description}</p>
              <p className={styles.currentBid}>Current Bid: {crop.currentBid}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
