import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((e) => {
        return <Card 
        key={e.id}
        name={e.name} 
        species={e.species}
        gender={e.gender}
        image={e.image}
        onClose={e.onClose} />;
      })}
    </div>
  );
}
