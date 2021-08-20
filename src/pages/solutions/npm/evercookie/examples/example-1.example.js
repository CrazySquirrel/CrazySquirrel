let EverCookie = required('EverCookie.js');

let LocalEverCookie = new EverCookie(uid);

LocalEverCookie.setItem(checkSupport, key, value);
LocalEverCookie.getItem(checkSupport, key);
LocalEverCookie.removeItem(checkSupport, key);
LocalEverCookie.getKeys(checkSupport);
LocalEverCookie.clear(checkSupport);
LocalEverCookie.destroy();