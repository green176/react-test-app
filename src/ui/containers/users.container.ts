import { connect, ConnectedProps } from 'react-redux';
import { requestUsers, selectUser } from '../../actions/users.actions';
import { Users } from '../components/users/users.component';
import { State } from '../../reducers/root.reducer';
import { getUsers, getUser } from '../../selectors/selectors';

const mapDispatch = {
	onRequestUsers: requestUsers,
	onUserSelect: selectUser,
};

const mapState = (state: State) => ({
	users: getUsers(state),
	selectedUser: getUser(state),
	isLoading: state.usersState.isLoading,
});

const connector = connect(mapState, mapDispatch);

export const UsersContainer = connector(Users);

export type UsersPropsFromRedux = ConnectedProps<typeof connector>;
