import PersonItem from "./PersonItem";

export interface Person {
    id: number,
    name: string,
    profession: string,
    accomplishment: string,
    imageId: string,
}

interface PeopleListProps {
    people: Person[]
}

function PeopleList({ people }: PeopleListProps) {
    return (
        <div>
            {people.map((person) => (
                <PersonItem key={person.id} person={person} />
            ))}
        </div>
    );
}

export default PeopleList