export interface TierItem {
  name: string;
  color: string;
}

export interface TierRowProps {
  // TODO: color should be taken from an enum
  color: string;
  name: string;
  items?: Array<TierItem>;
}
