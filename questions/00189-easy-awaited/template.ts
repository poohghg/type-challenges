type MyAwaited<T> = T extends PromiseLike<infer R> ? Awaited<R> : T;

