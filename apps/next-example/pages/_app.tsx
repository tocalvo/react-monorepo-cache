import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { ExportedComponent } from '@react-monorepo-cache/ui';
import { ThemeLib } from '@react-monorepo-cache/theme-lib'


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ThemeLib}>
      <CssBaseline />
      <Head>
        <title>Welcome to next-example!</title>
      </Head>
      <div className="app">
        <ExportedComponent></ExportedComponent>
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to next-example!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default CustomApp;
