"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Text } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Landing from "../pages/Landing"

export default function Home() {
  return (
    <div className={styles.main}>
      <Landing />
    </div>
  )
}
