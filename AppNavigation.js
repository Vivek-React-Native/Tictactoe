import {
  TicTacToe,
  AtulTask,
  ParthTask,
  Music,
  StarPatterns,
  Opacity,
  FlatListAnimation,
  NotificationOnDate,
  GestureAnimations,
  CardMatching,
  QuizApp,
  SensorAnimation,
  ChatScreen,
  FlatListWidthAnimation,
  DotAnimation,
  PhotoGallery,
  PhoneNumber,
  SwipableList,
  FirebasePhoneNumber,
  YoutubeApi,
  OpenAi,
  ImageStrechAnimation,
  Graphql,
  Stripe,
  Razorpay,
  Overlaping,
  Reactiive_Reanimated,
} from './Sources/Screens';

const AllScreens = [
  {
    name: 'Reactiive Reanimated videos',
    component: Reactiive_Reanimated,
    description: '',
  },
  { name: 'Overlaping Subjects', component: Overlaping, description: '' },
  {
    name: 'Razorpay Payment Integration',
    component: Razorpay,
    description: '',
  },
  { name: 'Stripe Payment Integration', component: Stripe, description: '' },
  { name: 'Apollo Graphql', component: Graphql, description: '' },
  {
    name: 'Image Streach Animation',
    component: ImageStrechAnimation,
    description: '',
  },
  { name: 'Open Ai', component: OpenAi, description: '' },
  { name: 'Youtube Api', component: YoutubeApi, description: '' },
  { name: 'Tic tac toe', component: TicTacToe, description: '' },
  { name: 'Task by Atul', component: AtulTask, description: '' },
  { name: 'Task by Parth Sakhiya', component: ParthTask, description: '' },
  { name: 'Music', component: Music, description: '' },
  { name: 'Star patterns', component: StarPatterns, description: '' },
  { name: 'Opacity animation', component: Opacity, description: '' },
  { name: 'Flatlist animation', component: FlatListAnimation, description: '' },
  {
    name: 'Notification on Specific dates',
    component: NotificationOnDate,
    description: '',
  },
  { name: 'Gesture animations', component: GestureAnimations, description: '' },
  // { name: 'PDF Scanner', component: PdfScanner , description:''},
  { name: 'Card matching game', component: CardMatching, description: '' },
  { name: 'Quiz App', component: QuizApp, description: '' },
  { name: 'Sensor animation', component: SensorAnimation, description: '' },
  { name: 'Chat screen', component: ChatScreen, description: '' },
  {
    name: 'Flatlist width animation',
    component: FlatListWidthAnimation,
    description: '',
  },
  { name: 'Dot animation', component: DotAnimation, description: '' },
  { name: 'Photo Gallery', component: PhotoGallery, description: '' },
  { name: 'Phone Number', component: PhoneNumber, description: '' },
  { name: 'Swipable List animation', component: SwipableList, description: '' },
  {
    name: 'Firebase Phone number',
    component: FirebasePhoneNumber,
    description: '',
  },
];

export { AllScreens };
