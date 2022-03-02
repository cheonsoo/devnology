class ScrollMeter {
  private element: any;
  private scrollDiv: any;
  private timer: any;
  private options: any;

  constructor(element: any, options: any) {
    console.log('### ScrollMeter');

    this.element = element;
    this.scrollDiv = null;
    this.timer = null;
    this.options = options;
    this.options = {
      direction: 'right',
      leftColor: 'rgba(60, 112, 150, 0.9)',
      rightColor: 'rgba(0, 0, 0, 0.8)',
      height: '10',
      top: '50',
      debug: false
    };

    this.initialize();
  }

  initialize() {
    console.log('### initialize');

    const opt = this.options;

    this.element.style.width = '100%';
    this.element.style.height = `${opt.height}px`;
    this.element.style.backgroundColor = `${opt.rightColor}`;
    this.element.style.top = `${opt.top}px`;
    this.element.style.position = 'sticky';
    this.element.style.zIndex = '10000000';

    const div = document.createElement('div');
    div.setAttribute('id', 'scrollmeter-div');
    div.className = 'scrollmeter-div'
    div.style.width = '100%';
    div.style.height = `${opt.height}px`;
    div.style.backgroundColor = `${opt.rightColor}`;
    div.style.top = `${opt.top}px`;
    div.style.position = 'sticky';
    div.style.zIndex = '10000000';

    if (this.element) {
      // body.before(div);
      this.element.appendChild(div);
    }

    this.scrollDiv = div;

    this.setThrottling();
  }

  setThrottling = () => {
    window.addEventListener('scroll', () => {
      if (!this.timer) {
        this.timer = setTimeout(() => {
          this.timer = null;
          this.handleScrollMeter();
        }, 10);
      }
    });
  };

  handleScrollMeter = () => {
    const windowHeight = window.document.body.getBoundingClientRect().height - window.screen.availHeight + 111;
    const poz = window.scrollY;
    const ratio = poz / windowHeight * 100;

    const opt = this.options;

    if (this.scrollDiv) {
      const color = `linear-gradient(to ${opt.direction}, ${opt.leftColor} ${ratio}%, ${opt.rightColor} ${ratio}% ${100 - ratio}%)`;
      this.scrollDiv.style.background = color;

      if (opt.debug)
        console.log(`windowHeight: ${windowHeight}, poz: ${poz}, ratio: ${ratio}, color: ${color}`);
    }
  };
};

export default ScrollMeter;
