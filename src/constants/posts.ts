type ObjType = {
  [key: string]: {
    [path: string]: string
  }
}

const posts: ObjType = {
  makingblog: {
    path: '@/static/posts/makingblog/makingblog.md',
    title: 'Build a personal blog with limeted budget',
    desc: '소비용으로 개인 블로그 개발 및 구축 (feat. AWS)'
  },
  scrollbyscreen: {
    path: '@/static/posts/scrollbyscreen/scrollbyscreen.md',
    title: 'Scroll By Screen',
    desc: '한 페이지 씩 스크롤하기'
  },
  zoomimagescroll: {
    path: '@/static/posts/zoomimagescroll/zoomimagescroll.md',
    title: 'Zoom Image Scroll',
    desc: '애플 홈페이지처럼 스크롤시 애니메이션이 실행되는 간지나는 메인 화면을 만들어보자!'
  },
  simpletimelinechart: {
    path: '@/static/posts/simpletimelinechart/simpletimelinechart.md',
    title: 'Simple Timeline Canvas Chart',
    desc: 'Canvas 로 구현한 간단한 라인차트'
  },
  astar: {
    path: '@/static/posts/astar/astar.md',
    title: 'A* path finding algorithm',
    desc: 'Java Script 로 구현한 A* 최단거리 알고리즘'
  },
  visualizedArrayCompare: {
    path: '@/static/posts/visualizedArrayCompare/visualizedArrayCompare.md',
    title: 'Visualize changes history between two arrays',
    desc: '두 개의 배열의 변경점을 시각화하여 모듈화하려고 했는데 마땅한 라이브러리가 없네... 직접 그려보자!'
  },
  varcal: {
    path: '@/static/posts/varcal/varcal.md',
    title: 'Calculator with variables',
    desc: '숫자 및 산술연식을 변수에 대입하여 계산하는 계산기. React Native 로 만들고 Expo 로 배포하기.'
  }
};

export default posts;
