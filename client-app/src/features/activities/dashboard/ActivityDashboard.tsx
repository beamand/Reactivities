import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity:(id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEditActivity: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({activities, selectedActivity, deleteActivity,
    selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEditActivity, submitting }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} 
                selectActivity={selectActivity}
                deleteActivity={deleteActivity}
                submitting={submitting} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails 
                        activity={selectedActivity} 
                        cancelSelectActivity={cancelSelectActivity} 
                        openForm = {openForm}
                />}
                {editMode && 
                    <ActivityForm 
                        closeForm={closeForm} 
                        activity={selectedActivity} 
                        createOrEditActivity={createOrEditActivity}
                        submitting={submitting}
                />}
            </Grid.Column>
        </Grid>
    )
}