import { IHero } from "./ihero";

export interface IPowerStats {
    id: number;
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
    characters: IHero;
}
