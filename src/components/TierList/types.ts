export interface TierItem {
  id: string;
  name: string;
  color?: string;
}

export interface TierRowProps {
  // TODO: color should be taken from an enum
  color: string;
  name: string;
  items?: Array<TierItem>;
  // TODO: Add item type
  moveItemToTier: (item: any, tier: string) => void;
}

export interface TierItemProps {
  name: string;
  id: string;
  tierName: string;
}

export interface TierItemContainerProps {
  items?: Array<TierItem>;
  tierName: string;
  // TODO: Add item type
  moveItemToTier: (item: any, tier: string) => void;
}
