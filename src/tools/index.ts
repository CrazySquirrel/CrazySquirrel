export function prop(target: any = {}, path: string = '', def?: any) {
  try {
    const parsedPath = path.trim().split('.');

    for (const p of parsedPath) {
      target = target[p];
    }

    return target;
  } catch (e) {
    return def;
  }
}
