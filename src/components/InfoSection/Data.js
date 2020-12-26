import carSvg from '../../images/svg-1.svg';
import piggybankSvg from '../../images/piggybank.svg'; 
import secureDataSvg from '../../images/secure_data.svg';

export const homeObjeOne = {
  id: 'about', 
  lightBg: false, 
  lightText: true, 
  lightTextDesc: true, 
  topLine: 'Premim Bank', 
  headline: 'Unlimited Transactions with zero fees', 
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.', 
  buttonLabel: 'Get started', 
  imgStart: false, 
  img: carSvg, 
  alt: 'Car', 
  dark: true, 
  primary: true, 
  darkText: false, 
};

export const homeObjeTwo = {
  id: 'discover', 
  lightBg: true, 
  lightText: false, 
  lightTextDesc: false, 
  topLine: 'Unlimited access', 
  headline: 'Login to your account at any time', 
  description: 'We have you covered no matter where you are located. All you need is an internet connnection and a phone or computer.', 
  buttonLabel: 'Learn more', 
  imgStart: true, 
  img: piggybankSvg, 
  alt: 'Piggybank', 
  dark: false, 
  primary: false, 
  darkText: true, 
};

export const homeObjeThree = {
  id: 'signup', 
  lightBg: true, 
  lightText: false, 
  lightTextDesc: false, 
  topLine: 'Join our team', 
  headline: 'Creating an accout is extremely easy', 
  description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you\'re ready to go. ',
  buttonLabel: 'Start now', 
  imgStart: false, 
  img: secureDataSvg, 
  alt: 'Secure data', 
  dark: false, 
  primary: false, 
  darkText: true, 
};