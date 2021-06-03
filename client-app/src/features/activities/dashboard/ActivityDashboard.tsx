import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponents from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import ActivityFilter from './ActivityFilters';
import ActivityList from './ActivityList';



export default observer (function ActivityDashboard()
{

    const {activityStore} = useStore();
    const {loadingInitial, loadActivities, activityRegistry} = activityStore;
  
    useEffect(() => {
      
        if(activityRegistry.size <= 1) loadActivities();
  
    }, [activityRegistry.size, loadActivities])
  
  
    if (loadingInitial) return <LoadingComponents content='Loading App'/>

    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>

            <Grid.Column width='6'>
                <ActivityFilter />
            </Grid.Column>
        </Grid>


    )
})