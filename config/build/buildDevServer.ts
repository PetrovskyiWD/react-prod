import type { Configuration as DevConFigurations } from "webpack-dev-server";
import type { BuildOptions } from "./types/config";

export default function(options: BuildOptions): DevConFigurations {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true
  }
}
