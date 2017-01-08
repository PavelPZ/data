import { IRecording } from './recording';
export interface IPlayList {
    records: Array<IRecording>;
}
export declare const playList: () => Promise<{}>;
export declare const fromStorage: () => IPlayList;
export declare const toStorage: (pl: IPlayList) => void;
export declare const toFile: (pl: IPlayList) => void;
export declare const fromFile: (evt: any) => Promise<IPlayList>;
