class HelperHTTP {
    static joinURL(...args: string[]): string {
        return args.join().replace(',', '');
    }
}

export default HelperHTTP;