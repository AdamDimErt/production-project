import { BuildOptions } from "./types/config";

import webpack from 'webpack'
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

 export function buildWebpackConfig (options:BuildOptions):webpack.Configuration{

  const {paths,mode,isDev} = options

    return {
        mode,
        entry:paths.entry, //стартовая точка проекта
        module: {
          rules: buildLoaders(options)
          
        },
        resolve: buildResolves(),
        output: {
          filename: "[name].[contenthash].js", //для того что бы в main добавить hash
          path:paths.build,
          clean: true, // очистка старых builds
        },
        plugins: buildPlugins(options.paths),
        devtool: isDev? 'inline-source-map':undefined,
        devServer:isDev? buildDevServer(options):undefined
        
      }
 }