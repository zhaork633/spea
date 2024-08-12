import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {pluginRem} from '@rsbuild/plugin-rem';

export default defineConfig({
    plugins: [
        pluginReact(),
        pluginRem({
            screenWidth: 1920,
            rootFontSize: 100,
            maxRootFontSize: 500
        })
    ],
});
