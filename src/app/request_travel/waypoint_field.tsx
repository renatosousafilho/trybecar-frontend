import { Waypoint } from '../types/Waypoint';

type WaypointFieldProps = {
  waypoint: Waypoint;
  index: number;
  onChange: (index: number, waypoint: Waypoint) => void;
  onRemove: (index: number) => void;
}

export default function WaypointField({ waypoint, index, onChange, onRemove }: WaypointFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(index, { address: event.target.value, stopOrder: index + 1 });
  };

  const handleRemove = () => {
    onRemove(index);
  };

  return (
    <div key={index} className="flex py-2">
      <input
        type="text"
        value={waypoint.address}
        onChange={(e) => handleChange(e)}
        className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
      />
      <button
        type="button"
        onClick={handleRemove}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        Remover
      </button>
    </div>
  );
}