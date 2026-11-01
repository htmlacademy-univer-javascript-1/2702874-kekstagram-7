const PHOTOS_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATARS_COUNT = 6;
const SENTENCES_MIN = 1;
const SENTENCES_MAX = 2;

const DESCRIPTIONS = [
  'Красивый закат на берегу моря',
  'Прогулка по осеннему парку',
  'Утренний кофе и свежая выпечка',
  'Любимый кот на подоконнике',
  'Вид с вершины горы',
  'Городские огни после дождя',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артём',
  'Елена',
  'Иван',
  'Мария',
  'Никита',
  'Ольга',
  'Сергей',
  'Татьяна',
];

let commentId = 0;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => {
  const sentences = [];
  const sentencesCount = getRandomInteger(SENTENCES_MIN, SENTENCES_MAX);

  for (let i = 0; i < sentencesCount; i += 1) {
    sentences.push(getRandomArrayElement(MESSAGES));
  }

  commentId += 1;

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
    message: sentences.join(' '),
    name: getRandomArrayElement(NAMES),
  };
};

const createComments = () => {
  const commentsCount = getRandomInteger(COMMENTS_MIN, COMMENTS_MAX);

  return Array.from({length: commentsCount}, () => createComment());
};

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: createComments(),
});

const createPhotos = () => Array.from({length: PHOTOS_COUNT}, (_, index) => createPhoto(index + 1));

const photos = createPhotos();

void photos;
