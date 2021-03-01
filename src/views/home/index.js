import React from 'react';
import {Container, Jumbotron} from 'reactstrap';

function Index() {
  return (
    <Container>
      <Jumbotron className="mt-5">
        <h1 className="display-4">Louie Naraja</h1>
        <address>
          <a href="mailto:narajamartin@gmail.com">narajamartin@gmail.com</a>
          <br />
          <a href="tel:+639278070527">(+63) 927-807-0527</a>
        </address>
      </Jumbotron>
    </Container>
  );
}

export default Index;
