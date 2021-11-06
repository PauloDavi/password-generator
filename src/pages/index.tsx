import type { NextPage } from 'next';
import Head from 'next/head';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { ShowPassword } from '../components/ShowPassword';
import { SlidersSettings } from '../components/SlidersSettings';
import { useHome } from '../contexts/HomeContext';

const Home: NextPage = () => {
  const { value, createPassword } = useHome();

  return (
    <>
      <Head>
        <title>Gerador de senhas</title>
        <meta name="description" content="Gerador de senha configuravel criado em nextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header createPassword={createPassword} />

        <SlidersSettings />

        <ShowPassword value={value} />
      </Container>
    </>
  );
};

export default Home;
