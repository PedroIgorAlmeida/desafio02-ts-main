import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

interface IButton extends ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, children, ...rest }: IButton) => {
  return (
    <ChakraButton 
      onClick={onClick} 
      colorScheme='teal' 
      size='sm' 
      width='100%' 
      marginTop='5px'
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};
