
import { text } from './build/banner.json'
import packageInfo from './package.json'

import vue from 'rollup-plugin-vue'
import node from '@rollup/plugin-node-resolve'
import cjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2';

import fs from 'fs'
import path from 'path'

const baseFolderPath = './src/components/'
const banner = text.replace('${version}', packageInfo.version)

const components = fs
    .readdirSync(baseFolderPath)
    .filter((f) =>
        fs.statSync(path.join(baseFolderPath, f)).isDirectory()
    )

const entries = {
    'index': './src/index.ts',
    ...components.reduce((obj, name) => {
        obj[name] = (baseFolderPath + name)
        return obj
    }, {})
}

const babelOptions = {
    babelHelpers: 'bundled'
}

const vuePluginConfig = {
    template: {
        isProduction: true,
        compilerOptions: {
            whitespace: 'condense'
        }
    }
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export default () => {
    let config = []

    if (process.env.MINIFY === 'true') {
        config = config.filter((c) => !!c.output.file)
        config.forEach((c) => {
            c.output.file = c.output.file.replace(/.m?js/g, r => `.min${r}`)
            c.plugins.push(terser({
                output: {
                    comments: '/^!/'
                }
            }))
        })
    }
    return config
}
