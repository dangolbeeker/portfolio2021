import '../styles/globals.css'
import Head from 'next/head';
import Link from 'next/link';
import React,{useState, useEffect} from 'react';



function MyApp()  {
<ul>
  <li>
    <Link href="/about"></Link>
      </li>
      <li>
      <Link href="/resume"></Link>
      </li>
      <li>
      <Link href="/contact"></Link>
      </li>
      <li>
      <Link href="/blog"></Link>
      </li>     
       </ul>
}

      export default MyApp
