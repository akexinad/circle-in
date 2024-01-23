export default function Ability({
  name,
  average,
}: {
  name: string;
  average: number;
}) {

    return (
      <div>
        <h3>
          {name}
        </h3>
        <h3>
          {average}
        </h3>
      </div>
    )
    
}
