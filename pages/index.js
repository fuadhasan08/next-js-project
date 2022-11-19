import Head from 'next/head';
import styles from '../styles/Home.module.css';
import App from './api/hello.js';

export default function Home() {
  return (
    <>
      <App />
    </>
  );
}
