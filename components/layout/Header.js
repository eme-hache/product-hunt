import styled, { css } from 'styled-components'
import Link from 'next/link'

import Navigation from './Navigation'
import Searcher from '../ui/Searcher'
import Button from '../ui/Button'

const Head = styled.header`
  border-bottom: 2px solid var(--gray-dark);
  padding: 1rem 0;
`

const Container = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const Logo = styled.p`
  color: var(--orange);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: 'Roboto', serif;
  margin-right: 2rem;
`

export default function Header() {

  const user = false

  return (
    <Head>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/'>
            <Logo>P</Logo>
          </Link>

          <Searcher />

          <Navigation />
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {user
            ? (
              <>
                <p style={{ marginRight: '2rem' }}>Hola: Luis</p>

                <Button bgColor>
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Link href='/signin'>
                  <Button bgColor>
                    Iniciar Sesión
                  </Button>
                </Link>

                <Link href='/signup'>
                  <Button>
                    Crear Cuenta
                  </Button>
                </Link>
              </>
            )}
        </div>
      </Container>
    </Head>
  )
}