import * as React from 'react';

export = course;
export as namespace course;


declare module course {
  const $rc: (type: any, props: any, childs: any) => any;
  const $loc: (id: string, msg: string) => string;
  class Tag<P extends course.ITagProps, S extends course.ITagState> extends React.Component<P, S> {
    render(): JSX.Element;
  }
  class EvalControl<P extends course.IEvalControlProps, S extends course.IEvalControlState> extends Tag<P, S> {
  }
  class Macro<P extends course.IMacroProps, S extends course.IMacroState> extends Tag<P, S> {
  }
  class HumanEval<P extends course.IHumanEvalProps, S extends course.IHumanEvalState> extends EvalControl<P, S> {
  }
  class Edit<P extends course.IEditProps, S extends course.IEditState> extends EvalControl<P, S> {
  }
  class Body extends Tag<course.IBodyProps, course.IBodyState> {
    constructor(props: course.IBodyProps, context: any);
  }
  class HeaderProp extends Tag<course.IHeaderPropProps, course.IHeaderPropState> {
  }
  class EvalButton extends EvalControl<course.IEvalButtonProps, course.IEvalButtonState> {
  }
  class DropDown extends Edit<course.IDropDownProps, course.IDropDownState> {
  }
  class GapFill extends Edit<course.IGapFillProps, course.IGapFillState> {
  }
  class RadioButton extends EvalControl<course.IRadioButtonProps, course.IRadioButtonState> {
  }
  class CheckLow<P extends course.ICheckLowProps, S extends course.ICheckLowState> extends EvalControl<P, S> {
  }
  class CheckItem extends CheckLow<course.ICheckItemProps, course.ICheckItemState> {
  }
  class CheckBox extends CheckLow<course.ICheckBoxProps, course.ICheckBoxState> {
  }
  class PairingItem extends Tag<course.IPairingItemProps, course.IPairingItemState> {
  }
  class Pairing extends EvalControl<course.IPairingProps, course.IPairingState> {
  }
  class SingleChoice extends Tag<course.ISingleChoiceProps, course.ISingleChoiceState> {
  }
  class WordSelection extends EvalControl<course.IWordSelectionProps, course.IWordSelectionState> {
  }
  class WordMultiSelection extends EvalControl<course.IWordMultiSelectionProps, course.IWordMultiSelectionState> {
  }
  class WordOrdering extends EvalControl<course.IWordOrderingProps, course.IWordOrderingState> {
  }
  class SentenceOrdering extends EvalControl<course.ISentenceOrderingProps, course.ISentenceOrderingState> {
  }
  class SentenceOrderingItem extends Tag<course.ISentenceOrderingItemProps, course.ISentenceOrderingItemState> {
  }
  class Extension extends EvalControl<course.IExtensionProps, course.IExtensionState> {
  }
  class Writing extends HumanEval<course.IWritingProps, course.IWritingState> {
  }
  class Recording extends HumanEval<course.IRecordingProps, course.IRecordingState> {
  }
  class List extends Macro<course.IListProps, course.IListState> {
  }
  class ListGroup extends Macro<course.IListGroupProps, course.IListGroupState> {
  }
  class TwoColumn extends Macro<course.ITwoColumnProps, course.ITwoColumnState> {
  }
  class Panel extends Macro<course.IPanelProps, course.IPanelState> {
  }
  class Dummy extends Tag<course.IDummyProps, course.IDummyState> {
  }
  class Offering extends Tag<course.IOfferingProps, course.IOfferingState> {
  }
  class UrlTag<P extends course.IUrlTagProps, S extends course.IUrlTagState> extends Tag<P, S> {
  }
  class MediaTag<P extends course.IMediaTagProps, S extends course.IMediaTagState> extends UrlTag<P, S> {
  }
  class MediaBigMark extends MediaTag<course.IMediaBigMarkProps, course.IMediaBigMarkState> {
  }
  class MediaPlayer extends MediaTag<course.IMediaPlayerProps, course.IMediaPlayerState> {
  }
  class MediaVideo extends MediaTag<course.IMediaVideoProps, course.IMediaVideoState> {
  }
  class MediaText extends MediaTag<course.IMediaTextProps, course.IMediaTextState> {
  }
  class SndFile<P extends course.ISndFileProps, S extends course.ISndFileState> extends UrlTag<P, S> {
  }
  class CutDialog extends SndFile<course.ICutDialogProps, course.ICutDialogState> {
  }
  class CutText extends SndFile<course.ICutTextProps, course.ICutTextState> {
  }
  class Phrase extends Tag<course.IPhraseProps, course.IPhraseState> {
  }
  class Replica extends Tag<course.IReplicaProps, course.IReplicaState> {
  }
  class Include<P extends course.IIncludeProps, S extends course.IIncludeState> extends Tag<P, S> {
  }
  class IncludeText extends Include<course.IIncludeTextProps, course.IIncludeTextState> {
  }
  class IncludeDialog extends Include<course.IIncludeDialogProps, course.IIncludeDialogState> {
  }
  class PhraseReplace extends Tag<course.IPhraseReplaceProps, course.IPhraseReplaceState> {
  }
  class MacroTemplate<P extends course.IMacroTemplateProps, S extends course.IMacroTemplateState> extends Macro<P, S> {
  }
  class MacroTrueFalse extends MacroTemplate<course.IMacroTrueFalseProps, course.IMacroTrueFalseState> {
  }
  class MacroSingleChoices extends MacroTemplate<course.IMacroSingleChoicesProps, course.IMacroSingleChoicesState> {
  }
  class MacroPairing extends MacroTemplate<course.IMacroPairingProps, course.IMacroPairingState> {
  }
  class MacroTable extends MacroTemplate<course.IMacroTableProps, course.IMacroTableState> {
  }
  class MacroListWordOrdering extends MacroTemplate<course.IMacroListWordOrderingProps, course.IMacroListWordOrderingState> {
  }
  class MacroList extends MacroTemplate<course.IMacroListProps, course.IMacroListState> {
  }
  class MacroIconList extends MacroTemplate<course.IMacroIconListProps, course.IMacroIconListState> {
  }
  class MacroArticle extends MacroTemplate<course.IMacroArticleProps, course.IMacroArticleState> {
  }
  class MacroVocabulary extends MacroTemplate<course.IMacroVocabularyProps, course.IMacroVocabularyState> {
  }
  class MacroVideo extends MacroTemplate<course.IMacroVideoProps, course.IMacroVideoState> {
  }
  class InlineTag extends MacroTemplate<course.IInlineTagProps, course.IInlineTagState> {
  }
  class SmartTag extends Tag<course.ISmartTagProps, course.ISmartTagState> {
  }
  class SmartElementLow<P extends course.ISmartElementLowProps, S extends course.ISmartElementLowState> extends MacroTemplate<P, S> {
  }
  class SmartElement extends SmartElementLow<course.ISmartElementProps, course.ISmartElementState> {
  }
  class SmartOffering extends SmartElementLow<course.ISmartOfferingProps, course.ISmartOfferingState> {
  }
  class SmartPairing extends SmartElementLow<course.ISmartPairingProps, course.ISmartPairingState> {
  }
}
declare module course {
  const enum IconIds {
    no = 0,
    a = 1,
    b = 2,
    c = 3,
    d = 4,
    e = 5,
    f = 6,
  }
  const enum CheckItemTexts {
    yesNo = 0,
    trueFalse = 1,
    no = 2,
  }
  const enum inlineControlTypes {
    no = 0,
    GapFill = 1,
    GapFill_Correction = 2,
    WordSelection = 3,
    DragTarget = 4,
    img = 5,
    TtsSound = 6,
  }
  const enum modalSize {
    normal = 0,
    small = 1,
    large = 2,
  }
  const enum offeringDropDownMode {
    dropDownDiscard = 0,
    dropDownKeep = 1,
    gapFillIgnore = 2,
  }
  const enum smartOfferingMode {
    gapFill = 0,
    dropDownDiscard = 1,
    dropDownKeep = 2,
    gapFillPassive = 3,
  }
  const enum inlineElementTypes {
    no = 0,
    gapFill = 1,
    gapFillCorrection = 2,
    wordSelection = 3,
    dropDown = 4,
    img = 5,
    ttsSound = 6,
  }
  const enum smartElementTypes {
    no = 0,
    gapFill = 1,
    dropDown = 2,
    offering = 3,
    img = 4,
    wordSelection = 5,
  }
  const enum colors {
    black = 0,
    white = 1,
    primary = 2,
    success = 3,
    info = 4,
    warning = 5,
    danger = 6,
  }
  const enum listIcon {
    number = 0,
    letter = 1,
    upperLetter = 2,
    angleDoubleRight = 3,
    angleRight = 4,
    arrowCircleORight = 5,
    arrowCircleRight = 6,
    arrowRight = 7,
    caretRight = 8,
    caretSquareORight = 9,
    chevronCircleRight = 10,
    chevronRight = 11,
    handORight = 12,
    longArrowRight = 13,
    play = 14,
    playCircle = 15,
    playCircleO = 16,
    circleONotch = 17,
    cog = 18,
    refresh = 19,
    spinner = 20,
    squareO = 21,
    bullseye = 22,
    asterisk = 23,
    circle = 24,
    circleO = 25,
    circleThin = 26,
    dotCircleO = 27,
  }
  const enum pairingLeftWidth {
    normal = 0,
    small = 1,
    xsmall = 2,
    large = 3,
  }
  const enum threeStateBool {
    no = 0,
    true = 1,
    false = 2,
  }
  const enum ExerciseStatus {
    Unknown = 0,
    Normal = 1,
    Preview = 2,
    Evaluated = 3,
    notAttempted = 4,
    removed = 5,
    PreviewLector = 6,
  }
  const enum CourseDataFlag {
    needsEval = 1,
    pcCannotEvaluate = 2,
    hasExternalAttachments = 4,
    done = 8,
    passive = 16,
    testImpl_result = 32,
    testImpl = 64,
    testSkillImpl = 128,
    ex = 256,
    skipAbleRoot = 512,
    modImpl = 1024,
    pretestImp = 2048,
    multiTestImpl = 4096,
    testEx = 8192,
    all = 16127,
    blPretestItem = 16384,
    blLesson = 32768,
    blTest = 65536,
    blPretest = 131072,
    blProductHome = 262144,
    blPretestEx = 524288,
  }
  interface Score {
    s: number;
    ms: number;
    flag: CourseDataFlag;
  }
  interface Result extends Score {
    tg: string;
  }
  interface orderingResult extends Result {
    indexes: Array<number>;
  }
  interface PageUser extends Result {
    i: number;
    st: ExerciseStatus;
    bt: number;
    et: number;
    t: number;
    Results: any;
  }
  interface PairingResult extends Result {
    Value: Array<number>;
  }
  interface SingleChoiceResult extends Result {
    Value?: number;
  }
  interface WordSelectionResult extends SingleChoiceResult {
  }
  interface audioCaptureResult extends HumanEvalResult {
    audioUrl: string;
    recordedMilisecs: number;
    hRecommendFrom: number;
    hFrom: number;
    hTo: number;
  }
  interface WritingResult extends HumanEvalResult {
    text: string;
    words: number;
    hMin: number;
    hMax: number;
    hRecommendMin: number;
  }
  interface GapFillResult extends Result {
    Value: string;
  }
  interface HumanEvalResult extends Result {
    hPercent: number;
    hEmail: string;
    hLmcomId: number;
    hLevel: string;
    hDate: number;
  }
  interface CheckItemResult extends Result {
    Value?: boolean;
  }
  interface evalBtnResult extends Result {
    Value: boolean;
  }
  interface wordMultiSelectionResult extends Result {
    Values: Array<number>;
  }
  interface extensionResult extends Result {
    Value: boolean;
  }
  interface _mediaReplica extends tag {
    iconId: IconIds;
    dlgLeft: boolean;
    actor: string;
  }
  interface _mediaSent extends tag {
    idx: number;
  }
  interface _sndPage extends tag {
  }
  interface _sndFileGroup extends urlTag {
  }
  interface _sndGroup extends tag {
  }
  interface _sndInterval extends tag {
  }
  interface _sndSent extends tag {
    idx: number;
    begPos: number;
    endPos: number;
    text: string;
    actor: string;
  }
  interface _evalPage extends tag {
    maxScore: number;
    radioGroups: string;
  }
  interface _evalBtn extends tag {
    btnId: string;
  }
  interface _evalGroup extends tag {
    isAnd: boolean;
    isExchangeable: boolean;
    evalControlIds: Array<string>;
  }
  interface tag {
    id: string;
    styleSheet: string;
    srcpos: string;
    Items: Array<tag>;
    class: Array<string>;
  }
  interface urlTag extends tag {
    mediaUrl: string;
  }
}
declare module course {
  interface ITagState {
  }
  interface ITagProps extends React.Props<any> {
    id?: string;
    styleSheet?: string;
    srcpos?: string;
  }
  interface IEvalControlState extends ITagState {
  }
  interface IEvalControlProps extends ITagProps {
    evalGroup?: string;
    scoreWeight?: number;
    evalButtonId?: string;
  }
  interface IBodyState extends ITagState {
  }
  interface IBodyProps extends ITagProps {
    title?: string;
    url?: string;
    instrTitle?: string;
    instrBody?: string;
    seeAlsoStr?: string;
  }
  interface IHeaderPropState extends ITagState {
  }
  interface IHeaderPropProps extends ITagProps {
  }
  interface IMacroState extends ITagState {
  }
  interface IMacroProps extends ITagProps {
  }
  interface IHumanEvalState extends IEvalControlState {
  }
  interface IHumanEvalProps extends IEvalControlProps {
    isPassive?: boolean;
  }
  interface IEvalButtonState extends IEvalControlState {
  }
  interface IEvalButtonProps extends IEvalControlProps {
    scoreAsRatio?: boolean;
  }
  interface IDropDownState extends IEditState {
  }
  interface IDropDownProps extends IEditProps {
    gapFillLike?: boolean;
  }
  interface IEditState extends IEvalControlState {
  }
  interface IEditProps extends IEvalControlProps {
    correctValue?: string;
    widthGroup?: string;
    width?: number;
    offeringId?: string;
    caseSensitive?: boolean;
  }
  interface IGapFillState extends IEditState {
  }
  interface IGapFillProps extends IEditProps {
    hint?: string;
    initValue?: string;
    readOnly?: boolean;
    skipEvaluation?: boolean;
  }
  interface IRadioButtonState extends IEvalControlState {
  }
  interface IRadioButtonProps extends IEvalControlProps {
    correctValue?: boolean;
    initValue?: boolean;
    readOnly?: boolean;
    skipEvaluation?: boolean;
  }
  interface ICheckLowState extends IEvalControlState {
  }
  interface ICheckLowProps extends IEvalControlProps {
    correctValue?: boolean;
    textType?: CheckItemTexts;
    initValue?: threeStateBool;
    readOnly?: boolean;
    skipEvaluation?: boolean;
  }
  interface ICheckItemState extends ICheckLowState {
  }
  interface ICheckItemProps extends ICheckLowProps {
  }
  interface ICheckBoxState extends ICheckLowState {
  }
  interface ICheckBoxProps extends ICheckLowProps {
  }
  interface IPairingItemState extends ITagState {
  }
  interface IPairingItemProps extends ITagProps {
    right?: string;
  }
  interface IPairingState extends IEvalControlState {
  }
  interface IPairingProps extends IEvalControlProps {
    leftRandom?: boolean;
    leftWidth?: pairingLeftWidth;
  }
  interface ISingleChoiceState extends ITagState {
  }
  interface ISingleChoiceProps extends ITagProps {
    readOnly?: boolean;
    skipEvaluation?: boolean;
    scoreWeight?: number;
    evalButtonId?: string;
  }
  interface IWordSelectionState extends IEvalControlState {
  }
  interface IWordSelectionProps extends IEvalControlProps {
    words?: string;
  }
  interface IWordMultiSelectionState extends IEvalControlState {
  }
  interface IWordMultiSelectionProps extends IEvalControlProps {
    words?: string;
  }
  interface IWordOrderingState extends IEvalControlState {
  }
  interface IWordOrderingProps extends IEvalControlProps {
    correctOrder?: string;
  }
  interface ISentenceOrderingState extends IEvalControlState {
  }
  interface ISentenceOrderingProps extends IEvalControlProps {
  }
  interface ISentenceOrderingItemState extends ITagState {
  }
  interface ISentenceOrderingItemProps extends ITagProps {
  }
  interface IExtensionState extends IEvalControlState {
  }
  interface IExtensionProps extends IEvalControlProps {
    data?: string;
    cdata?: string;
  }
  interface IWritingState extends IHumanEvalState {
  }
  interface IWritingProps extends IHumanEvalProps {
    limitRecommend?: number;
    limitMin?: number;
    limitMax?: number;
    numberOfRows?: number;
  }
  interface IRecordingState extends IHumanEvalState {
  }
  interface IRecordingProps extends IHumanEvalProps {
    limitRecommend?: number;
    limitMin?: number;
    limitMax?: number;
    recordInDialog?: boolean;
    dialogHeaderId?: string;
    dialogSize?: modalSize;
    singleAttempt?: boolean;
  }
  interface IListState extends IMacroState {
  }
  interface IListProps extends IMacroProps {
    delim?: string;
    isStriped?: boolean;
    icon?: listIcon;
    color?: colors;
  }
  interface IListGroupState extends IMacroState {
  }
  interface IListGroupProps extends IMacroProps {
    isStriped?: boolean;
  }
  interface ITwoColumnState extends IMacroState {
  }
  interface ITwoColumnProps extends IMacroProps {
  }
  interface IPanelState extends IMacroState {
  }
  interface IPanelProps extends IMacroProps {
  }
  interface IDummyState extends ITagState {
  }
  interface IDummyProps extends ITagProps {
  }
  interface IOfferingState extends ITagState {
  }
  interface IOfferingProps extends ITagProps {
    words?: string;
    mode?: offeringDropDownMode;
    hidden?: boolean;
  }
  interface IUrlTagState extends ITagState {
  }
  interface IUrlTagProps extends ITagProps {
    mediaUrl?: string;
  }
  interface IMediaTagState extends IUrlTagState {
  }
  interface IMediaTagProps extends IUrlTagProps {
    cutUrl?: string;
    subset?: string;
    shareMediaId?: string;
    _sentGroupId?: string;
  }
  interface IMediaBigMarkState extends IMediaTagState {
  }
  interface IMediaBigMarkProps extends IMediaTagProps {
  }
  interface IMediaPlayerState extends IMediaTagState {
  }
  interface IMediaPlayerProps extends IMediaTagProps {
  }
  interface IMediaVideoState extends IMediaTagState {
  }
  interface IMediaVideoProps extends IMediaTagProps {
  }
  interface IMediaTextState extends IMediaTagState {
  }
  interface IMediaTextProps extends IMediaTagProps {
    continueMediaId?: string;
    passive?: boolean;
    isOldToNew?: boolean;
    hidden?: boolean;
  }
  interface ISndFileState extends IUrlTagState {
  }
  interface ISndFileProps extends IUrlTagProps {
    file?: IIncludeProps;
  }
  interface ICutDialogState extends ISndFileState {
  }
  interface ICutDialogProps extends ISndFileProps {
  }
  interface ICutTextState extends ISndFileState {
  }
  interface ICutTextProps extends ISndFileProps {
  }
  interface IPhraseState extends ITagState {
  }
  interface IPhraseProps extends ITagProps {
    begPos?: number;
    endPos?: number;
    idx?: number;
  }
  interface IReplicaState extends ITagState {
  }
  interface IReplicaProps extends ITagProps {
    actorId?: IconIds;
    actorName?: string;
    numberOfPhrases?: number;
  }
  interface IIncludeState extends ITagState {
  }
  interface IIncludeProps extends ITagProps {
    cutUrl?: string;
  }
  interface IIncludeTextState extends IIncludeState {
  }
  interface IIncludeTextProps extends IIncludeProps {
  }
  interface IIncludeDialogState extends IIncludeState {
  }
  interface IIncludeDialogProps extends IIncludeProps {
  }
  interface IPhraseReplaceState extends ITagState {
  }
  interface IPhraseReplaceProps extends ITagProps {
    phraseIdx?: number;
    replicaPhraseIdx?: string;
  }
  interface IMacroTemplateState extends IMacroState {
  }
  interface IMacroTemplateProps extends IMacroProps {
    name?: string;
    cdata?: string;
  }
  interface IMacroTrueFalseState extends IMacroTemplateState {
  }
  interface IMacroTrueFalseProps extends IMacroTemplateProps {
    textId?: CheckItemTexts;
  }
  interface IMacroSingleChoicesState extends IMacroTemplateState {
  }
  interface IMacroSingleChoicesProps extends IMacroTemplateProps {
  }
  interface IMacroPairingState extends IMacroTemplateState {
  }
  interface IMacroPairingProps extends IMacroTemplateProps {
  }
  interface IMacroTableState extends IMacroTemplateState {
  }
  interface IMacroTableProps extends IMacroTemplateProps {
    inlineType?: inlineControlTypes;
  }
  interface IMacroListWordOrderingState extends IMacroTemplateState {
  }
  interface IMacroListWordOrderingProps extends IMacroTemplateProps {
  }
  interface IMacroListState extends IMacroTemplateState {
  }
  interface IMacroListProps extends IMacroTemplateProps {
    inlineType?: inlineControlTypes;
  }
  interface IMacroIconListState extends IMacroTemplateState {
  }
  interface IMacroIconListProps extends IMacroTemplateProps {
    delim?: string;
    isStriped?: boolean;
    icon?: listIcon;
    color?: colors;
  }
  interface IMacroArticleState extends IMacroTemplateState {
  }
  interface IMacroArticleProps extends IMacroTemplateProps {
  }
  interface IMacroVocabularyState extends IMacroTemplateState {
  }
  interface IMacroVocabularyProps extends IMacroTemplateProps {
  }
  interface IMacroVideoState extends IMacroTemplateState {
  }
  interface IMacroVideoProps extends IMacroTemplateProps {
    cutUrl?: string;
    mediaUrl?: string;
    displayStyle?: string;
  }
  interface IInlineTagState extends IMacroTemplateState {
  }
  interface IInlineTagProps extends IMacroTemplateProps {
    inlineType?: inlineElementTypes;
  }
  interface ISmartTagState extends ITagState {
  }
  interface ISmartTagProps extends ITagProps {
    correct?: boolean;
    defaultInlineType?: inlineControlTypes;
  }
  interface ISmartElementLowState extends IMacroTemplateState {
  }
  interface ISmartElementLowProps extends IMacroTemplateProps {
  }
  interface ISmartElementState extends ISmartElementLowState {
  }
  interface ISmartElementProps extends ISmartElementLowProps {
    inlineType?: smartElementTypes;
  }
  interface ISmartOfferingState extends ISmartElementLowState {
  }
  interface ISmartOfferingProps extends ISmartElementLowProps {
    words?: string;
    mode?: smartOfferingMode;
  }
  interface ISmartPairingState extends ISmartElementLowState {
  }
  interface ISmartPairingProps extends ISmartElementLowProps {
    random?: boolean;
    leftWidth?: pairingLeftWidth;
  }
}
