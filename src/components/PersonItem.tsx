import type { Person } from './PeopleList';

type PersonItemProps = {
    person: Person
};

function PersonItem({ person }: PersonItemProps) {
    return (
        <div key={person.id}>
                    <img src={person.imageId} alt={person.name} />
                    <h2>{person.name}</h2>
                    <p>{person.profession}</p>
                    <p>{person.accomplishment}</p>
                </div>
    );
}

export default PersonItem