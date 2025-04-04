/* eslint-disable max-lines */
import Word, { CharType } from 'types/Word';

interface VerseData {
  id: number;
  verseNumber: number;
  verseKey: string;
  textUthmani: string;
  chapterId: number;
  textImlaeiSimple: string;
  pageNumber: number;
  words: Word[];
}

// Split the words array into smaller chunks to keep file length under limit
const verseWords: Word[] = [
  {
    id: 32396,
    position: 1,
    audioUrl: 'wbw/038_029_001.mp3',
    verseKey: '38:29',
    verseId: 3999,
    location: '38:29:1',
    textUthmani: 'كِتَـٰبٌ',
    qpcUthmaniHafs: 'كِتَٰبٌ',
    charTypeName: CharType.Word,
    pageNumber: 455,
    lineNumber: 4,
    text: 'كِتَٰبٌ',
  },
  {
    id: 32397,
    position: 2,
    audioUrl: 'wbw/038_029_002.mp3',
    verseKey: '38:29',
    verseId: 3999,
    location: '38:29:2',
    textUthmani: 'أَنزَلْنَـٰهُ',
    qpcUthmaniHafs: 'أَنزَلۡنَٰهُ',
    charTypeName: CharType.Word,
    pageNumber: 455,
    lineNumber: 4,
    text: 'أَنزَلۡنَٰهُ',
  },
  {
    id: 32398,
    position: 3,
    audioUrl: 'wbw/038_029_003.mp3',
    verseKey: '38:29',
    verseId: 3999,
    location: '38:29:3',
    textUthmani: 'إِلَيْكَ',
    qpcUthmaniHafs: 'إِلَيۡكَ',
    charTypeName: CharType.Word,
    pageNumber: 455,
    lineNumber: 4,
    text: 'إِلَيۡكَ',
  },
  {
    id: 32399,
    position: 4,
    audioUrl: 'wbw/038_029_004.mp3',
    verseKey: '38:29',
    verseId: 3999,
    location: '38:29:4',
    textUthmani: 'مُبَـٰرَكٌۭ',
    qpcUthmaniHafs: 'مُبَٰرَكٞ',
    charTypeName: CharType.Word,
    pageNumber: 455,
    lineNumber: 4,
    text: 'مُبَٰرَكٞ',
  },
  {
    id: 32400,
    position: 5,
    audioUrl: 'wbw/038_029_005.mp3',
    verseKey: '38:29',
    verseId: 3999,
    location: '38:29:5',
    textUthmani: 'لِّيَدَّبَّرُوٓا۟',
    qpcUthmaniHafs: 'لِّيَدَّبَّرُوٓاْ',
    charTypeName: CharType.Word,
    pageNumber: 455,
    lineNumber: 4,
    text: 'لِّيَدَّبَّرُوٓاْ',
  },
  {
    id: 32401,
    position: 6,
    audioUrl: 'wbw/038_029_006.mp3',
    verseKey: '38:29',
    verseId: 3999,
    location: '38:29:6',
    textUthmani: 'ءَايَـٰتِهِۦ',
    qpcUthmaniHafs: 'ءَايَٰتِهِۦ',
    charTypeName: CharType.Word,
    pageNumber: 455,
    lineNumber: 4,
    text: 'ءَايَٰتِهِۦ',
  },
  {
    id: 32402,
    position: 7,
    audioUrl: 'wbw/038_029_007.mp3',
    verseKey: '38:29',
    verseId: 3999,
    location: '38:29:7',
    textUthmani: 'وَلِيَتَذَكَّرَ',
    qpcUthmaniHafs: 'وَلِيَتَذَكَّرَ',
    charTypeName: CharType.Word,
    pageNumber: 455,
    lineNumber: 4,
    text: 'وَلِيَتَذَكَّرَ',
  },
  {
    id: 32403,
    position: 8,
    audioUrl: 'wbw/038_029_008.mp3',
    verseKey: '38:29',
    verseId: 3999,
    location: '38:29:8',
    textUthmani: 'أُو۟لُوا۟',
    qpcUthmaniHafs: 'أُوْلُواْ',
    charTypeName: CharType.Word,
    pageNumber: 455,
    lineNumber: 4,
    text: 'أُوْلُواْ',
  },
  {
    id: 32404,
    position: 9,
    audioUrl: 'wbw/038_029_009.mp3',
    verseKey: '38:29',
    verseId: 3999,
    location: '38:29:9',
    textUthmani: 'ٱلْأَلْبَـٰبِ',
    qpcUthmaniHafs: 'ٱلۡأَلۡبَٰبِ',
    charTypeName: CharType.Word,
    pageNumber: 455,
    lineNumber: 5,
    text: 'ٱلۡأَلۡبَٰبِ',
  },
  {
    id: 32405,
    position: 10,
    audioUrl: null,
    verseKey: '38:29',
    verseId: 3999,
    location: '38:29:10',
    textUthmani: '٢٩',
    qpcUthmaniHafs: '٢٩',
    charTypeName: CharType.End,
    pageNumber: 455,
    lineNumber: 5,
    text: '٢٩',
  },
];

const verse3829: VerseData = {
  id: 3999,
  verseNumber: 29,
  verseKey: '38:29',
  textUthmani:
    'كِتَـٰبٌ أَنزَلْنَـٰهُ إِلَيْكَ مُبَـٰرَكٌ لِّيَدَّبَّرُوٓا۟ ءَايَـٰتِهِۦ وَلِيَتَذَكَّرَ أُو۟لُوا۟ ٱلْأَلْبَـٰبِ',
  chapterId: 38,
  textImlaeiSimple: 'كتاب انزلناه اليك مبارك ليدبروا اياته وليتذكر اولو الالباب',
  pageNumber: 455,
  words: verseWords,
};

export default verse3829;
