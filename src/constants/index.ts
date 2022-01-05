type ObjType = {
  [key: string]: {
    [path: string]: string
  }
}

export const experiments: ObjType = {
  scrollbyscreen: {
    path: '/pages/scrollByScreen/combined/index.html',
    title: 'Scroll By Screen',
    desc: '한 페이지 씩 스크롤하기'
  },
  zoomimagescroll: {
    path: '/pages/zoomImageScroll/index.html',
    title: 'Zoom Image Scroll',
    desc: '스크롤 할 때 이미지 확대 이벤트'
  },
  simpletimelinechart: {
    path: '/pages/simpleTimelineChart/index.html',
    title: 'Simple Timeline Canvas Chart',
    desc: 'Canvas 로 구현한 간단한 라인차트'
  },
  astar: {
    path: '/pages/astar/latest/index.html',
    title: 'Astar Path Finding Algorighm V1.0.0',
    desc: 'Java Script 로 Astar 구현하기'
  }
};

export const posts: ObjType = {
  makingblog: {
    path: '/posts/makingblog.md',
    title: 'Build a personal blog with limeted budget',
    desc: '소비용으로 개인 블로그 개발 및 구축 (feat. AWS)'
  },
  scrollbyscreen: {
    path: '/posts/test.md',
    title: 'Scroll By Screen',
    desc: '한 페이지 씩 스크롤하기'
  },
  zoomimagescroll: {
    path: '/posts/test.md',
    title: 'Zoom Image Scroll',
    desc: '애플 홈페이지처럼 스크롤시 애니메이션이 실행되는 간지나는 메인 화면을 만들어보자!'
  },
  simpletimelinechart: {
    path: '/posts/test.md',
    title: 'Simple Timeline Canvas Chart',
    desc: 'Canvas 로 구현한 간단한 라인차트'
  },
  astar: {
    path: '/posts/astar.md',
    title: 'A* path finding algorithm',
    desc: 'Java Script 로 구현한 A* 최단거리 알고리즘'
  }
};
