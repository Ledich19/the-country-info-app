import { Payload } from "recharts/types/component/DefaultTooltipContent";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Payload<number, string>[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length > 0) {
    const { payload: data, value } = payload[0];

    if (data && value !== undefined) {
      return (
        <div className="bg-white p-2 border rounded shadow-md">
          <p className="text-sm font-bold">Year: {data.year}</p>
          <p className="text-sm">Population: {value.toLocaleString()}</p>
        </div>
      );
    }
  }
  return null;
};

export default CustomTooltip