import * as objects from '../dom';
import { Tag } from './tag';
export declare class EvalControl<P extends objects.IEvalControlProps, S extends objects.IEvalControlState> extends Tag<P, S> {
}
export declare class HumanEval<P extends objects.IHumanEvalProps, S extends objects.IHumanEvalState> extends EvalControl<P, S> {
}
export declare class EvalButton extends EvalControl<objects.IEvalButtonProps, objects.IEvalButtonState> {
}
export declare class RadioButton extends EvalControl<objects.IRadioButtonProps, objects.IRadioButtonState> {
}
export declare class Pairing extends EvalControl<objects.IPairingProps, objects.IPairingState> {
}
export declare class WordSelection extends EvalControl<objects.IWordSelectionProps, objects.IWordSelectionState> {
}
export declare class WordMultiSelection extends EvalControl<objects.IWordMultiSelectionProps, objects.IWordMultiSelectionState> {
}
export declare class WordOrdering extends EvalControl<objects.IWordOrderingProps, objects.IWordOrderingState> {
}
export declare class SentenceOrdering extends EvalControl<objects.ISentenceOrderingProps, objects.ISentenceOrderingState> {
}
export declare class Extension extends EvalControl<objects.IExtensionProps, objects.IExtensionState> {
}
export declare class Writing extends HumanEval<objects.IWritingProps, objects.IWritingState> {
}
export declare class Recording extends HumanEval<objects.IRecordingProps, objects.IRecordingState> {
}
export declare class CheckLow<P extends objects.ICheckLowProps, S extends objects.ICheckLowState> extends EvalControl<P, S> {
}
export declare class CheckItem extends CheckLow<objects.ICheckItemProps, objects.ICheckItemState> {
}
export declare class CheckBox extends CheckLow<objects.ICheckBoxProps, objects.ICheckBoxState> {
}
