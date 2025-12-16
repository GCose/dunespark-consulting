declare module 'preload-it' {
    interface PreloadItInstance {
        fetch(urls: string[]): PreloadItInstance;
        progress(callback: (progress: number) => void): PreloadItInstance;
        done(callback: () => void): PreloadItInstance;
    }

    function preloadit(): PreloadItInstance;
    export default preloadit;
}