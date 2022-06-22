import styled from 'styled-components'

const Input = styled.input`
  border: 1px solid var(--gray-dark);
  padding: 1rem;
  min-width: 300px;
`
const Button = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url('/img/search.png');
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 1px;
  background-color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

export default function Searcher() {
  return (
    <form style={{ position: 'relative' }}>
      <Input
        type='text'
        placeholder='Buscar productos...'
      />

      <Button type='submit' />
    </form>
  )
}