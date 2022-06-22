import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gray-light);
    
    &:last-of-type {
      margin-right: 0;
    }
  }
`

export default function Navigation() {
  return (
    <Nav>
      <Link href='/'>
        Inicio
      </Link>
      <Link href='/popular'>
        Popular
      </Link>
      <Link href='/new-product'>
        Nuevo Producto
      </Link>
    </Nav>  
  )
}