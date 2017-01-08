import * as objects from '../dom';
import { Tag } from './tag';
export declare class DocExample extends Tag<objects.IDocExampleProps, objects.ITagState> {
}
export declare class DocDescr extends Tag<objects.ITagProps, objects.ITagState> {
}
export declare class Macro<P extends objects.IMacroProps, S extends objects.IMacroState> extends Tag<P, S> {
}
export declare class HeaderProp extends Tag<objects.IHeaderPropProps, objects.IHeaderPropState> {
}
export declare class PairingItem extends Tag<objects.IPairingItemProps, objects.IPairingItemState> {
}
export declare class SingleChoice extends Tag<objects.ISingleChoiceProps, objects.ISingleChoiceState> {
}
export declare class SentenceOrderingItem extends Tag<objects.ISentenceOrderingItemProps, objects.ISentenceOrderingItemState> {
}
export declare class List extends Macro<objects.IListProps, objects.IListState> {
}
export declare class ListGroup extends Macro<objects.IListGroupProps, objects.IListGroupState> {
}
export declare class TwoColumn extends Macro<objects.ITwoColumnProps, objects.ITwoColumnState> {
}
export declare class Panel extends Macro<objects.IPanelProps, objects.IPanelState> {
}
export declare class Dummy extends Tag<objects.IDummyProps, objects.IDummyState> {
}
export declare class Offering extends Tag<objects.IOfferingProps, objects.IOfferingState> {
}
export declare class UrlTag<P extends objects.IUrlTagProps, S extends objects.IUrlTagState> extends Tag<P, S> {
}
export declare class MediaTag<P extends objects.IMediaTagProps, S extends objects.IMediaTagState> extends UrlTag<P, S> {
}
export declare class MediaBigMark extends MediaTag<objects.IMediaBigMarkProps, objects.IMediaBigMarkState> {
}
export declare class MediaPlayer extends MediaTag<objects.IMediaPlayerProps, objects.IMediaPlayerState> {
}
export declare class MediaVideo extends MediaTag<objects.IMediaVideoProps, objects.IMediaVideoState> {
}
export declare class MediaText extends MediaTag<objects.IMediaTextProps, objects.IMediaTextState> {
}
export declare class SndFile<P extends objects.ISndFileProps, S extends objects.ISndFileState> extends UrlTag<P, S> {
}
export declare class CutDialog extends SndFile<objects.ICutDialogProps, objects.ICutDialogState> {
}
export declare class CutText extends SndFile<objects.ICutTextProps, objects.ICutTextState> {
}
export declare class Phrase extends Tag<objects.IPhraseProps, objects.IPhraseState> {
}
export declare class Replica extends Tag<objects.IReplicaProps, objects.IReplicaState> {
}
export declare class Include<P extends objects.IIncludeProps, S extends objects.IIncludeState> extends Tag<P, S> {
}
export declare class IncludeText extends Include<objects.IIncludeTextProps, objects.IIncludeTextState> {
}
export declare class IncludeDialog extends Include<objects.IIncludeDialogProps, objects.IIncludeDialogState> {
}
export declare class PhraseReplace extends Tag<objects.IPhraseReplaceProps, objects.IPhraseReplaceState> {
}
export declare class MacroTemplate<P extends objects.IMacroTemplateProps, S extends objects.IMacroTemplateState> extends Macro<P, S> {
}
export declare class MacroTrueFalse extends MacroTemplate<objects.IMacroTrueFalseProps, objects.IMacroTrueFalseState> {
}
export declare class MacroSingleChoices extends MacroTemplate<objects.IMacroSingleChoicesProps, objects.IMacroSingleChoicesState> {
}
export declare class MacroPairing extends MacroTemplate<objects.IMacroPairingProps, objects.IMacroPairingState> {
}
export declare class MacroTable extends MacroTemplate<objects.IMacroTableProps, objects.IMacroTableState> {
}
export declare class MacroListWordOrdering extends MacroTemplate<objects.IMacroListWordOrderingProps, objects.IMacroListWordOrderingState> {
}
export declare class MacroList extends MacroTemplate<objects.IMacroListProps, objects.IMacroListState> {
}
export declare class MacroIconList extends MacroTemplate<objects.IMacroIconListProps, objects.IMacroIconListState> {
}
export declare class MacroArticle extends MacroTemplate<objects.IMacroArticleProps, objects.IMacroArticleState> {
}
export declare class MacroVocabulary extends MacroTemplate<objects.IMacroVocabularyProps, objects.IMacroVocabularyState> {
}
export declare class MacroVideo extends MacroTemplate<objects.IMacroVideoProps, objects.IMacroVideoState> {
}
export declare class InlineTag extends MacroTemplate<objects.IInlineTagProps, objects.IInlineTagState> {
}
export declare class SmartTag extends Tag<objects.ISmartTagProps, objects.ISmartTagState> {
}
export declare class SmartElementLow<P extends objects.ISmartElementLowProps, S extends objects.ISmartElementLowState> extends MacroTemplate<P, S> {
}
export declare class SmartElement extends SmartElementLow<objects.ISmartElementProps, objects.ISmartElementState> {
}
export declare class SmartOffering extends SmartElementLow<objects.ISmartOfferingProps, objects.ISmartOfferingState> {
}
export declare class SmartPairing extends SmartElementLow<objects.ISmartPairingProps, objects.ISmartPairingState> {
}
