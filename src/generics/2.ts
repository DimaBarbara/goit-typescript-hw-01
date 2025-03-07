type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type CompareInfo = Pick<AllType, "name" | "position" | "color" | "weight">;

function compare(top: AllType, bottom: AllType): CompareInfo {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
