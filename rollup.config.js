import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';

export default {
    input: 'index.ts',
    output: {
        file: 'dist/d2l-telemetry-browser-client.js',
        format: 'umd',
        name: 'd2lTelemetryBrowserClient'
    },
    plugins: [
        typescript({ tsconfig: false }),
        terser()
    ]
}