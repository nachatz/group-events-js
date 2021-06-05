import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';


export default function NotFound()
{
    return(

        <Segment placeholder>
            <Header icon>
                <Icon name ='search' />
                Not a valid page! Uh-oh!
            </Header>
            <Segment.Inline>
                <Button as={Link} to={'/activities'} primary>Return to Events</Button>
            </Segment.Inline>
        </Segment>

    )
}