import { Action } from 'redux';
export declare enum RecordingStatus {
    no = 0,
    recording = 1,
    recorded = 2,
    playing = 3,
    cancelPlaying = 4,
}
export interface IRecording {
    status?: RecordingStatus;
    appState?: {};
    actions?: Array<Action>;
    title?: string;
    isSelected?: boolean;
}
export interface INotify {
    playList?: Array<IRecording>;
    status?: RecordingStatus;
    title?: string;
    actionCount?: number;
    actionIdx?: number;
    recordsCount?: number;
    recordsIdx?: number;
}
export declare const notifyDataInit: (data?: INotify) => {
    playList?: IRecording[];
    status?: RecordingStatus;
    title: string;
    actionCount: number;
    actionIdx: number;
    recordsCount: number;
    recordsIdx: number;
};
export declare let actNotifyData: INotify;
export declare const notify: (data?: INotify) => void;
export declare const onNotify: {
    value: (data: INotify) => void;
};
export declare const setStatus: (status: RecordingStatus) => void;
export declare const playRecording: () => Promise<{}>;
export declare const setCurrentRecording: (rec: IRecording) => IRecording;
export declare const startRecording: () => void;
export declare const curentRecordingTitle = "Current";
export declare const cancel: () => void;
export declare const stopRecording: (title?: string) => void;
export declare const locStoragePrefix = "records/";
export declare const cancelPlaying: () => void;
