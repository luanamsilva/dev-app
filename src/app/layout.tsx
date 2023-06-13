"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>   <MantineProvider>{children}</MantineProvider></body>
    </html>
  )
}
