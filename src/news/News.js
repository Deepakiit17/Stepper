import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  newsTicker: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
    animation: '$ticker 21s linear infinite',
    fontSize: '20px', // Increase the font size
  },
  '@keyframes ticker': {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(-100%)' },
  },
  newsItem: {
    display: 'inline-block',
    padding: '0 10px',
  },
}));

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    // Simulating API fetch or any other data retrieval
    const fetchNewsData = () => {
      // Mock news data
      const mockNewsData = [
        {
          id: 1,
          title: 'New Breakthrough in Renewable Energy Technology',
        },
        {
          id: 2,
          title: 'Scientists Discover Potential Treatment for Cancer',
        },
        {
          id: 3,
          title: 'Robotics Competition Winners Announced',
        },
        {
          id: 4,
          title: "NASA's Mars Rover Sends Back Stunning Images",
        },
        {
          id: 5,
          title: 'STEM Education Initiative Receives Funding Boost',
        },
      ];

      setNewsData(mockNewsData);
    };

    fetchNewsData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [newsData.length]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className={classes.newsTicker}>
      {newsData.map((newsItem, index) => (
        <span
          key={newsItem.id}
          className={classes.newsItem}
          style={{
            display: index === currentIndex ? 'inline-block' : 'none',
            backgroundColor: getRandomColor(),
          }}
        >
          <Typography variant="subtitle1">{newsItem.title}</Typography>
        </span>
      ))}
    </div>
  );
};

export default News;
