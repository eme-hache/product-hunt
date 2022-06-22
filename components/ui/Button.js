import styled from 'styled-components'

const Button = styled.a`
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #D1D1D1;
  padding: .8rem 2rem;
  margin-right: 1rem;
  background-color: ${props => props.bgColor ? '#DA552F' : '#FFF'};
  color: ${props => props.bgColor ? '#FFF' : '#000'};

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`

export default Button