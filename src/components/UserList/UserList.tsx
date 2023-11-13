import React from "react";
import { useGetUsersQuery } from "../../store/api/usersApi";

export const UserList: React.FC = () => {
	const { data: users, isLoading, refetch } = useGetUsersQuery({});
	return (
		<div>
			{isLoading && <p>Loading users...</p>}
			<div>
				<ul>
					{users?.map((user) => (
						<li key={user.id}>
							{user.firstName} {user.lastName}
						</li>
					))}
				</ul>
				<button onClick={() => refetch()}>Refresh</button>
			</div>
		</div>
	);
}