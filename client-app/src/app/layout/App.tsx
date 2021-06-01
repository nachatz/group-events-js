import React, { useEffect } from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponents from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {


  const{activityStore} = useStore();
  const {loadingInitial} = activityStore;

  useEffect(() => {
    
    activityStore.loadActivities();

  }, [activityStore])


  if (loadingInitial) return <LoadingComponents content='Loading'/>

  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
          <ActivityDashboard />

      </Container>

    </>
  );
}

export default observer(App);