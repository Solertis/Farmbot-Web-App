import {
  TaggedPlantPointer,
  TaggedCrop
} from "../../resources/tagged_resources";
import { State, BotOriginQuadrant } from "../interfaces";
import { BotPosition } from "../../devices/interfaces";

export interface PlantLayerProps {
  plants: TaggedPlantPointer[];
  currentPlant: TaggedPlantPointer | undefined;
  dragging: boolean;
  editing: boolean;
  visible: boolean;
  crops: TaggedCrop[];
  dispatch: Function;
  botOriginQuadrant: BotOriginQuadrant;
  zoomLvl: number;
  activeDragXY: BotPosition | undefined;
}

export interface CropSpreadDict {
  [key: string]: number | undefined;
}

export interface GardenMapLegendProps {
  zoom: (value: number) => () => void;
  toggle: (property: keyof State) => () => void;
  updateBotOriginQuadrant: (quadrant: number) => () => void;
  botOriginQuadrant: number;
  zoomLvl: number;
  legendMenuOpen: boolean;
  showPlants: boolean;
  showPoints: boolean;
  showSpread: boolean;
  showFarmbot: boolean;
}

export interface DragHelpersProps {
  dragging: boolean;
  plant: Readonly<TaggedPlantPointer>;
  quadrant: BotOriginQuadrant;
  zoomLvl: number;
  activeDragXY: BotPosition | undefined;
}
