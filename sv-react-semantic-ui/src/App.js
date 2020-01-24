import React from 'react';
import {Button, Container, Grid, Header, Icon, Segment} from 'semantic-ui-react';


function App() {
  return (
    <Segment.Group id="app-body">
    
      <Segment id="app-header" >
        <Container  textAlign="center">
          <Header as='h1'><Icon name='react' size='huge' />Un peu de semantic-ui-react</Header>
        </Container>
      </Segment>

      <Segment id="app-content">
        <Container text textAlign='justified'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. </p>
          <p>
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
          </p>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem.
              </Grid.Column>
              <Grid.Column>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem.
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3}>
              <Grid.Column>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem.
              </Grid.Column>
              <Grid.Column>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem.
              </Grid.Column>
              <Grid.Column>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem.
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Container>

      </Segment>
    
      <Segment id="app-footer" textAlign="center">
        <Container>
          Footer de la page
        </Container>
      </Segment>
      
    </Segment.Group>
  );
}

export default App;
