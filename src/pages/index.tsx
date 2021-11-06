import { Flex } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { ShowPassword } from '../components/ShowPassword';
import { SlidersSettings } from '../components/SlidersSettings';
import { useHome } from '../contexts/HomeContext';

const Home: NextPage = () => {
  const { value, createPassword } = useHome();

  return (
    <>
      <NextSeo
        title="Gerador de senhas"
        description="Gerador de senha configuravel criado em nextJS"
      />

      <Container>
        <Header createPassword={createPassword} />

        <Flex flexDirection="column" as="main">
          <SlidersSettings />

          <ShowPassword value={value} />
        </Flex>
      </Container>
    </>
  );
};

export default Home;
