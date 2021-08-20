declare const target: 'client' | 'server' | 'webworker';

interface EventParams {
  category: string;
  action?: string;
  label?: string;
  value?: string;
}

interface PageViewParams {
  url: string;
  title: string;
  referer: string;
  params?: string;
}

interface FileParams {
  file: string;
}

interface ErrorParams {
  category: string;
  action?: string;
  label?: string;
  value?: string;
}

interface Stack {
  event: EventParams[];
  pageview: PageViewParams[];
  file: FileParams[];
  error: ErrorParams[];
}

export default class Analytics {
  public static GooglaAnalytics: any;
  public static YandexMetric: any;

  public static stack: Stack = {
    event: [],
    pageview: [],
    file: [],
    error: [],
  };

  public static init() {
    if (target !== 'client') {
      return;
    }

    Analytics.pageview({
      url: window.location.pathname + window.location.search,
      title: window.document.title,
      referer: window.document.referrer,
    });

    Analytics._watch();
  }

  public static event(params: EventParams) {
    if (target !== 'client') {
      return;
    }

    Analytics.stack.event.push(params);

    Analytics._watch();
  }

  public static pageview(params: PageViewParams) {
    if (target !== 'client') {
      return;
    }

    Analytics.stack.pageview.push(params);

    Analytics._watch();
  }

  public static file(params: FileParams) {
    if (target !== 'client') {
      return;
    }

    Analytics.stack.file.push(params);

    Analytics._watch();
  }

  public static error(params: ErrorParams) {
    if (target !== 'client') {
      return;
    }

    Analytics.stack.error.push(params);

    Analytics._watch();
  }

  /**********************************************/

  private static _watch() {
    if (target !== 'client') {
      return;
    }

    if (!Analytics.GooglaAnalytics && (window as any).ga) {
      Analytics.GooglaAnalytics = (window as any).ga;
      Analytics.GooglaAnalytics('create', 'UA-18733193-8', location.hostname);
    }

    if (!Analytics.YandexMetric && (window as any).Ya) {
      Analytics.YandexMetric = new (window as any).Ya.Metrika({
        id: 21098149,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        trackHash: true,
      });
    }

    if (
        Analytics.GooglaAnalytics &&
        Analytics.YandexMetric
    ) {
      while (Analytics.stack.event.length > 0) {
        Analytics.processEvent(Analytics.stack.event.shift());
      }

      while (Analytics.stack.pageview.length > 0) {
        Analytics.processPageView(Analytics.stack.pageview.shift());
      }

      while (Analytics.stack.file.length > 0) {
        Analytics.processFile(Analytics.stack.file.shift());
      }

      while (Analytics.stack.error.length > 0) {
        Analytics.processError(Analytics.stack.error.shift());
      }
    } else {
      requestAnimationFrame(() => Analytics._watch());
    }
  }

  private static processEvent(params: EventParams) {
    const args = Analytics.cut([params.category, params.action, params.label, params.value]);

    Analytics.GooglaAnalytics('send', 'event', ...args);
    Analytics.YandexMetric.reachGoal(['send', 'event', ...args].join('-'));
  }

  private static processPageView(params: PageViewParams) {
    const args = Analytics.cut([params.url, params.title, params.referer, params.params]);

    Analytics.GooglaAnalytics('send', 'pageview', {'page': args[0], 'title': args[1]});
    Analytics.YandexMetric.hit(...args);
  }

  private static processFile(params: FileParams) {
    Analytics.YandexMetric.file(params.file);
  }

  private static processError(params: ErrorParams) {
    const args = Analytics.cut([params.category, params.action, params.label, params.value]);

    Analytics.GooglaAnalytics('send', 'exception', {'exDescription': args.join('-')});
    Analytics.YandexMetric.reachGoal(['send', 'error', args[0]].join('-'));
  }

  private static cut(params: any[]) {
    const result = [];

    for (const v of params) {
      if (v) {
        result.push(v);
      } else {
        break;
      }
    }

    return result;
  }
}
