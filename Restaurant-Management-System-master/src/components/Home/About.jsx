import {Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container id='About'>
      <Typography  className='first-title' component='h6' sx={{textAlign:'start'}} variant='h6'>About</Typography>
      <Typography className='second-title' component='h4' sx={{textAlign:'start'}} variant='h4'>Welcome to Forkd.</Typography>
      <Typography component='p'>Forkd, your all-in-one restaurant management system designed to elevate your dining experience and streamline your operations. With our cloud-based platform, you can effortlessly manage multiple locations from a single dashboard, access real-time analytics for informed decision-making, engage with your customers through marketing strategies. Forkd seamlessly integrates with popular food delivery services, ensuring smooth processing and flexible payment. Plus, our dedicated 24/7 support team is always here to assist you. Join the growing community of restaurateurs who trust Forkd to simplify their operations and enhance customer satisfaction—let's take your restaurant to the next level together!</Typography>
    </Container>
  )
}

export default About