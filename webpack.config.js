const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const outputType = process.env.OUTPUT_TYPE // 读取当前的输出格式（UMD/ESM）

/** @type {import('webpack').Configuration} */
const config = {
  mode: isProduction ? 'production' : 'development',

  entry:
    // 打包输出 ESM 格式文件，最终要输出多个文件，便于实现按需加载，因此设置为多入口。
    outputType === 'esm'
      ? {
          add: './src/calc/add.ts',
          subtract: './src/calc/subtract.ts',
          multiply: './src/calc/multiply.ts',
          divide: './src/calc/divide.ts'
        }
      : isProduction
      ? './src/calc/index.ts'
      : './src/index.ts',

  // 由于输出 ESM 格式文件为 Webpack 实验特性，因此需要加上此配置。
  experiments: {
    outputModule: outputType === 'esm'
  },

  // 针对不同的环境变量，执行不同的打包动作。
  output:
    outputType === 'esm'
      ? // ESM
        {
          path: path.resolve(__dirname, 'es'),
          filename: '[name].esm.js',
          library: {
            type: 'module'
          },
          chunkFormat: 'module',
          clean: true
        }
      : // UMD
        {
          path: path.resolve(__dirname, 'lib'),
          filename: 'index.js',
          library: {
            name: 'calc',
            type: 'umd',
            export: 'default'
          },
          globalObject: 'globalThis',
          clean: true
        },

  resolve: {
    extensions: ['.js', '.json', '.ts']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']]
            }
          },
          { loader: 'ts-loader' }
        ]
      }
    ]
  },
  plugins: [...(!isProduction ? [new HtmlWebpackPlugin()] : [])]
}

module.exports = config
