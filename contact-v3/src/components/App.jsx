import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			<Avatar img="https://media-exp1.licdn.com/dms/image/C5603AQG5IRMdk7a6fw/profile-displayphoto-shrink_800_800/0/1609095614699?e=1648684800&v=beta&t=k5hgUEl6OspcuRtfdYEkGJvHiI-6lgLj8h761OKv-Ac" />

			<Card
				name={contacts[0].name}
				img={contacts[0].imgURL}
				tel={contacts[0].phone}
				email={contacts[0].email}
			/>
			<Card
				name={contacts[1].name}
				img={contacts[1].imgURL}
				tel={contacts[1].phone}
				email={contacts[1].email}
			/>
			<Card
				name={contacts[2].name}
				img={contacts[2].imgURL}
				tel={contacts[2].phone}
				email={contacts[2].email}
			/>
		</div>
	);
}

export default App;
