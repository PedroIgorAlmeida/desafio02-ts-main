import { Box, Input, Center, FormControl, FormLabel } from '@chakra-ui/react';
import { Button } from './Button/Button';
import { login } from '../services/login';
import { useState, FormEvent } from 'react';

export const Card = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Box 
        as="form"
        // @ts-ignore - Workaround for Chakra UI's as prop type issue
        onSubmit={handleSubmit}
        backgroundColor='#FFFFFF' 
        borderRadius='25px' 
        padding='15px'
      >
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input 
            id="email"
            placeholder="email" 
            marginY={2} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input 
            id="password"
            placeholder="password" 
            type="password" 
            marginY={2} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <Center>
          <Button type="submit">
            Entrar
          </Button>
        </Center>
      </Box>
    </Box>
  );
};